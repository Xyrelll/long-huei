import Navbar from "@/components/layout/Navbar/Navbar";
import Marquee from "@/components/features/Marquee/Marquee";
import Hero from "@/components/features/Hero/Hero";
import SelectedArticles from "@/components/features/SelectedArticles/SelectedArticles";
import About from "@/components/features/About/About";
import LatestArticles from "@/components/features/LatestArticles/LatestArticles";
import FAQ from "@/components/features/FAQ/FAQ";
import Footer from "@/components/layout/Footer/Footer";
import GoToTop from "@/components/layout/GoToTop/GoToTop";
import BottomNav from "@/components/layout/BottomNav/BottomNav";
import { Metadata } from "next";
import { generateMetadata } from "@/config/metadata";
import { generateBreadcrumbSchema } from "@/config/seo";

export const metadata: Metadata = generateMetadata({
  title: "澳門龍匯天下-澳門旅遊、桑拿、訂房、包車",
  description: "澳門龍匯天下、澳門旅遊、桑拿、訂房包車、最好的澳門旅遊幫手",
  path: "/",
});

export default function Home() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "首頁", url: "https://long-huei.vercel.app/" },
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "龍匯天下",
    alternateName: "Long Huei",
    url: "https://long-huei.vercel.app/",
    description: "澳門龍匯天下、澳門旅遊、桑拿、訂房包車、最好的澳門旅遊幫手",
    inLanguage: "zh-TW",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://long-huei.vercel.app/Search?Keyword={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "龍匯天下",
    alternateName: "Long Huei",
    url: "https://long-huei.vercel.app/",
    logo: "https://long-huei.vercel.app/Images/logo-m.png",
    description: "澳門龍匯天下、澳門旅遊、桑拿、訂房包車、最好的澳門旅遊幫手",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["Chinese", "English"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <h1 className="d-none">龍匯天下</h1>
      <div className="relative w-full min-h-screen bg-black ">
        <Navbar />
        <main>
          <Marquee />
          <Hero />
          <SelectedArticles />
          <About />
          <LatestArticles />
          <FAQ />
        </main>
        <Footer />
        <GoToTop />
        <BottomNav />
      </div>
    </>
  );
}
