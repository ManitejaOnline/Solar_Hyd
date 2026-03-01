"use client";

import Script from "next/script";

export default function Analytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RS5KQQM1XN"
        strategy="afterInteractive"
      />

      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag(){dataLayer.push(arguments);}

          // 🔥 Make gtag globally accessible
          window.gtag = gtag;

          gtag('js', new Date());
          gtag('config', 'G-RS5KQQM1XN');
        `}
      </Script>
    </>
  );
}