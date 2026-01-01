import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-232426bc/health", (c) => {
  return c.json({ status: "ok" });
});

// Registration endpoint - Store user registration data
app.post("/make-server-232426bc/register", async (c) => {
  try {
    const body = await c.req.json();
    
    // Validate required fields
    const { fullName, email, phone, countryCode, dateOfVisit, preferredCity } = body;
    
    if (!fullName || !email || !phone || !dateOfVisit || !preferredCity) {
      return c.json({ 
        success: false, 
        error: "Missing required fields" 
      }, 400);
    }

    // Generate unique registration ID
    const registrationId = `reg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const timestamp = new Date().toISOString();

    // Prepare registration data
    const registrationData = {
      id: registrationId,
      fullName,
      email,
      phone: `${countryCode}${phone}`,
      countryCode,
      dateOfVisit,
      preferredCity,
      educationalSession: body.educationalSession || "none",
      consultationService: body.consultationService || "none",
      registeredAt: timestamp,
      source: "website",
      status: "confirmed"
    };

    // Store in KV store with email as secondary key for lookup
    await kv.set(`registration:${registrationId}`, registrationData);
    await kv.set(`email:${email.toLowerCase()}`, registrationId);

    console.log(`✅ Registration successful: ${registrationId} - ${email}`);

    return c.json({
      success: true,
      message: "Registration successful",
      registrationId,
      data: registrationData
    });

  } catch (error) {
    console.error("❌ Registration error:", error);
    return c.json({ 
      success: false, 
      error: error.message || "Failed to process registration" 
    }, 500);
  }
});

// Get registration by email (for checking duplicates)
app.get("/make-server-232426bc/registration/:email", async (c) => {
  try {
    const email = c.req.param("email").toLowerCase();
    
    const registrationId = await kv.get(`email:${email}`);
    
    if (!registrationId) {
      return c.json({ 
        success: false, 
        message: "Registration not found" 
      }, 404);
    }

    const registration = await kv.get(`registration:${registrationId}`);

    return c.json({
      success: true,
      data: registration
    });

  } catch (error) {
    console.error("❌ Lookup error:", error);
    return c.json({ 
      success: false, 
      error: error.message 
    }, 500);
  }
});

// Get all registrations (admin endpoint)
app.get("/make-server-232426bc/registrations", async (c) => {
  try {
    const registrations = await kv.getByPrefix("registration:");
    
    return c.json({
      success: true,
      count: registrations.length,
      data: registrations
    });

  } catch (error) {
    console.error("❌ Fetch error:", error);
    return c.json({ 
      success: false, 
      error: error.message 
    }, 500);
  }
});

Deno.serve(app.fetch);