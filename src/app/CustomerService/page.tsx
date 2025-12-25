'use client';

import { useEffect } from 'react';
import { generateBreadcrumbSchema } from '@/config/seo';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import GoToTop from '@/components/layout/GoToTop/GoToTop';
import BottomNav from '@/components/layout/BottomNav/BottomNav';
import Link from 'next/link';
import Image from 'next/image';

export default function CustomerServicePage() {
  // Set page title/meta tags
  useEffect(() => {
    // Set page title
    document.title = '專人客服 - 龍匯天下';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', '龍匯天下專人客服-澳門旅遊-訂房-包車-桑拿-專人客服');
    
    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', '專人客服 - 龍匯天下');
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', '龍匯天下專人客服-澳門旅遊-訂房-包車-桑拿-專人客服');
    
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', 'https://www.long-huei.com/CustomerService');
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: '首頁', url: 'https://www.long-huei.com' },
    { name: '專人客服', url: 'https://www.long-huei.com/CustomerService' },
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "專人客服 - 龍匯天下",
    description: "龍匯天下專人客服-澳門旅遊-訂房-包車-桑拿-專人客服",
    url: "https://www.long-huei.com/CustomerService",
    inLanguage: "zh-TW",
    mainEntity: {
      "@type": "Organization",
      name: "龍匯天下",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["Chinese"],
      },
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
      <div className="relative w-full min-h-screen bg-black flex justify-center items-center">
        <Navbar />
        
        <main className="inner-page w-[90%] mx-auto">
          <section className="article-wrap">
            <div className="container mx-auto">
              {/* Breadcrumbs */}
              <nav className="nav-breadcrumb py-4" style={{ paddingTop: '100px' }} aria-label="breadcrumb">
                <ol className="breadcrumb flex items-center gap-2 text-white text-sm">
                  <li className="breadcrumb-item">
                    <Link href="/" className="flex items-center gap-1 hover:text-[#FFCD83]">
                      <i className="bi bi-house-door-fill"></i>
                      首頁
                    </Link>
                  </li>
                  <li className="breadcrumb-separator text-white/70">&gt;</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <span className="text-white/70">專人客服</span>
                  </li>
                </ol>
              </nav>

              {/* Articles Section */}
              <section className="articles">
                <div className="container mx-auto px-4">
                  <h1 className="text-white text-3xl mb-8" style={{ 
                    textAlign: 'left',
                    fontSize: '2rem',
                    letterSpacing: '0.1em',
                    padding: '20px 0'
                  }}>
                    專人客服
                  </h1>
                  
                  <div className="row page flex flex-col md:flex-row gap-6" style={{ color: '#fff' }}>
                    {/* LINE Section */}
                    <div className="col-md-6 mb-5 md:mb-0">
                      <div className="row">
                        <div className="col-12">
                          <div className="page-section" style={{ marginBottom: '40px' }}>
                            <div className="row flex flex-wrap items-center gap-4 mb-4">
                              <div className="col-auto">
                                <h2 className="page-title h2" style={{
                                  fontWeight: '900',
                                  color: '#f5ca69',
                                  fontSize: '2rem',
                                  paddingBottom: '15px',
                                  textAlign: 'left',
                                  padding: '0',
                                  margin: '0'
                                }}>
                                  加入LINE好友
                                </h2>
                              </div>
                              <div className="col-auto flex items-center">
                                <a 
                                  href="https://lin.ee/rQgNQ6D"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Image
                                    src="/CustomerService/zh-Hant.png"
                                    alt="加入好友"
                                    width={144}
                                    height={36}
                                    style={{ border: 0 }}
                                  />
                                </a>
                              </div>
                            </div>
                            <p style={{ fontSize: '18px', color: '#fff' }}>
                              加入LINE好友享優惠!!
                            </p>
                          </div>
                        </div>
                        <div className="col-12 hidden lg:block">
                          <Image
                            src="/CustomerService/M_vgl8843j_GW.png"
                            alt="LINE QR Code"
                            width={300}
                            height={300}
                            className="w-full max-w-[300px]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* WeChat Section */}
                    <div className="col-md-6">
                      <div className="col-12">
                        <div className="page-section" style={{ marginBottom: '40px' }}>
                          <div className="row flex items-center gap-4 mb-4">
                            <div className="col-auto">
                              <h2 className="page-title h2" style={{
                                fontWeight: '900',
                                color: '#f5ca69',
                                fontSize: '2rem',
                                paddingBottom: '15px',
                                textAlign: 'left',
                                padding: '0',
                                margin: '0'
                              }}>
                                加入Wechat好友
                              </h2>
                            </div>
                          </div>
                          <p style={{ fontSize: '18px', color: '#fff' }}>
                            加入Wechat好友享優惠!!
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <Image
                          src="/CustomerService/WechatQrCode.jpg"
                          alt="WeChat QR Code"
                          width={300}
                          height={300}
                          className="w-full max-w-[300px]"
                          style={{ maxWidth: '300px' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
          
          <Footer />
        </main>

        <GoToTop />
        <BottomNav />
      </div>
    </>
  );
}

