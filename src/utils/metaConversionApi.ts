// Meta Conversion API Integration
// Tracks user events and sends them to Meta/Facebook for conversion tracking

const META_PIXEL_ID = '3272638869567454'; // Your Meta Pixel ID
const META_ACCESS_TOKEN = 'EAAdXENm51OsBQWHOYfzUZA9u8p53b6nn00ZCuxADWUW4ZBcLvPHvdx0QYKVqETj1xFL3D1ayndEwMZB2Ygl4BOP2p1ZCGk6OWQHObeB7IsJpq6ChJdWlxBNQC5f6G2DaC5Qk87GIUVFrIjfDM3ZAXyVbz72oZAF82WFQNty8msD4ZBwI7cGCPG5tgoBazRIwLvAGigZDZD';
const META_API_VERSION = 'v18.0';

// Generate a unique event ID
function generateEventId(): string {
  return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Hash user data using SHA-256 (Meta requires hashed PII)
async function hashData(data: string): Promise<string> {
  if (!data) return '';
  
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data.toLowerCase().trim());
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

interface UserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  country?: string;
}

interface ConversionEvent {
  eventName: string;
  eventTime: number;
  eventId: string;
  eventSourceUrl: string;
  userData: {
    em?: string; // hashed email
    ph?: string; // hashed phone
    fn?: string; // hashed first name
    ln?: string; // hashed last name
    ct?: string; // hashed city
    country?: string; // hashed country
    client_ip_address?: string;
    client_user_agent?: string;
    fbc?: string; // Facebook Click ID
    fbp?: string; // Facebook Browser ID
  };
  customData?: Record<string, any>;
}

// Send conversion event to Meta
export async function sendMetaConversionEvent(
  eventName: string,
  userData: UserData,
  customData?: Record<string, any>
): Promise<void> {
  try {
    // Extract name parts
    const nameParts = userData.firstName?.split(' ') || [];
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Hash user data
    const hashedUserData: any = {};
    
    if (userData.email) {
      hashedUserData.em = await hashData(userData.email);
    }
    
    if (userData.phone) {
      // Remove non-digits and hash
      const cleanPhone = userData.phone.replace(/\D/g, '');
      hashedUserData.ph = await hashData(cleanPhone);
    }
    
    if (firstName) {
      hashedUserData.fn = await hashData(firstName);
    }
    
    if (lastName) {
      hashedUserData.ln = await hashData(lastName);
    }
    
    if (userData.city) {
      hashedUserData.ct = await hashData(userData.city);
    }
    
    if (userData.country) {
      hashedUserData.country = await hashData(userData.country);
    }

    // Get Facebook cookies if available
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');
    
    if (fbp) hashedUserData.fbp = fbp;
    if (fbc) hashedUserData.fbc = fbc;

    // Get client info
    hashedUserData.client_user_agent = navigator.userAgent;
    
    // Try to get IP from a service (optional, backend is better)
    // For now, we'll let Meta infer it

    const event: ConversionEvent = {
      eventName,
      eventTime: Math.floor(Date.now() / 1000),
      eventId: generateEventId(),
      eventSourceUrl: window.location.href,
      userData: hashedUserData,
      customData: customData || {}
    };

    // Send to Meta Conversion API
    const response = await fetch(
      `https://graph.facebook.com/${META_API_VERSION}/${META_PIXEL_ID}/events`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [event],
          access_token: META_ACCESS_TOKEN,
        }),
      }
    );

    const result = await response.json();
    
    if (result.error) {
      console.error('Meta Conversion API Error:', result.error);
    } else {
      console.log('✅ Meta Conversion Event Sent:', eventName, result);
    }
  } catch (error) {
    console.error('Failed to send Meta conversion event:', error);
    // Don't throw error to avoid breaking user flow
  }
}

// Helper to get cookie value
function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  return null;
}

// Track page view
export function trackPageView(): void {
  sendMetaConversionEvent('PageView', {});
}

// Track registration/lead
export function trackLead(userData: UserData, customData?: Record<string, any>): void {
  sendMetaConversionEvent('Lead', userData, customData);
}

// Track registration complete
export function trackCompleteRegistration(userData: UserData, customData?: Record<string, any>): void {
  sendMetaConversionEvent('CompleteRegistration', userData, customData);
}
