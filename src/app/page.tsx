import Navbar from '@/components/layout/Navbar/Navbar';
import Hero from '@/components/features/Hero/Hero';
import SelectedArticles from '@/components/features/SelectedArticles/SelectedArticles';
import About from '@/components/features/About/About';
import LatestArticles from '@/components/features/LatestArticles/LatestArticles';
import FAQ from '@/components/features/FAQ/FAQ';
import Footer from '@/components/layout/Footer/Footer';
import GoToTop from '@/components/layout/GoToTop/GoToTop';
import { Metadata } from 'next';
import { generateMetadata } from '@/config/metadata';

export const metadata: Metadata = generateMetadata({
  title: '龍匯天下 - 澳門旅遊專家',
  description: '探索澳門，享受極致服務。提供豪華酒店訂房、專業包車導覽、桑拿體驗等高端定制服務。',
  path: '/',
});

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "龍匯天下",
    url: "https://www.long-huei.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.long-huei.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "龍匯天下",
    url: "https://www.long-huei.com",
    logo: "https://www.long-huei.com/logo.png",
    description: "探索澳門，享受極致服務。提供豪華酒店訂房、專業包車導覽、桑拿體驗等高端定制服務。",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <div className="relative w-full min-h-screen bg-black">
        <Navbar />
        <main className="w-full">
          <Hero />
          <SelectedArticles />
          <About />
          <LatestArticles />
          <FAQ />
        </main>
        <Footer />
        <GoToTop />
      </div>
    </>
  );
}
