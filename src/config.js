// API and WebSocket base URLs
// Default fallback to live production backend when hosted separately on Vercel without env vars
const PROD_BACKEND_URL = 'https://printcatalyst-new.onrender.com';

const getBaseUrl = () => {
  // If explicitly configured via Vite env var
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL.replace(/\/$/, '');
  }

  // If hosted on external frontend static platforms (Vercel, Firebase, Netlify)
  if (typeof window !== 'undefined' && (
    window.location.hostname.includes('vercel.app') ||
    window.location.hostname.includes('web.app') ||
    window.location.hostname.includes('firebaseapp.com')
  )) {
    return PROD_BACKEND_URL;
  }

  // Self-hosted production (Hostinger, custom VPS, or unified domain) and local dev:
  // Use relative same-origin URL so requests go directly to Hostinger backend
  return '';
};

export const API_BASE = getBaseUrl();

export const getWsUrl = () => {
  if (import.meta.env.VITE_WS_URL) {
    return import.meta.env.VITE_WS_URL;
  }
  if (API_BASE && API_BASE.startsWith('http')) {
    return API_BASE.replace(/^http/, 'ws');
  }
  if (typeof window !== 'undefined' && (
    window.location.hostname.includes('vercel.app') ||
    window.location.hostname.includes('web.app') ||
    window.location.hostname.includes('firebaseapp.com')
  )) {
    return PROD_BACKEND_URL.replace(/^http/, 'ws');
  }
  const protocol = typeof window !== 'undefined' && window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  return typeof window !== 'undefined' ? `${protocol}//${window.location.host}` : 'ws://localhost:5000';
};


