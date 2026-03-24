declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

export function initAnalytics() {
  if (!GA_ID) return;
  if (document.getElementById("ga-script")) return;

  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script1.id = "ga-script";
  document.head.appendChild(script1);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
  window.gtag?.('event', 'generate_lead', {
  event_category: 'contact',
});
}

export function trackPageView(path: string) {
  if (!GA_ID || typeof window.gtag !== "function") return;

  window.gtag("config", GA_ID, {
    page_path: path,
  });
}