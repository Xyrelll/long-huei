import Link from 'next/link';

const faqData = [
  {
    number: '01',
    title: '澳門旅遊安全嗎？',
    content: (
      <>
        <p><strong>澳門是亞洲最安全的旅遊城市之一</strong></p>
        <ul>
          <li><p>連續7年名列<strong>亞洲前三安全城市</strong></p></li>
          <li><p>犯罪率低：每10萬旅客僅1.5件案件</p></li>
          <li><p>夜間安全感：高達94%</p></li>
        </ul>
        <hr />
        <h3><strong>常見Q&A</strong></h3>
        <p><strong>Q1：治安比台灣好嗎？</strong><br />
        A 竊盜率低、詐騙破獲率高，反應快</p>
        <p><strong>Q2：女生可以一人旅遊嗎？</strong><br />
        A 飯店有女性專層，夜間搭正規車就安心</p>
        <p><strong>Q3：遇到緊急情況怎麼辦？</strong><br />
        A 打緊急熱線、找警局或聯繫飯店保全即可</p>
      </>
    ),
    link: '/Article/safe1',
  },
  {
    number: '02',
    title: '澳門桑拿常見問題懶人包｜新手必看攻略！',
    content: (
      <>
        <p id="??+顏值+vs+價格：怎麼選最划算？"><strong>Q1 </strong>&nbsp;<strong>顏值 vs 價格：怎麼選最划算？</strong></p>
        <p>A :如果你是顏控，中國籍技師通常不會讓你失望，多數都有模特兒級別的外型，甚至有人在網路上小有名氣。而追求性價比的朋友，建議多看看越南或泰國技師，價格相對親民，服務也非常不錯。</p>
        <p><strong>Q2：價格貴嗎?</strong><br />
        A : 整體價位已回升至疫情前的水準、但預約有驚喜，也就是說，現在桑拿還是有點小貴。不過好消息是：提前預約通常會有不少福利，像是折扣、升等房型或其他加值服務，真的蠻划算的！</p>
        <p><strong>Q3：</strong><strong>時間與費用安排建議<strong>？</strong></strong><br />
        Ａ: 各大澳門桑拿目前淨桑費（不選技師的情況下）大約為 1599 港幣以上，可在館內停留最多約 12 小時，部分店家凌晨一點後會加送免費休息空間。</p>
        <p><strong>Q4：有哪些熱門浴場值得預約？</strong><br />
        Ａ 熱門四大場：</p>
        <ul>
          <li><p><strong>豪門／壹號</strong>：顏值高妹多</p></li>
          <li><p><strong>富豪皇宮</strong>：劇本殺＋情景房</p></li>
          <li><p><strong>十八</strong>：老牌經典，氣氛不錯</p></li>
        </ul>
      </>
    ),
    link: '/Article/sauna1',
  },
  {
    number: '03',
    title: '澳門旅遊QA',
    content: (
      <>
        <p><strong>Q1：澳門必去哪？</strong><br />
        Ａ: 大三巴、媽閣廟、旅遊塔、teamLab、議事亭前地。</p>
        <p><strong>Q2：有刺激或浪漫活動嗎？</strong><br />
        A: 空中漫步、雙人跳傘、永利纜車晚餐看水舞！</p>
        <p><strong>Q3：必吃美食？</strong><br />
        A: 安德魯葡撻、義順燉奶、永利米其林晚餐。</p>
        <p><strong>Q4：什麼時候去最好？</strong><br />
        A: 春秋最舒適，夏季注意防曬雨具。</p>
        <p><strong>Q5：交通怎麼省？</strong><br />
        A： 澳門通搭公車＋免費酒店接駁最方便！</p>
      </>
    ),
    link: 'https://long-huei.vercel.app/Article/travel1',
  },
];

export default function FAQ() {
  return (
    <section className="question-answer w-full bg-black py-12 mb-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-white text-2xl mb-8">常見問題</h2>
        <div className="flex flex-col items-center gap-6">
          {faqData.map((faq, index) => (
            <div key={index} className="w-full max-w-6xl">
              <div className="question-answer-card bg-[#2C261C] rounded-2xl p-8">
                <h3 className="text-white text-lg mb-4">
                  <i className="fas fa-question-circle text-[#CD861A] mr-2" aria-hidden="true"></i>
                  {faq.number} - {faq.title}
                </h3>
                <div className="text-white text-xl font-bold leading-relaxed">
                  {faq.content}
                </div>
                <Link 
                  href={faq.link} 
                  className="inline-block mt-4 px-8 py-1.5 bg-[#CD861A] text-white hover:bg-[#A46912] transition-colors text-sm font-medium"
                  style={{ 
                    borderRadius: '9999px',
                    padding: '6px 24px',
                    textDecoration: 'none'
                  }}
                >
                  閱讀更多
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
