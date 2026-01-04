import { useEffect } from 'react';

const PIXEL_ID = '25686217961009730';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export function MetaPixel() {
  useEffect(() => {
    // Initialize Meta Pixel
    if (!window.fbq) {
      const script = document.createElement('script');
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${PIXEL_ID}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);

      // Add noscript fallback
      const noscript = document.createElement('noscript');
      noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1" />`;
      document.body.appendChild(noscript);
    }
  }, []);

  return null;
}

// Helper functions to track events
export const trackEvent = (eventName: string, data?: Record<string, any>) => {
  if (window.fbq) {
    window.fbq('track', eventName, data);
  }
};

export const trackCustomEvent = (eventName: string, data?: Record<string, any>) => {
  if (window.fbq) {
    window.fbq('trackCustom', eventName, data);
  }
};

export const trackLead = (data?: Record<string, any>) => {
  if (window.fbq) {
    window.fbq('track', 'Lead', data);
  }
};

export const trackCompleteRegistration = (data?: Record<string, any>) => {
  if (window.fbq) {
    window.fbq('track', 'CompleteRegistration', data);
  }
};

export const trackViewContent = (data?: Record<string, any>) => {
  if (window.fbq) {
    window.fbq('track', 'ViewContent', data);
  }
};
