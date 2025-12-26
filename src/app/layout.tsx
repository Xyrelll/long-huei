import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/navbar.css";
import "@/styles/bottomnav.css";
import { generateMetadata as genMeta } from "@/config/metadata";
import '@fortawesome/fontawesome-free/css/all.min.css';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = genMeta({
  title: "龍匯天下 - 澳門旅遊專家",
  description: "探索澳門，享受極致服務。提供豪華酒店訂房、專業包車導覽、桑拿體驗等高端定制服務。",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="m-0">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
        
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "龍匯天下",
              description: "探索澳門，享受極致服務。提供豪華酒店訂房、專業包車導覽、桑拿體驗等高端定制服務。",
              url: "https://long-huei.vercel.app/",
              logo: "https://long-huei.vercel.app//logo-m.png",
              address: {
                "@type": "PostalAddress",
                addressCountry: "MO",
                addressLocality: "Macau",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["Chinese", "English"],
              },
              sameAs: [
                // Add your social media links here
                // "https://www.facebook.com/longhuei",
                // "https://www.instagram.com/longhuei",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased m-0`}>
        {children}
      </body>
    </html>
  );
}
