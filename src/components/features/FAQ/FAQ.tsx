import Link from 'next/link';
import QuestionAnswerCard from '../QuestionAnswerCard/QuestionAnswerCard';

const faqData = [
  {
    number: '01',
    title: '澳門旅遊安全嗎？',
    qas: [
      {
        question: '澳門是亞洲最安全的旅遊城市之一',
        answer: '',
      },
    ],
    listItems: [
      '連續7年名列亞洲前三安全城市',
      '犯罪率低：每10萬旅客僅1.5件案件',
      '夜間安全感：高達94%',
    ],
    additionalQAs: [
      {
        question: 'Q1：治安比台灣好嗎？',
        answer: 'A 竊盜率低、詐騙破獲率高，反應快',
      },
      {
        question: 'Q2：女生可以一人旅遊嗎？',
        answer: 'A 飯店有女性專層，夜間搭正規車就安心',
      },
      {
        question: 'Q3：遇到緊急情況怎麼辦？',
        answer: 'A 打緊急熱線、找警局或聯繫飯店保全即可',
      },
    ],
    link: '/faq/safety',
  },
  {
    number: '02',
    title: '澳門桑拿常見問題懶人包｜新手必看攻略！',
    qas: [
      {
        question: 'Q1 顏值 vs 價格：怎麼選最划算？',
        answer: 'A :如果你是顏控，中國籍技師通常不會讓你失望，多數都有模特兒級別的外型，甚至有人在網路上小有名氣。而追求性價比的朋友，建議多看看越南或泰國技師，價格相對親民，服務也非常不錯。',
      },
      {
        question: 'Q2：價格貴嗎?',
        answer: 'A : 整體價位已回升至疫情前的水準、但預約有驚喜，也就是說，現在桑拿還是有點小貴。不過好消息是：提前預約通常會有不少福利，像是折扣、升等房型或其他加值服務，真的蠻划算的！',
      },
      {
        question: 'Q3：時間與費用安排建議？',
        answer: 'Ａ: 各大澳門桑拿目前淨桑費（不選技師的情況下）大約為 1599 港幣以上，可在館內停留最多約 12 小時，部分店家凌晨一點後會加送免費休息空間。',
      },
      {
        question: 'Q4：有哪些熱門浴場值得預約？',
        answer: 'Ａ 熱門四大場：',
      },
    ],
    listItems: [
      '豪門／壹號：顏值高妹多',
      '富豪皇宮：劇本殺＋情景房',
      '十八：老牌經典，氣氛不錯',
    ],
    link: '/faq/sauna',
  },
  {
    number: '03',
    title: '澳門旅遊QA',
    qas: [
      {
        question: 'Q1：澳門必去哪？',
        answer: 'Ａ: 大三巴、媽閣廟、旅遊塔、teamLab、議事亭前地。',
      },
      {
        question: 'Q2：有刺激或浪漫活動嗎？',
        answer: 'A: 空中漫步、雙人跳傘、永利纜車晚餐看水舞！',
      },
      {
        question: 'Q3：必吃美食？',
        answer: 'A: 安德魯葡撻、義順燉奶、永利米其林晚餐。',
      },
      {
        question: 'Q4：什麼時候去最好？',
        answer: 'A: 春秋最舒適，夏季注意防曬雨具。',
      },
      {
        question: 'Q5：交通怎麼省？',
        answer: 'A： 澳門通搭公車＋免費酒店接駁最方便！',
      },
    ],
    link: '/faq/travel',
  },
];

export default function FAQ() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-[117.5px] py-[78.7px]">
      <h2 className="text-center text-[15.5px] leading-[31px] tracking-[7.68px] text-white mb-[78.7px]">
        常見問題
      </h2>

      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div key={index} className="relative">
            <div className="bg-[#2C261C] rounded-[40px] p-[30px] flex flex-col gap-4">
              {/* Header */}
              <div className="flex items-center gap-2">
                <svg width="21.41" height="21" viewBox="0 0 22 21" fill="none">
                  <path
                    d="M10.5 0L0 10.5V21H21V10.5L10.5 0Z"
                    fill="#CD861A"
                  />
                </svg>
                <h3 className="text-[13.8px] leading-[25px] tracking-[0.597px] font-bold text-[#F5CA69]">
                  {faq.number} - {faq.title}
                </h3>
              </div>

              {/* Main Content */}
              {faq.qas && faq.qas.length > 0 && (
                <div className="flex flex-col gap-4">
                  {faq.qas.map((qa, qaIndex) => (
                    <div key={qaIndex} className="flex flex-col gap-0">
                      {qa.question && (
                        <p className="text-[10.9px] leading-[24px] tracking-[0.459px] font-bold text-white mb-1">
                          {qa.question}
                        </p>
                      )}
                      {qa.answer && (
                        <p className="text-[9.9px] leading-[24px] tracking-[0.459px] text-white">
                          {qa.answer}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* List Items */}
              {faq.listItems && (
                <div className="flex flex-col gap-4">
                  {faq.listItems.map((item, itemIndex) => (
                    <p
                      key={itemIndex}
                      className="text-[9.9px] leading-[24px] tracking-[0.459px] text-white"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              )}

              {/* Divider */}
              {faq.additionalQAs && faq.additionalQAs.length > 0 && (
                <div className="w-full h-[1px] bg-white opacity-25 my-4" />
              )}

              {/* Additional Q&As */}
              {faq.additionalQAs && (
                <div className="space-y-4">
                  <h4 className="text-[14.1px] leading-[25px] tracking-[0.597px] font-black text-[#F5CA69]">
                    常見Q&A
                  </h4>
                  {faq.additionalQAs.map((qa, qaIndex) => (
                    <div key={qaIndex} className="flex flex-col gap-0">
                      <p className="text-[10.9px] leading-[24px] tracking-[0.459px] font-bold text-white mb-1">
                        {qa.question}
                      </p>
                      <p className="text-[9.9px] leading-[24px] tracking-[0.459px] text-white">
                        {qa.answer}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Read More Button */}
              <Link
                href={faq.link}
                className="mt-4 w-[66.25px] h-[38px] bg-[#A46912] border border-[#694105] rounded-[30px] flex items-center justify-center text-[9.9px] leading-[24px] tracking-[0.459px] text-white hover:bg-[#8B5A0F] transition-colors self-start"
              >
                閱讀更多
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

