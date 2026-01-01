import React, { useEffect } from "react";

export function Favicon() {
  useEffect(() => {
    const link: HTMLLinkElement = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = '/logo.png';
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  return null;
}
