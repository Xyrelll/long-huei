interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "fas fa-gamepad",
    title: "多元方案任你選",
    description:
      "不論是奢華住宿、專車導覽、桑拿，還是行程客製化安排，我們提供多種彈性組合，滿足各類旅客的不同需求，輕鬆打造專屬旅遊體驗。",
  },
  {
    icon: "fas fa-phone-square",
    title: "24小時專人客服",
    description:
      "我們的專業客服團隊全年無休、隨時在線，從抵達到離開，全程為您提供即時協助與貼心支援，讓您在當地無後顧之憂。",
  },
  {
    icon: "fas fa-user-shield",
    title: "絕對保密制度",
    description:
      "尊重隱私是我們的首要原則，採用匿名預約制與專車低調接送，客戶資料全程加密處理，讓您安心享受每一刻。",
  },
  {
    icon: "fas fa-dollar-sign",
    title: "多元便捷付款",
    description:
      "支援現金、銀行轉帳、等多種付款方式，流程簡單、交易安全，輕鬆完成預約無負擔。",
  },
];

const whyChooseUs = [
  {
    title: "一站式安排",
    description:
      "從五星級酒店到包車、餐飲、娛樂、桑拿等行程，全由我們一手包辦，省時省心。",
  },
  {
    title: "100% 私密與保密",
    description:
      "我們深知您的隱私至上，全程匿名預約、低調接送，保障您的個人資訊與行程安全。",
  },
  {
    title: "本地深耕，內行帶路",
    description:
      "我們是在地團隊，熟悉每一處精彩角落，能為您安排最道地又安全的玩法。",
  },
  {
    title: "專屬客服，24小時在線",
    description:
      "有任何需求，我們隨時在線處理，不讓您在異地感到任何不便或孤單。",
  },
  {
    title: "高端客群回訪率高",
    description:
      "我們的客戶多為高端商務人士、品味旅人，超高滿意度與回訪率，證明了我們的品質與信譽。",
  },
];

export default function About() {
  return (
    <section className="about-top js-about-top w-full bg-black">
      <h2 className="text-center text-white text-4xl mb-8">
        關於龍匯天下｜探索澳門，享受極致服務
      </h2>

      <div className="container mx-auto max-w-4xl">
        <div className="row mb-4">
          <div className="col-12">
            <p className="content text-white mb-4">
              歡迎來到【龍匯天下】──您的旅遊專家。我們結合當地文化與高端定制服務，為旅客打造獨一無二的極致體驗。我們結合當地文化與高端定制服務，為旅客打造獨一無二的極致體驗。
            </p>
            <p className="content text-white mb-4">
              不論是豪華酒店訂房、專業包車導覽，還是令人心跳加速的「桑拿」體驗，我們都以高標準為您安排，確保每一位貴賓安心、放鬆、盡興。
            </p>
            <p className="content text-white mb-4">
              我們的服務宗旨是：尊榮、保密、專業。從您抵達當地的那一刻起，我們就是您最值得信賴的貼身旅遊顧問。
            </p>
          </div>
        </div>
      </div>

      <h2
       style={{paddingTop: "40px" }}
       className="page-title text-center text-[#f5ca69] text-3xl mb-8">
        為什麼選擇我們？
      </h2>

      <div
       style={{marginTop: "-40px" }}
       className="container mx-auto max-w-5xl">
        <div className="row mb-4">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row mb-3">
              <div className="col-md-4 col-12 mb-2 mb-md-0 md:w-2/5">
                <h3 className="about-title text-[#FFCD83] text-xl text-center md:text-center">
                  {item.title}
                </h3>
              </div>
              <div className="col-md-8 col-12 mb-3 md:w-3/5">
                <p className="text-white text-md leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="features-section-wrapper">
        <div className="container mx-auto">
          <div className="row mt-1 mt-md-3 max-w-6xl mx-auto">
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
              style={{ display: "grid" }}
            >
              {features.map((feature, index) => (
                <div key={index} className="mb-4  flex flex-col items-start justify-center">
                  <div 
                  style={{ display: "flex", flexDirection: "row",
                    padding: "0 12px", height: "100%", width: "100%",
                     alignItems: "start", justifyContent: "start", gap: "0px" }}
                  className="about-card flex w-full flex-row items-start justify-start gap-4 ">
                    <i
                    style={{ width: "65px", height: "auto" , paddingLeft: "0px" }}
                      className={`${feature.icon}  about-icon text-2xl text-[#FFCD83] shrink-0 `}
                      aria-hidden="true"
                    ></i>
                     <h3 
                     style={{ textAlign: "left",height: "100%", display: "flex", alignItems: "center", justifyContent: "start" }}
                     className="text-[#FFCD83] text-lg  mb-2  w-full">
                        {feature.title}
                      </h3>
                      </div>
                    <div className="flex-1 " >
                     
                      <div className="about-content text-white text-sm leading-relaxed">
                        {feature.description}
                      </div>
                    </div>
                 
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
