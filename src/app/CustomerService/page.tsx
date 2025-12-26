'use client';

import { generateBreadcrumbSchema } from '@/config/seo';
import PageLayout from '@/components/layout/PageLayout/PageLayout';
import PageMetadata from '@/components/SEO/PageMetadata';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function CustomerServicePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: '首頁', url: 'https://long-huei.vercel.app/' },
    { name: '專人客服', url: 'https://long-huei.vercel.app/CustomerService' },
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "專人客服 - 龍匯天下",
    description: "龍匯天下專人客服-澳門旅遊-訂房-包車-桑拿-專人客服",
    url: "https://long-huei.vercel.app/CustomerService",
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
      <PageMetadata
        title="專人客服 - 龍匯天下"
        description="龍匯天下專人客服-澳門旅遊-訂房-包車-桑拿-專人客服。加入LINE或WeChat好友享優惠，提供24小時專業客服服務。"
        url="https://long-huei.vercel.app/CustomerService"
        image="https://long-huei.vercel.app/Images/logo-m.png"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageLayout containerWidth="80%" outerContainerClassName="flex justify-center items-center">
        <section className="article-wrap ">
          <div className="container mx-auto ">
            {/* Breadcrumbs */}
            <nav className="nav-breadcrumb py-4"
             style={{ paddingTop: isMobile ? '100px' : '100px', paddingLeft: isMobile ? '0px' : '100px' }}
              aria-label="breadcrumb">
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
                
                <div className="row page flex flex-col md:flex-row gap-30" style={{ color: '#fff' }}>
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
                                fontSize: '1.8rem',
                                paddingBottom: '15px',
                                textAlign: 'left',
                                padding: '0',
                                margin: '0'
                              }}>
                                加入LINE好友
                              </h2>
                            </div>
                            <div 
                            style={{ marginTop: '-15px' }}
                            className="col-auto flex items-center">
                              <a 
                                href="https://lin.ee/rQgNQ6D"
                                rel="noopener noreferrer"
                              >
                                <Image
                                  src="/CustomerService/zh-Hant.png"
                                  alt="加入好友"
                                  width={100}
                                  height={32}
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
      </PageLayout>
    </>
  );
}
