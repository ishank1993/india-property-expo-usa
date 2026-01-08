import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js@2";

// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const supabase = createClient(supabaseUrl, supabaseServiceKey);

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

    // Prepare registration data
    const registrationData = {
      id: registrationId,
      full_name: fullName,
      email: email.toLowerCase(),
      phone: `${countryCode}${phone}`,
      country_code: countryCode,
      date_of_visit: dateOfVisit,
      preferred_city: preferredCity,
      educational_session: body.educationalSession || "none",
      consultation_service: body.consultationService || "none",
      source: "website",
      status: "confirmed"
    };

    // Insert into Supabase table
    const { data, error } = await supabase
      .from('registrations')
      .insert([registrationData])
      .select()
      .single();

    if (error) {
      console.error("❌ Database error:", error);
      return c.json({ 
        success: false, 
        error: error.message 
      }, 500);
    }

    console.log(`✅ Registration successful: ${registrationId} - ${email}`);

    return c.json({
      success: true,
      message: "Registration successful",
      registrationId,
      data: {
        id: data.id,
        fullName: data.full_name,
        email: data.email,
        phone: data.phone,
        countryCode: data.country_code,
        dateOfVisit: data.date_of_visit,
        preferredCity: data.preferred_city,
        ed{ data, error } = await supabase
      .from('registrations')
      .select('*')
      .eq('email', email)
      .single();
    
    if (error || !data) {
      return c.json({ 
        success: false, 
        message: "Registration not found" 
      }, 404);
    }

    return c.json({
      success: true,
      data: {
        id: data.id,
        fullName: data.full_name,
        email: data.email,
        phone: data.phone,
        countryCode: data.country_code,
        dateOfVisit: data.date_of_visit,
        preferredCity: data.preferred_city,
        educationalSession: data.educational_session,
        consultationService: data.consultation_service,
        registeredAt: data.registered_at,
        source: data.source,
        status: data.status
      }{ data, error } = await supabase
      .from('registrations')
      .select('*')
      .order('registered_at', { ascending: false });
    
    if (error) {
      console.error("❌ Fetch error:", error);
      return c.json({ 
        success: false, 
        error: error.message 
      }, 500);
    }

    // Transform data to match expected format
    const transformedData = data.map(reg => ({
      id: reg.id,
      fullName: reg.full_name,
      email: reg.email,
      phone: reg.phone,
      countryCode: reg.country_code,
      dateOfVisit: reg.date_of_visit,
      preferredCity: reg.preferred_city,
      educationalSession: reg.educational_session,
      consultationService: reg.consultation_service,
      registeredAt: reg.registered_at,
      source: reg.source,
      status: reg.status
    }));
    
    return c.json({
      success: true,
      count: transformedData.length,
      data: transformedData426bc/registration/:email", async (c) => {
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