// Content blocks for booking articles
// Mapped by article ID for easy reference
import { ArticleContent } from '@/types/articleContent';

export const bookingArticleContentBlocks: Record<number, ArticleContent> = {
  1: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '計劃澳門自由行的旅客常面臨訂房價格不透明與區域選擇困難的問題。根據澳門消費者委員會統計，2023年酒店類投訴案件中，61%涉及未預先告知的附加費用，例如抵達後加收的度假村服務費或網絡使用費等等，但是不用擔心！小編都知道，這篇文章建議收藏，帶你避開各式隱形支出也帶你開心遊澳門！',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem'
            }
      }
    ],
    // Table of Contents
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '【澳門訂房】破解3大隱形消費陷阱', id: 'hidden-costs' },
        { level: 1, text: '【澳門訂房】分區域實測', id: 'area-comparison' },
        { level: 2, text: '步行10分鐘內抵達景點', id: 'walking-distance' },
        { level: 1, text: '【澳門訂房】高CP值時段策略', id: 'value-timing' },
        { level: 2, text: '週二搶房攻略', id: 'tuesday-strategy' },
        { level: 1, text: '【澳門訂房】房型選擇公式', id: 'room-selection' },
        { level: 2, text: '分析3,000+旅客評價得出的黃金比例', id: 'golden-ratio' },
        { level: 1, text: '【澳門訂房】聰明規劃讓旅程價值翻倍', id: 'smart-planning' }
      ],
      style: {
        backgroundColor: 'rgba(83, 52, 4, 0.842)',
        borderRadius: '30px',
        padding: '20px',
        marginTop: '20px',
        marginBottom: '30px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 165, 0, 0.2)',
        border: '1px solid #d18411',
        backdropFilter: 'blur(10px)',
      }
    },
    // Array of sections
    sections: [
      {
        type: 'section',
        title: '【澳門訂房】破解3大隱形消費陷阱',
        titleLevel: 2,
        id: 'hidden-costs',
        image: {
          src: '/booking/macao-hotel/mousetrap-6807571_1280.jpg',
          alt: '【澳門訂房】破解3大隱形消費陷阱',
          width: 300,
          height: 169
        },
        description: '了解並避開澳門訂房的隱形消費',
        content: [
          {
            type: 'heading',
            level: 3,
            content: '渡假村設施費爭議',
            style: { marginTop: '20px', marginBottom: '15px', fontSize: '1.2rem' }
          },
          {
            type: 'text',
            content: '2023年澳門消委會數據指出，61%旅客入住時被加收每晚100-300澳門幣「設施維護費」。實測發現：新濠影匯官網「全包價」專區標註接送巴士與泳池使用權，比第三方平台省22%隱形支出。',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '分級Wi-Fi收費機制',
            style: { marginTop: '30px', marginBottom: '15px', fontSize: '1.2rem' }
          },
          {
            type: 'text',
            content: '38%平價酒店對基礎房型收取每日50澳門幣網路費。破解技巧：入住時要求升級「商務房型」（如維景酒店），或自備CTM SIM卡（7天無限流量98澳門幣）。',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '夜間接駁車停駛',
            style: { marginTop: '30px', marginBottom: '15px', fontSize: '1.2rem' }
          },
          {
            type: 'text',
            content: '53%酒店接駁車僅營運至18:00，夜間抵達需多花200澳門幣搭計程車。推薦選擇澳門銀河酒店紫色專線巴士，24小時往返機場且可攜帶2件大行李。',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem',
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門訂房】分區域實測',
        titleLevel: 2,
        id: 'area-comparison',
        image: {
          src: '/booking/macao-hotel/architecture-1854220_1280.jpg',
          alt: '【澳門訂房】分區域實測',
          width: 300,
          height: 155
        },
        description: '澳門各區域酒店實測比較',
        content: [
          {
            type: 'heading',
            level: 3,
            content: '步行10分鐘內抵達景點',
            id: 'walking-distance',
            style: { marginTop: '20px', marginBottom: '15px', fontSize: '1.2rem' }
          },
          {
            type: 'heading',
            level: 4,
            content: '澳門半島CP值之王：新新酒店',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1.1rem' }
          },
          {
            type: 'text',
            content: '後門通道90秒直達議事亭前地，週末含稅價600人民幣，比同地段英皇酒店低35%。',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'heading',
            level: 4,
            content: '氹仔新地標：上葡京度假村',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1.1rem' }
          },
          {
            type: 'text',
            content: '去年開放3樓「綠茵勝境」花園免費拍澳門塔全景，步行8分鐘抵達永利皇宮纜車站。持房卡享免稅店折上折，滿2000澳門幣送水療券。',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'heading',
            level: 4,
            content: '路環秘境首選：鷺環海天渡假酒店',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1.1rem' }
          },
          {
            type: 'text',
            content: '全澳唯一私人黑沙灘，免費租單車騎行1.2公里至竹灣豪園。海景套房週末均價1200人民幣，比金沙城中心同級房型低40%。',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem',
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門訂房】高CP值時段策略',
        titleLevel: 2,
        id: 'value-timing',
        image: {
          src: '/booking/macao-hotel/coffee-7833769_1280.jpg',
          alt: '【澳門訂房】高CP值時段策略',
          width: 300,
          height: 199
        },
        description: '掌握最佳訂房時機',
        content: [
          {
            type: 'heading',
            level: 3,
            content: '週二搶房攻略',
            id: 'tuesday-strategy',
            style: { marginTop: '20px', marginBottom: '15px', fontSize: '1.2rem' }
          },
          {
            type: 'text',
            content: '每週二15:00刷新澳娛綜合官網，常釋出1元升級套房名額（需連住2晚基礎房）。去年新增「家庭友善」專場，巴黎人酒店免費加床＋兒童託管3小時，比單獨預訂省75%費用。',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem',
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門訂房】房型選擇公式',
        titleLevel: 2,
        id: 'room-selection',
        image: {
          src: '/booking/macao-hotel/bedroom-5664221_1280.jpg',
          alt: '【澳門訂房】房型選擇公式',
          width: 300,
          height: 200
        },
        description: '根據需求選擇最適合的房型',
        content: [
          {
            type: 'heading',
            level: 3,
            content: '分析3,000+旅客評價得出的黃金比例',
            id: 'golden-ratio',
            style: { marginTop: '20px', marginBottom: '15px', fontSize: '1.2rem' }
          },
          {
            type: 'text',
            content: '情侶出遊 = 巴黎鐵塔景房（氹仔） + 延後退房至15:00 + 免費浴缸消毒服務',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'text',
            content: '親子家庭 = 銀河酒店天浪淘園通行證 + 兒童俱樂部託管3小時 + 嬰兒床消毒封條',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'text',
            content: '商務客首選 = 美獅美高梅智能會議室 + 免費熨燙3件西裝 + 珠海機場VIP通關',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem',
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門訂房】聰明規劃讓旅程價值翻倍',
        titleLevel: 2,
        id: 'smart-planning',
        description: '總結與建議',
        content: [
          {
            type: 'text',
            content: '澳門住宿選擇考驗著旅客的資訊整合力，從避開隱形消費、活用支付工具聯動優惠，到精準鎖定分區域高CP值酒店，每個決策環節都影響著整體預算與體驗品質。去年實測數據顯示，掌握週二下午限時搶房與代碼解鎖技巧的旅客，平均節省28%住宿開支，更可將省下經費用於米其林餐廳或特色表演活動。建議優先鎖定提供「步行8分鐘內抵達景點」與「24小時接駁」的酒店，既能優化行程彈性，又能降低交通時間成本。',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'text',
            content: '立即追蹤龍匯天下官方',
            style: { 
              marginTop: '20px',
              marginBottom: '5px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'link',
            text: 'IG',
            href: 'https://www.instagram.com/lhts.8899/',
            target: '_blank',
            style: {
              color: '#3b82f6',
              textDecoration: 'underline',
              marginBottom: '5px'
            }
          },
          {
            type: 'text',
            content: '或點擊下方連結加入官方賴',
            style: { 
              marginBottom: '5px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'text',
            content: '開啟你的高性價比澳門之旅吧！',
            style: { 
              marginTop: '10px',
              marginBottom: '20px',
              fontSize: '1.1rem',
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      }
    ]
  },
  2: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '澳門的飯店數不勝數，是不是不知道找哪家?沒問題！小編聽到你的困擾了，今天特別精挑細選澳門最不能錯過的五大奢華飯店各自的特點，信我一把接著看！總有你滿意的！',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem'
            }
      }
    ],
    // Table of Contents
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '【澳門飯店】永利皇宮｜AI全控飯店革命', id: 'wynn-palace' },
        { level: 1, text: '【澳門飯店】澳門倫敦人｜全沉浸式時空穿越', id: 'londoner-macau' },
        { level: 1, text: '【澳門飯店】摩珀斯｜未來建築奇蹟進化版', id: 'morpheus' },
        { level: 1, text: '【澳門飯店】四季酒店｜百年奢華永續變革', id: 'four-seasons' },
        { level: 1, text: '【澳門飯店】美高梅｜藝術科技狂想曲', id: 'mgm' },
        { level: 1, text: '【澳門飯店】行家才知道的「隱藏版體驗」', id: 'hidden-experiences' }
      ],
      style: {
        backgroundColor: 'rgba(83, 52, 4, 0.842)',
        borderRadius: '30px',
        padding: '20px',
        marginTop: '20px',
        marginBottom: '30px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 165, 0, 0.2)',
        border: '1px solid #d18411',
        backdropFilter: 'blur(10px)',
      }
    },
    // Array of sections
    sections: [
      {
        type: 'section',
        title: '【澳門飯店】永利皇宮｜AI全控飯店革命',
        titleLevel: 2,
        id: 'wynn-palace',
        image: {
          src: '/booking/macao-hotel1/3G-WYNN-OUTLK-SOT-190711-1630.jpg',
          alt: '【澳門飯店】永利皇宮｜AI全控飯店革命',
          width: 300,
          height: 169
        },
        description: '2025年擴建南翼「未來水晶宮」',
        content: [
          {
            type: 'text',
            content: '2025年擴建南翼「未來水晶宮」',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'text',
            content: '全球首座AI管家系統：客房內嵌微軟Azure定製晶片，聲控精度達0.02秒延遲',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'text',
            content: '動態表演湖升級版：1,200台無人機+8K全息水幕，每日20:00上演《絲路星際》',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'text',
            content: '米其林星鏈餐廳：新增3星中餐「龍璽」由江振誠打造分子粵菜實驗室',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem',
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門飯店】澳門倫敦人｜全沉浸式時空穿越',
        titleLevel: 2,
        id: 'londoner-macau',
        image: {
          src: '/booking/macao-hotel1/Londoner-Macao-38.jpg',
          alt: '【澳門飯店】澳門倫敦人｜全沉浸式時空穿越',
          width: 300,
          height: 225
        },
        description: '斥資12億美元完成第三期擴建',
        content: [
          {
            type: 'text',
            content: '斥資12億美元完成第三期擴建',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'text',
            content: 'BBC Earth聯名客房：4D投影重現五大洲實時生態，床墊震動同步非洲動物遷徙',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'text',
            content: '大笨鐘實境攀爬：42米高空玻璃步道+AR望遠鏡直擊珠海天際線',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'text',
            content: '莎士比亞AI劇場：自然語言引擎即興生成400年來未公開的「失傳劇本」',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem',
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門飯店】摩珀斯｜未來建築奇蹟進化版',
        titleLevel: 2,
        id: 'morpheus',
        image: {
          src: '/booking/macao-hotel1/d2303f566200b0b1af19e24e119be0e4d39bfbab.jpg',
          alt: '【澳門飯店】摩珀斯｜未來建築奇蹟進化版',
          width: 300,
          height: 400
        },
        description: '獲2025年《時代》雜誌全球最佳設計酒店',
        content: [
          {
            type: 'text',
            content: '獲2025年《時代》雜誌全球最佳設計酒店',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'text',
            content: '超流體中庭升級：新增32條鈦合金空中廊橋，可預約「零重力下午茶」',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'text',
            content: '太空睡眠艙：與ESA合作研發深眠系統，腦波監測自動調節氧氣濃度',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'text',
            content: '碳捕捉藝術牆：建築外牆塗裝MIT研發的藻類凝膠，年吸收二氧化碳等同30公頃森林',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem',
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門飯店】四季酒店｜百年奢華永續變革',
        titleLevel: 2,
        id: 'four-seasons',
        image: {
          src: '/booking/macao-hotel1/MFM0000228_156259.jpg',
          alt: '【澳門飯店】四季酒店｜百年奢華永續變革',
          width: 300,
          height: 200
        },
        description: '亞太區首獲LEED零碳認證',
        content: [
          {
            type: 'text',
            content: '亞太區首獲LEED零碳認證',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'text',
            content: '可呼吸玻璃幕牆：仿生學設計調節室內微氣候，空調能耗降低62%',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'text',
            content: '零廢棄水療中心：理療床墊採用回收漁網再製矽膠，精油萃取自本地廚餘果皮',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'text',
            content: '米其林綠星私宴：主廚Bruno Ménard推出全植物基法餐，碳排放追蹤至每顆食材',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem',
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門飯店】美高梅｜藝術科技狂想曲',
        titleLevel: 2,
        id: 'mgm',
        image: {
          src: '/booking/macao-hotel1/70444821.jpg',
          alt: '【澳門飯店】美高梅｜藝術科技狂想曲',
          width: 300,
          height: 225
        },
        description: '2025年開幕「超維度展演廳」',
        content: [
          {
            type: 'text',
            content: '2025年開幕「超維度展演廳」',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'text',
            content: 'NFT藝術套房：30間客房配備三星MicroLED畫廊，實時展示蘇富比拍賣藏品',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'text',
            content: '流體力學泳池：奧運泳將傅園慧參與設計的競賽級逆流訓練系統',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'text',
            content: '全息DJ擂台：每周六全球頂尖DJ遠端操控AI混音系統對決',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem',
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門飯店】行家才知道的「隱藏版體驗」',
        titleLevel: 2,
        id: 'hidden-experiences',
        description: '行家才知道的隱藏版體驗',
        content: [
          {
            type: 'text',
            content: '1.永利皇宮後台密道：每日限量5組參觀價值2億的表演服裝修復中心',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'text',
            content: '2.倫敦人時光膠囊：在飯店圖書館預約鐳射雕刻服務，將DNA樣本封存於水晶',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'text',
            content: '3.摩珀斯建築診療所：由札哈事務所建築師親自解構你的身體力學數據',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'text',
            content: '結語：來到澳門這些頂級視覺享受可千萬別錯過啦！想了解更多可以點擊下方連結加入龍匯天下官方賴，也別忘了追蹤下我們龍匯天下官方',
            style: { 
              marginBottom: '5px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'link',
            text: 'IG',
            href: 'https://www.instagram.com/lhts.8899/',
            target: '_blank',
            style: {
              color: '#3b82f6',
              textDecoration: 'underline',
              marginBottom: '5px'
            }
          },
          {
            type: 'text',
            content: '喔~',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem',
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      }
    ]
  },
  3: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '看到這個標題應該已經知道我要介紹什麼了吧！沒錯，就是【澳門大倉酒店】，它可不單單只是酒店喔，這篇文章小編特別彙整了它有特色的亮點，有需要的趕緊收藏起來，一起來看看吧！',
        style: { 
          marginBottom: '20px',
          fontSize: '1.1rem'
        }
      }
    ],
    // Table of Contents
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '【澳門大倉酒店】和風美學再定義｜2025年「御簾別館」擴建工程', id: 'wind-aesthetics' },
        { level: 1, text: '【澳門大倉酒店】全球唯一「款待認證」｜ISO 23511服務標準實踐', id: 'hospitality-certification' },
        { level: 1, text: '【澳門大倉酒店】米其林預告星級戰場｜2025年「味覺遺產」計劃', id: 'michelin-plan' },
        { level: 1, text: '【澳門大倉酒店】永續款待進行式｜零廢棄酒店實證數據', id: 'sustainable-hospitality' },
        { level: 1, text: '【澳門大倉酒店】行家級選房公式｜三菱UFJ建築研究所實測數據', id: 'room-selection-formula' }
      ],
      style: {
        backgroundColor: 'rgba(83, 52, 4, 0.842)',
        borderRadius: '30px',
        padding: '20px',
        marginTop: '20px',
        marginBottom: '30px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 165, 0, 0.2)',
        border: '1px solid #d18411',
        backdropFilter: 'blur(10px)',
      }
    },
    // Array of sections
    sections: [
      {
        type: 'section',
        title: '【澳門大倉酒店】和風美學再定義｜2025年「御簾別館」擴建工程',
        titleLevel: 2,
        id: 'wind-aesthetics',
        image: {
          src: '/booking/macao-dacang/75755628.jpg',
          alt: '【澳門大倉酒店】和風美學再定義｜2025年「御簾別館」擴建工程',
          width: 300,
          height: 200
        },
        description: '耗資9.8億澳門元打造的本館附屬建築，經日本文化廳監修',
        content: [
          {
            type: 'text',
            content: '耗資9.8億澳門元打造的本館附屬建築，經日本文化廳監修：',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'text',
            content: '京都老鋪直營工坊：與300年歷史的西陣織「細尾家」合作開發客房專用御簾，每片竹簾需匠人手工打磨48小時',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'text',
            content: '備前燒溫控系統：岡山縣備前市陶土燒製的地暖磚，配合紅外線感應自動調節室溫波動±0.5℃',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'text',
            content: '枯山水聲景庭園：東京藝術大學音響研究所設計的7.1聲道竹筒水琴系統，重現龍安寺方丈庭園音效',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門大倉酒店】全球唯一「款待認證」｜ISO 23511服務標準實踐',
        titleLevel: 2,
        id: 'hospitality-certification',
        image: {
          src: '/booking/macao-dacang/18_85_large-990x590.jpg',
          alt: '【澳門大倉酒店】全球唯一「款待認證」｜ISO 23511服務標準實踐',
          width: 300,
          height: 179
        },
        description: '2025年成為首間通過國際服務品質認證的日系酒店',
        content: [
          {
            type: 'text',
            content: '2025年成為首間通過國際服務品質認證的日系酒店：',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'text',
            content: '茶道級房務流程：每間客房清潔需執行87道標準動作，耗時較2024年增加35%',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'text',
            content: '摺形師常駐服務：日本皇室御用摺紙專家高橋伊三雄每月駐店，提供客製化禮品包裝教學',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'text',
            content: '空氣觸覺管理：大堂安裝三菱重工定製香氛系統，依時段切換「晨露/午磬/夜檀」三種分子濃度',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門大倉酒店】米其林預告星級戰場｜2025年「味覺遺產」計劃',
        titleLevel: 2,
        id: 'michelin-plan',
        image: {
          src: '/booking/macao-dacang/5_20250612152849_3250.jpg',
          alt: '【澳門大倉酒店】米其林預告星級戰場｜2025年「味覺遺產」計劃',
          width: 300,
          height: 169
        },
        description: '與日本農林水產省合作推動的飲食文化保育項目',
        content: [
          {
            type: 'text',
            content: '與日本農林水產省合作推動的飲食文化保育項目：',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'text',
            content: '江戶前壽司博物館：設有18座低溫熟成櫃展示野生黑鮪魚熟成過程，每日提供築地市場競標直播',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'text',
            content: '失傳醬油復刻版：聯合廣島縣「牡蠣醬油」非遺傳承人，重現明治時期軍艦料理專用配方',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'text',
            content: '茶杓AI鑑定系統：運用東大研發的3D掃描技術，可解析客房內樂燒茶碗的300年窯變歷程',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門大倉酒店】永續款待進行式｜零廢棄酒店實證數據',
        titleLevel: 2,
        id: 'sustainable-hospitality',
        image: {
          src: '/booking/macao-dacang/75755628.jpg',
          alt: '【澳門大倉酒店】永續款待進行式｜零廢棄酒店實證數據',
          width: 300,
          height: 200
        },
        description: '2025年獲全球永續旅遊理事會(GSTC)最高評級',
        content: [
          {
            type: 'text',
            content: '2025年獲全球永續旅遊理事會(GSTC)最高評級：',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'text',
            content: '和紙循環系統：客房備品改用越前和紙，使用後回收製成燈罩由藝術家重新創作',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'text',
            content: '地酒碳足跡標籤：迷你吧清酒標示生產各階段碳排放，包含稻米生長期的甲烷轉換值',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'text',
            content: '人力發電廊道：走廊鋪設Panasonic壓電地磚，員工步行1公里可產生客房1小時照明電力',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門大倉酒店】行家級選房公式｜三菱UFJ建築研究所實測數據',
        titleLevel: 2,
        id: 'room-selection-formula',
        image: {
          src: '/booking/macao-dacang/Image_1.jpg',
          alt: '【澳門大倉酒店】行家級選房公式｜三菱UFJ建築研究所實測數據',
          width: 300,
          height: 200
        },
        description: '基於2025年新版客房動線的人因工程建議',
        content: [
          {
            type: 'text',
            content: '基於2025年新版客房動線的人因工程建議：',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'text',
            content: '1. 文化沉浸首選：選擇「御簾別館」501-503房，可同步觀賞晨間庭園掃除儀式',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'text',
            content: '2. 商務效率極致：本館「霞之間」行政房配備NEC腦波辦公桌，監測疲勞值自動調節桌高',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'text',
            content: '3. 親子友好祕境：西翼「橿原套房」內藏奈良縣贈送的等比例縮小東大寺木作模型',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'text',
            content: '怎麼樣?是不是很有意思呢?想知道更多快去把龍匯天下的官方',
            style: { 
              marginBottom: '5px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'link',
            text: 'IG',
            href: 'https://www.instagram.com/lhts.8899/',
            target: '_blank',
            style: {
              color: '#3b82f6',
              textDecoration: 'underline',
              marginBottom: '5px'
            }
          },
          {
            type: 'text',
            content: '追蹤起來',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'text',
            content: '小編我也把龍匯天下的官方賴連結貼心的幫你放在下方啦~',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'text',
            content: '我們下一篇文章見囉~',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      }
    ]
  },
  4: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '迫不及待要來分享【澳門訂房】懶人包啦！來到澳門的遊客怎麼能不找一間高級澳門住宿呢~每回去澳門旅行都開始找澳門住宿清單，先把小編這些口袋名單優質飯店收藏起來吧！',
        style: { 
          marginBottom: '20px',
          fontSize: '1.1rem'
        }
      }
    ],
    // Table of Contents
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '【澳門訂房】接著介紹下面六間飯店啦~讓我們一起看下去吧~', id: 'six-hotels' },
        { level: 2, text: '永利皇宮飯店', id: 'wynn-palace' },
        { level: 2, text: '澳門瑞吉金沙城中心酒店', id: 'st-regis' },
        { level: 2, text: '巴黎人酒店', id: 'parisian' },
        { level: 2, text: '澳門四季酒店', id: 'four-seasons' },
        { level: 2, text: '大倉酒店', id: 'okura' },
        { level: 2, text: '新濠天地 – 摩珀斯', id: 'morpheus' }
      ],
      style: {
        backgroundColor: 'rgba(83, 52, 4, 0.842)',
        borderRadius: '30px',
        padding: '20px',
        marginTop: '20px',
        marginBottom: '30px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 165, 0, 0.2)',
        border: '1px solid #d18411',
        backdropFilter: 'blur(10px)',
      }
    },
    // Array of sections
    sections: [
      {
        type: 'section',
        title: '【澳門訂房】接著介紹下面六間飯店啦~讓我們一起看下去吧~',
        titleLevel: 2,
        id: 'six-hotels',
        description: '精選六間頂級澳門飯店推薦',
        content: [
          {
            type: 'heading',
            level: 3,
            content: '永利皇宮飯店',
            id: 'wynn-palace',
            style: { marginTop: '0', marginBottom: '15px' }
          },
          {
            type: 'image',
            src: '/booking/wei2/wp-skycab-hero-mb-v2.jpg',
            alt: '永利皇宮飯店',
            width: 300,
            height: 300,
            style: { marginBottom: '20px' }
          },
          {
            type: 'text',
            content: '超土豪奢華擁有纜車的皇宮!推薦指數5顆星',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
              fontWeight: '600'
            }
          },
          {
            type: 'text',
            content: '澳門第一座纜車就位於永利皇宮，永利皇宮也是澳門很新的飯店唷~門口就有厲害的纜車可以搭乘環湖一圈也有定時的水舞秀若是入住永利皇宮很建議可以面向湖景，整點都可以看到美麗的水舞秀呢!飯店超貴氣也超氣派~設施有泳池、SPA、熱水浴場、健身房等，是小編數一數二喜愛的澳門飯店！',
            style: { 
              marginBottom: '30px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '澳門瑞吉金沙城中心酒店',
            id: 'st-regis',
            style: { marginTop: '20px', marginBottom: '15px' }
          },
          {
            type: 'image',
            src: '/booking/wei2/st-regis_top-banner_new_1920x950_tc.jpg',
            alt: '澳門瑞吉金沙城中心酒店',
            width: 300,
            height: 148,
            style: { marginBottom: '20px' }
          },
          {
            type: 'text',
            content: '金沙城中心最高檔的酒店!!推薦指數5顆星',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
              fontWeight: '600'
            }
          },
          {
            type: 'text',
            content: '人稱貴婦酒店的超高檔酒店位於金沙城中心的酒店中最高級的一個',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'text',
            content: '非常的尊貴而且寧靜，跟外頭賭場的喧鬧形成對比~設施有泳池、SPA、三溫暖、健身房等，大家最推的莫過於頂樓的高空按摩SPA，非常的熱門！旺日若沒有先預約基本上很難有位子唷~來這邊當個一日貴婦吧~',
            style: { 
              marginBottom: '30px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '巴黎人酒店',
            id: 'parisian',
            style: { marginTop: '20px', marginBottom: '15px' }
          },
          {
            type: 'image',
            src: '/booking/wei2/488039347.jpg',
            alt: '巴黎人酒店',
            width: 300,
            height: 200,
            style: { marginBottom: '20px' }
          },
          {
            type: 'text',
            content: '完全仿巴黎風格建造的酒店，還有巴黎鐵塔!，推薦指數5顆星',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
              fontWeight: '600'
            }
          },
          {
            type: 'text',
            content: '澳門巴黎人酒店也算是澳門很新的飯店最大的噱頭就是門口就有一個超擬真的巴黎鐵塔，入住飯店還可以免費前往巴黎鐵塔7樓觀賞~從LOBBY開始就是很浮誇凡爾賽宮鏡廳為設計概念四處都掛著歐洲的壁畫酒店內也有許多厲害的雕像，夜間還可以看巴黎人燈塔的燈光秀尤其推薦巴黎人的Le Buffet 自助餐很好吃！',
            style: { 
              marginBottom: '30px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '澳門四季酒店',
            id: 'four-seasons',
            style: { marginTop: '20px', marginBottom: '15px' }
          },
          {
            type: 'image',
            src: '/booking/wei2/32137401.jpg',
            alt: '澳門四季酒店',
            width: 300,
            height: 227,
            style: { marginBottom: '20px' }
          },
          {
            type: 'text',
            content: '沒有賭場的安靜高檔酒店!!親子友善~泳池超讚，推薦指數5顆星',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
              fontWeight: '600'
            }
          },
          {
            type: 'text',
            content: '四季酒店以葡萄牙建築風格為藍圖打造外觀，葡萄牙式的噴水池、許願池、拱廊、梁柱…等，飯店內部超好拍!!!有提供機場免費接駁，飯店使用歐舒丹備品，酒店設施有SPA、戶外泳池、遊戲室、健身房等等而且飯店屬於親子友善飯店，這點很加分！',
            style: { 
              marginBottom: '30px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '大倉酒店',
            id: 'okura',
            style: { marginTop: '20px', marginBottom: '15px' }
          },
          {
            type: 'image',
            src: '/booking/wei2/1523443416-6077a366055dc71bf174d8d81b2c2809.jpg',
            alt: '大倉酒店',
            width: 300,
            height: 200,
            style: { marginBottom: '20px' }
          },
          {
            type: 'text',
            content: '【澳門訂房】中難得的日式酒店，位於銀河渡假村，推薦指數5顆星',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
              fontWeight: '600'
            }
          },
          {
            type: 'text',
            content: '一直以來很喜歡日式風格的飯店，而位於銀河渡假村內的「大倉酒店」就是日式風格簡約的飯店銀河渡假村是閃亮亮的皇宮，其中的【天浪淘園】更是每到暑假都是小朋友玩水好去處入住銀河渡假村酒店的人都可以免費去玩水~一樣可以到鑽石大堂觀賞氣派的表演酒店的房間和大堂是簡約的日式和風~房間也都是多用木材的日系風，少了澳門酒店的霸氣，但卻多了一份清雅。',
            style: { 
              marginBottom: '30px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '新濠天地 – 摩珀斯',
            id: 'morpheus',
            style: { marginTop: '20px', marginBottom: '15px' }
          },
          {
            type: 'image',
            src: '/booking/wei2/146250602.jpg',
            alt: '新濠天地 – 摩珀斯',
            width: 300,
            height: 168,
            style: { marginBottom: '20px' }
          },
          {
            type: 'text',
            content: '【澳門訂房】最豪最頂酒店!!好酒沉甕底啦!推薦指數5顆星',
            style: { 
              marginBottom: '15px',
              fontSize: '1.1rem',
              fontWeight: '600'
            }
          },
          {
            type: 'text',
            content: '如果要找一間現今【澳門訂房】最奢華的酒店非這間莫屬了！外觀有如鳥巢體育館那樣的驚人！來到澳門的旅客很難去錯過它，全球首座採用自由型態外骨骼結構的摩天大樓，大廳更有科幻般的未來感時空，酒店40樓更有130米高的天際游泳池，若是想要奢華一下就住這一間!!',
            style: { 
              marginBottom: '30px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'text',
            content: '小編整理的這幾間澳門框金又包銀的酒店真的會讓人陶醉在其中，建議多方評比選擇適合自己的飯店再訂房！詳細情形及更多的優惠請加官方賴了解更多，這篇【澳門訂房】希望能讓大家下次去澳門輕鬆找到自己喜愛的住宿~',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      }
    ]
  },
  5: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '迫不及待要來分享【澳門訂房】懶人包啦！來到澳門的遊客怎麼能不找一間高級澳門住宿呢~每回去澳門旅行都開始找澳門住宿清單，先把小編這些口袋名單優質飯店收藏起來吧！',
        style: { 
          marginBottom: '20px',
          fontSize: '1.1rem'
        }
      },
      {
        type: 'text',
        content: '這篇文章彙整了澳門路氹住宿和澳門本島住宿，每間澳門飯店都有自己的特色，因為做了無敵多功課~比較了網路上的各種評價，對於【澳門訂房】沒有頭緒的人完全可以看這篇下訂！',
        style: { 
          marginBottom: '20px',
          fontSize: '1.1rem'
        }
      },
      {
        type: 'text',
        content: '廢話不多說，先把這13間飯店旅館給大家筆記，接下來開始介紹摟~~',
        style: { 
          marginBottom: '20px',
          fontSize: '1.1rem'
        }
      }
    ],
    // Table of Contents
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '【澳門訂房】澳門百老匯酒店', id: 'broadway' },
        { level: 1, text: '【澳門訂房】美獅美高梅', id: 'mgm-cotai' },
        { level: 1, text: '【澳門訂房】新濠影匯', id: 'studio-city' },
        { level: 1, text: '【澳門訂房】澳門十六浦索菲特大酒店', id: 'sofitel' },
        { level: 1, text: '【澳門訂房】澳門喜來登金沙城中心大酒店', id: 'sheraton' },
        { level: 1, text: '【澳門訂房】澳門銀河酒店', id: 'galaxy' },
        { level: 1, text: '【澳門訂房】澳門威尼斯人度假村酒店', id: 'venetian' }
      ],
      style: {
        backgroundColor: 'rgba(83, 52, 4, 0.842)',
        borderRadius: '30px',
        padding: '20px',
        marginTop: '20px',
        marginBottom: '30px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 165, 0, 0.2)',
        border: '1px solid #d18411',
        backdropFilter: 'blur(10px)',
      }
    },
    // Array of sections
    sections: [
      {
        type: 'section',
        title: '【澳門訂房】澳門百老匯酒店',
        titleLevel: 2,
        id: 'broadway',
        image: {
          src: '/booking/wei20i/3-broadway_macau-e1437364443302.jpg',
          alt: '【澳門訂房】澳門百老匯酒店',
          width: 300,
          height: 300
        },
        description: 'CP值高!適合小朋友的玩水渡假村!(推薦指數5顆星)',
        content: [
          {
            type: 'text',
            content: '百老匯酒店是澳門銀河渡假村內的酒店價格算是很便宜CP值很高的酒店，在澳門機場就有免費接駁車可以到達酒店而且還可以使用渡假村內的「天浪淘園」設施，帶小朋友去玩水很適合唷!!旁邊有一條「百老匯美食街」有許多澳門美食都在這條街上像是翠華、添好運、成記粥品等等......',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門訂房】美獅美高梅',
        titleLevel: 2,
        id: 'mgm-cotai',
        image: {
          src: '/booking/wei20i/20231108214925_61.jpg',
          alt: '【澳門訂房】美獅美高梅',
          width: 300,
          height: 225
        },
        description: '超夯超高檔(推薦指數5顆星)',
        content: [
          {
            type: 'text',
            content: '美獅美高梅是很新的澳門飯店在澳門半島有一間舊的美高梅，而美獅美高梅是最新力作，光是lobby就高檔到不行超好拍照~也有免費的接駁車從機場送到飯店房間內的mini bar約有十瓶左右飲料全數免費喝設施有戶外游泳池、桑拿三溫暖、健身房、賭場等等裡面還有一間Starbucks的旗艦店唷~',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門訂房】新濠影匯',
        titleLevel: 2,
        id: 'studio-city',
        image: {
          src: '/booking/wei20i/20190513184829_37.jpg',
          alt: '【澳門訂房】新濠影匯',
          width: 300,
          height: 225
        },
        description: '有著8字摩天輪的厲害酒店!(推薦指數4顆星)',
        content: [
          {
            type: 'text',
            content: '新濠影匯是【澳門訂房】相當熱門的飯店之一也很推一生可以來住一次看看!房間有分成「巨星匯」和「明星匯」是不同的CHECK-IN櫃台，巨星匯的坪數更大更豪華唷飯店內除了摩天輪外還有蝙蝠俠夜間奔馳4D、華納滿FUN童樂園、戶外游泳池、滑水道及漂漂河等，很適合親子遊來玩水唷!',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門訂房】澳門十六浦索菲特大酒店',
        titleLevel: 2,
        id: 'sofitel',
        image: {
          src: '/booking/wei20i/25374004.jpg',
          alt: '【澳門訂房】澳門十六浦索菲特大酒店',
          width: 300,
          height: 200
        },
        description: '平價且歷史悠久的老飯店!(推薦指數5顆星)',
        content: [
          {
            type: 'text',
            content: '大部分澳門的高檔飯店都在路氹區，十六浦索菲特飯店位於澳門半島，這邊有許多澳門景點、澳門美食大三巴和議事亭前地都是步行可達的距離也走得到十月初五街吃美食，飯店設施有健身房、蒸氣室、桑拿、室外游泳池、SPA水療，因為歷史悠久所以價格也便宜許多~也有從機場來的免費接駁車。',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門訂房】澳門喜來登金沙城中心大酒店',
        titleLevel: 2,
        id: 'sheraton',
        image: {
          src: '/booking/wei20i/sheraton_02_b.jpg',
          alt: '【澳門訂房】澳門喜來登金沙城中心大酒店',
          width: 300,
          height: 198
        },
        description: '金沙城中心內便宜CP值高飯店!親子遊推薦(推薦指數4.5顆星)',
        content: [
          {
            type: 'text',
            content: '金沙城中心度假村四間飯店內較平價飯店，但一樣可以享受金沙城中心的服務唷~有個大賭場，很適合賭客小賭一下，有空橋連接著旁邊的巴黎人、威尼斯人，步行到其他酒店也是相當方便，親子遊方便12歲以下兒童不佔床可以免費入住，設施有Spa、室外游泳池、健身房，泳池畔還設有休憩亭~',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門訂房】澳門銀河酒店',
        titleLevel: 2,
        id: 'galaxy',
        image: {
          src: '/booking/wei20i/gh_hotel_main_hero.jpg',
          alt: '【澳門訂房】澳門銀河酒店',
          width: 300,
          height: 146
        },
        description: '金光閃閃的銀河酒店!!奢華極致~(推薦指數5顆星)',
        content: [
          {
            type: 'text',
            content: '銀河酒店位於銀河渡假村~提供免費的機場接駁車接送，銀河渡假村的水晶大堂表演相當氣派，有賭場、室外恆溫泳池、按摩泳池、健身房等設施12歲以下兒童不佔床可以免費入住房客可以免費到銀河渡假村內的【天浪淘園】玩水！',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門訂房】澳門威尼斯人度假村酒店',
        titleLevel: 2,
        id: 'venetian',
        image: {
          src: '/booking/wei20i/186868592.jpg',
          alt: '【澳門訂房】澳門威尼斯人度假村酒店',
          width: 300,
          height: 200
        },
        description: '過去最夯最厲害的高檔酒店!(推薦指數5顆星)',
        content: [
          {
            type: 'text',
            content: '說到澳門訂房，威尼斯人酒店可以說是無人不知，過去大家說【澳門訂房】就是要住威尼斯人才算有來過澳門，雖然現在澳門已經有太多的厲害飯店林立，但說到【澳門訂房】威尼斯人仍舊有它不可抹滅的地位，建議一輩子就花一次錢去住一次吧！除了飯店很有義大利威尼斯風格外，還有廣大的購物商場、美食餐廳以及貢多拉遊船、賭場等設施就算沒住威尼斯人，一定也會來威尼斯人酒店逛逛唷~飯店設施有大運河購物中心、SPA、游泳池、健身房等......',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'text',
            content: '還沒介紹完呢！想看更多請點我~',
            style: { 
              marginBottom: '5px',
              fontSize: '1.1rem'
            }
          },
          {
            type: 'link',
            text: '【澳門訂房】最頂攻略它來了！(下)',
            href: 'https://www.long-huei.com/Article/wei2',
            target: '_self',
            style: {
              color: '#3b82f6',
              textDecoration: 'underline',
              marginBottom: '5px'
            }
          },
          {
            type: 'text',
            content: '想要優惠訂房嗎？價格跌破你的眼睛，趕快點擊官方Line聯絡我們喔～',
            style: { 
              marginBottom: '20px',
              fontSize: '1.1rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      }
    ]
  }
};

