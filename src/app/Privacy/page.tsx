'use client';

import { generateBreadcrumbSchema } from '@/config/seo';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import GoToTop from '@/components/layout/GoToTop/GoToTop';
import BottomNav from '@/components/layout/BottomNav/BottomNav';
import PageMetadata from '@/components/SEO/PageMetadata';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PrivacyPage() {
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
    { name: '隱私權條款', url: 'https://long-huei.vercel.app/Privacy' },
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "隱私權條款 - 龍匯天下",
    description: "龍匯天下隱私權保護政策，說明本網站如何處理個人資料的蒐集、處理及利用方式。",
    url: "https://long-huei.vercel.app/Privacy",
    inLanguage: "zh-TW",
  };

  return (
    <>
      <PageMetadata
        title="隱私權條款 - 龍匯天下"
        description="龍匯天下隱私權保護政策，說明本網站如何處理個人資料的蒐集、處理及利用方式，保障您的權益。"
        url="https://long-huei.vercel.app/Privacy"
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
      <div className="relative w-full flex justify-center items-center">
        <div className="relative w-full md:w-[80%] min-h-screen bg-black flex justify-center items-center">
          <Navbar />
          
          <main className="inner-page w-[90%] mx-auto">
            <section className="article-wrap">
              <div className="container mx-auto">
                {/* Breadcrumbs */}
                <nav 
                  className="nav-breadcrumb py-4"
                  style={{ 
                    paddingTop: isMobile ? '100px' : '100px', 
                    paddingLeft: isMobile ? '0px' : '100px' 
                  }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb flex items-center gap-2 text-white text-sm">
                    <li className="breadcrumb-item">
                      <Link href="/" className="flex items-center gap-1 hover:text-[#FFCD83]">
                        <i className="bi bi-house-door-fill"></i>
                        首頁
                      </Link>
                    </li>
                    <li className="breadcrumb-separator text-white/70">&gt;</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <span className="text-white/70">隱私權條款</span>
                    </li>
                  </ol>
                </nav>

                {/* Privacy Policy Content */}
                <div className="card-body page" style={{ color: 'white', fontSize: '13pt' ,marginTop:'30px'}}>
                  <p>非常歡迎您光臨「龍匯天下」（以下簡稱本網站），為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：</p>
                  
                  <h3 className="page-title">一、隱私權保護政策的適用範圍</h3>
                  <p>隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。</p>
                  
                  <h3 className="page-title">二、個人資料的蒐集、處理及利用方式</h3>
                  <p>當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。</p>
                  <p>本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。</p>
                  <p>於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。</p>
                  <p>為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。</p>
                  <p>您可以隨時向我們提出請求，以更正或刪除本網站所蒐集您錯誤或不完整的個人資料。</p>
                  
                  <h3 className="page-title">三、資料之保護</h3>
                  <p>本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。</p>
                  <p>如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。</p>
                  
                  <h3 className="page-title">四、網站對外的相關連結</h3>
                  <p>本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。</p>
                  
                  <h3 className="page-title">五、與第三人共用個人資料之政策</h3>
                  <p>本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。</p>
                  <p>前項但書之情形包括不限於：</p>
                  <p>經由您書面同意。</p>
                  <p>法律明文規定。</p>
                  <p>為免除您生命、身體、自由或財產上之危險。</p>
                  <p>與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集者依其揭露方式無從識別特定之當事人。</p>
                  <p>當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。</p>
                  <p>有利於您的權益。</p>
                  <p>本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。</p>
                  
                  <h3 className="page-title">六、Cookie之使用</h3>
                  <p>為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的Cookie，若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導致網站某些功能無法正常執行。</p>
                  
                  <h3 className="page-title">七、隱私權保護政策之修正</h3>
                  <p>本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。</p>
                  
                  <hr style={{ borderColor: '#444', marginTop: '30px', marginBottom: '30px' }} />
                </div>
              </div>
            </section>
            
            <Footer />
          </main>

          <GoToTop />
          <BottomNav />
        </div>
      </div>
    </>
  );
}

