interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '🎯',
    title: '多元方案任你選',
    description: '不論是奢華住宿、專車導覽、桑拿，還是行程客製化安排，我們提供多種彈性組合，滿足各類旅客的不同需求，輕鬆打造專屬旅遊體驗。',
  },
  {
    icon: '💳',
    title: '多元便捷付款',
    description: '支援現金、銀行轉帳、等多種付款方式，流程簡單、交易安全，輕鬆完成預約無負擔。',
  },
  {
    icon: '🔒',
    title: '絕對保密制度',
    description: '尊重隱私是我們的首要原則，採用匿名預約制與專車低調接送，客戶資料全程加密處理，讓您安心享受每一刻。',
  },
  {
    icon: '🕐',
    title: '24小時專人客服',
    description: '我們的專業客服團隊全年無休、隨時在線，從抵達到離開，全程為您提供即時協助與貼心支援，讓您在當地無後顧之憂。',
  },
];

const whyChooseUs = [
  {
    title: '一站式安排',
    description: '從五星級酒店到包車、餐飲、娛樂、桑拿等行程，全由我們一手包辦，省時省心。',
  },
  {
    title: '100% 私密與保密',
    description: '我們深知您的隱私至上，全程匿名預約、低調接送，保障您的個人資訊與行程安全。',
  },
  {
    title: '本地深耕，內行帶路',
    description: '我們是在地團隊，熟悉每一處精彩角落，能為您安排最道地又安全的玩法。',
  },
  {
    title: '專屬客服，24小時在線',
    description: '有任何需求，我們隨時在線處理，不讓您在異地感到任何不便或孤單。',
  },
  {
    title: '高端客群回訪率高',
    description: '我們的客戶多為高端商務人士、品味旅人，超高滿意度與回訪率，證明了我們的品質與信譽。',
  },
];

export default function About() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-[117.5px] py-[78.7px]">
      <h2 className="text-center text-[15.5px] leading-[31px] tracking-[7.68px] text-white mb-[78.7px]">
        關於龍匯天下｜探索澳門，享受極致服務
      </h2>

      <div className="space-y-6 mb-[297.8px]">
        <p className="text-[9.9px] leading-[29px] tracking-[0.459px] text-white max-w-[836px]">
          歡迎來到【龍匯天下】──您的旅遊專家。我們結合當地文化與高端定制服務，為旅客打造獨一無二的極致體驗。我們結合當地文化與高端定制服務，為旅客打造獨一無二的極致體驗。
        </p>
        <p className="text-[9.9px] leading-[29px] tracking-[0.459px] text-white max-w-[632px]">
          不論是豪華酒店訂房、專業包車導覽，還是令人心跳加速的「桑拿」體驗，我們都以高標準為您安排，確保每一位貴賓安心、放鬆、盡興。
        </p>
        <p className="text-[9.9px] leading-[29px] tracking-[0.459px] text-white max-w-[497px]">
          我們的服務宗旨是：尊榮、保密、專業。從您抵達當地的那一刻起，我們就是您最值得信賴的貼身旅遊顧問。
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 gap-6 mb-[270px]">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-3">
            <div className="w-[50px] h-[50px] flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">{feature.icon}</span>
            </div>
            <div>
              <h3 className="text-[12.7px] leading-[24px] tracking-[0.574px] text-[#F5CA69] mb-2">
                {feature.title}
              </h3>
              <p className="text-[9.9px] leading-[24px] tracking-[0.459px] text-white">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div>
        <h2 className="text-center text-[14.9px] leading-[31px] tracking-[7.68px] text-[#F5CA69] mb-[200px]">
          為什麼選擇我們？
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-[140px] flex-shrink-0">
                  <h3 className="text-[12.7px] leading-[24px] tracking-[0.574px] text-[#F5CA69]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[9.9px] leading-[24px] tracking-[0.459px] text-white flex-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

