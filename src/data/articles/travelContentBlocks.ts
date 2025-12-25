// Content blocks for travel articles
// Mapped by article ID for easy reference
import { ArticleContent } from '@/types/articleContent';

export const travelArticleContentBlocks: Record<number, ArticleContent> = {
  1: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '澳門作為融合中西文化的特別行政區,2025年持續推出新景點與服務升級。台灣旅客最關心的重點更新:',
        style: { 
          marginBottom: '20px',
          fontSize: '0.8rem'
        }
      },
      {
        type: 'text',
        content: '簽證新制:台灣旅客持有效期6個月以上護照可免簽停留30天,入境改採「電子通關+人臉辨識」,通關更快速。',
        style: { 
          marginTop: '30px',
          marginBottom: '20px',
          fontSize: '0.8rem'
        }
      },
      {
        type: 'text',
        content: '交通升級:',
        style: { 
          marginTop: '30px',
          marginBottom: '20px',
          fontSize: '0.8rem'
        }
      },
      {
        type: 'list',
        items: [
          '輕軌氹仔線延伸至媽閣站,串聯澳門半島與離島',
          '新增「澳門出行」APP整合叫車、公車與輕軌資訊'
        ],
        style: { marginBottom: '20px', fontSize: '0.8rem' }
      },
      {
        type: 'heading',
        level: 2,
        content: '支付便利',
        style: { marginTop: '30px', marginBottom: '15px' , fontSize: '0.8rem' }
      },
      {
        type: 'list',
        items: [
          '全澳電子支付要蓋率達95%,連路邊攤都可用台灣行動支付'
        ],
        style: { marginBottom: '20px' }
      }
    ],
    // Table of Contents
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '必訪新景點', id: 'attractions' },
        { level: 2, text: '【全新開幕】', id: 'new-openings' },
        { level: 3, text: '澳門太空館', id: 'space-museum' },
        { level: 3, text: '銀河綜合度假城三期', id: 'galaxy-phase3' },
        { level: 2, text: '【經典升級】', id: 'classic-upgrades' },
        { level: 3, text: '大三巴牌坊', id: 'ruins-of-st-paul' },
        { level: 3, text: '威尼斯人購物中心', id: 'venetian-shopping' },
        { level: 1, text: '美食新發現', id: 'food' },
        { level: 1, text: '住宿推薦', id: 'accommodation' },
        { level: 2, text: '新開幕酒店', id: 'new-hotels' },
        { level: 3, text: '澳門四季名薈', id: 'four-seasons' },
        { level: 3, text: 'W澳門', id: 'w-macau' },
        { level: 2, text: '性價比之選', id: 'value-hotels' },
        { level: 3, text: '澳門人酒店', id: 'macau-people-hotel' },
        { level: 3, text: '金光度假公寓', id: 'golden-resort-apartment' }
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
        title: '必訪新景點',
        titleLevel: 2,
        id: 'attractions',
        image: {
          src: '/travel/macau-all/macau-2538613.jpg',
          alt: '澳門新景點',
          width: 800,
          height: 450
        },
        description: '澳門2025年最新景點與升級服務',
        content: [
          {
            type: 'heading',
            level: 3,
            content: '【全新開幕】',
            id: 'new-openings',
            style: { marginTop: '0', marginBottom: '15px' }
          },
          {
            type: 'heading',
            level: 4,
            content: '澳門太空館',
            id: 'space-museum',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1.1rem' }
          },
          {
            type: 'list',
            items: [
              '亞洲首個以航天科技為主題的沉浸式體驗館',
              '特色設施: 4D太空漫遊、月球表面模擬區'
            ],
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem',
              fontFamily: 'inherit',
              lineHeight: '1.6'
            }
          },
          {
            type: 'heading',
            level: 4,
            content: '銀河綜合度假城三期',
            id: 'galaxy-phase3',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1.1rem' }
          },
          {
            type: 'list',
            items: [
              '新增「熱帶雨林水上樂園」與「亞洲最大室內滑雪場」',
              '奢華酒店「安達仕」澳門首店進駐'
            ],
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem',
              fontFamily: 'inherit',
              lineHeight: '1.6'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '【經典升級】',
            id: 'classic-upgrades',
            style: { marginTop: '30px', marginBottom: '15px' }
          },
          {
            type: 'heading',
            level: 4,
            content: '大三巴牌坊',
            id: 'ruins-of-st-paul',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1.1rem' }
          },
          {
            type: 'list',
            items: [
              '新增「AR導覽眼鏡」租借服務',
              '提供多語言導覽,包含繁體中文'
            ],
            style: { marginBottom: '20px' }
          },
          {
            type: 'heading',
            level: 4,
            content: '威尼斯人購物中心',
            id: 'venetian-shopping',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1.1rem' }
          },
          {
            type: 'list',
            items: [
              '引進50+新品牌,包括台灣人愛的日本藥妝店',
              '新增美食廣場與休憩區'
            ],
            style: { marginBottom: '20px' }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '美食新發現',
        titleLevel: 2,
        id: 'food',
        image: {
          src: '/travel/macau-all/hamburger-494706.jpg',
          alt: '澳門美食',
          width: 800,
          height: 450
        },
        description: '澳門2025年最新美食推薦',
        content: [
          {
            type: 'list',
            items: [
              'Macau-Portuguese fusion新料理: 推薦葡式蠔餅、澳門塔下午茶',
              '新夜市選擇: 「澳門之夜」美食市集 (每晚6-12點)\n  必吃: 龍蝦包、榴槤葡式蛋塔、AI調酒'
            ],
            style: { marginBottom: '20px' }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '住宿推薦',
        titleLevel: 2,
        id: 'accommodation',
        image: {
          src: '/travel/macau-all/macau-1901264_1920.jpg',
          alt: '澳門酒店',
          width: 800,
          height: 450
        },
        description: '澳門2025年最新住宿推薦',
        content: [
          {
            type: 'heading',
            level: 3,
            content: '新開幕酒店',
            id: 'new-hotels',
            style: { marginTop: '0', marginBottom: '15px' }
          },
          {
            type: 'heading',
            level: 4,
            content: '澳門四季名薈',
            id: 'four-seasons',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1.1rem' }
          },
          {
            type: 'list',
            items: [
              '2025年3月開幕',
              '全套房設計,特色服務包含私人管家服務與24小時米其林客房服務'
            ],
            style: { marginBottom: '20px' }
          },
          {
            type: 'heading',
            level: 4,
            content: 'W澳門',
            id: 'w-macau',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1.1rem' }
          },
          {
            type: 'list',
            items: [
              '2025年下半年開幕',
              '時尚品牌酒店首次進駐澳門,擁有可直視港珠澳大橋的無邊際泳池'
            ],
            style: { marginBottom: '20px' }
          },
          {
            type: 'heading',
            level: 3,
            content: '性價比之選',
            id: 'value-hotels',
            style: { marginTop: '30px', marginBottom: '15px' }
          },
          {
            type: 'heading',
            level: 4,
            content: '澳門人酒店',
            id: 'macau-people-hotel',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1.1rem' }
          },
          {
            type: 'list',
            items: [
              '位於大三巴牌坊附近',
              '交通便利,步行即可到達主要景點'
            ],
            style: { marginBottom: '20px' }
          },
          {
            type: 'heading',
            level: 4,
            content: '金光度假公寓',
            id: 'golden-resort-apartment',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1.1rem' }
          },
          {
            type: 'list',
            items: [
              '家庭房性價比極高',
              '提供廚房設施,適合長期住宿'
            ],
            style: { marginBottom: '20px' }
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
        content: '如果你只有一天時間在澳門停留，該怎麼玩才能值回票價？這就是 澳門一日遊 的魅力所在。這座小城融合了中西文化，既有古老的歷史建築，又有國際級的娛樂度假村，只要行程安排得宜，即使僅有 24 小時，也能從清晨到深夜都充實難忘。',
        style: { 
          marginBottom: '20px',
          fontSize: '0.8rem'
        }
      }
    ],
    // Table of Contents
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '上午：世界遺產巡禮', id: 'morning-heritage' },
        { level: 1, text: '中午：街頭美食體驗', id: 'noon-food' },
        { level: 1, text: '下午：娛樂與親子樂園', id: 'afternoon-entertainment' },
        { level: 1, text: '晚上：夜色下的澳門', id: 'evening-night' },
        { level: 1, text: '澳門一日遊交通攻略', id: 'transportation' },
        { level: 1, text: '小貼士', id: 'tips' },
        { level: 1, text: '結語', id: 'conclusion' }
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
        title: '上午：世界遺產巡禮',
        titleLevel: 2,
        id: 'morning-heritage',
        image: {
          src: '/travel/macao-onedaypass/long-huei.jpg',
          alt: '上午：世界遺產巡禮',
          width: 800,
          height: 450
        },
        description: '澳門的舊城區是 澳門一日遊 的最佳起點',
        content: [
          {
            type: 'text',
            content: '澳門的舊城區是 澳門一日遊 的最佳起點。早餐後，可以先到 議事亭前地，感受葡式石板路與周邊建築的古典氛圍。接著前往澳門的象徵——大三巴牌坊，這裡曾是聖保祿教堂的一部分，現在是世界文化遺產，也是遊客必拍的打卡地點。',
            style: { marginBottom: '20px', fontSize: '0.8rem' }
          },
          {
            type: 'text',
            content: '沿著大三巴往上走，就能到達 大炮台與澳門博物館，了解澳門的海上貿易歷史與中葡文化交流。如果時間充裕，不妨散步到 媽閣廟，這座建於明代的古廟，是「澳門」名字的由來，充滿歷史韻味。',
            style: { marginBottom: '20px', fontSize: '0.8rem' }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '中午：街頭美食體驗',
        titleLevel: 2,
        id: 'noon-food',
        image: {
          src: '/travel/macao-onedaypass/new-york-3659946.jpg',
          alt: '中午：街頭美食體驗',
          width: 800,
          height: 450
        },
        description: '澳門一日遊 的午餐，絕不能錯過道地美食',
        content: [
          {
            type: 'text',
            content: '澳門一日遊 的午餐，絕不能錯過道地美食。前往氹仔的 官也街，你會發現這裡是美食天堂：葡式蛋撻、豬扒包、水蟹粥、葡國雞，甚至是牛雜、杏仁餅等小吃都能一次收集。帶著孩子的家庭，也能在這裡輕鬆找到適合的餐廳，讓大人小孩都能享受美食。',
            style: { marginBottom: '20px', fontSize: '0.8rem' }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '下午：娛樂與親子樂園',
        titleLevel: 2,
        id: 'afternoon-entertainment',
        image: {
          src: '/travel/macao-onedaypass/f27d1fcbc2071d4cfdf3f71b0437f852adb44564.jpg',
          alt: '下午：娛樂與親子樂園',
          width: 800,
          height: 450
        },
        description: '來到氹仔與路氹金光大道，另一個截然不同的澳門展現在眼前',
        content: [
          {
            type: 'text',
            content: '來到氹仔與路氹金光大道，另一個截然不同的澳門展現在眼前。這裡雲集世界知名度假村和娛樂設施，是 澳門一日遊 中最繽紛的一環。',
            style: { marginBottom: '20px', fontSize: '0.8rem' }
          },
          {
            type: 'list',
            items: [
              '想要刺激？可以去 澳門旅遊塔，挑戰高空漫步或笨豬跳，飽覽全景。',
              '想要親子同樂？那麼 新濠影滙水上樂園 是首選，室內外雙區設計，即使下雨也能暢快玩水。',
              '如果想購物休閒，則可以到 威尼斯人購物中心，仿威尼斯的運河與貢多拉船，讓人恍如置身歐洲。'
            ],
            style: { marginBottom: '20px', fontSize: '0.8rem' }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '晚上：夜色下的澳門',
        titleLevel: 2,
        id: 'evening-night',
        image: {
          src: '/travel/macao-onedaypass/澳門巴黎人酒店巴黎鐵塔門票.jpg',
          alt: '晚上：夜色下的澳門',
          width: 800,
          height: 450
        },
        description: '傍晚時分，建議到 巴黎人艾菲爾鐵塔 欣賞夜景',
        content: [
          {
            type: 'text',
            content: '傍晚時分，建議到 巴黎人艾菲爾鐵塔 欣賞夜景。塔頂的觀景台能夠將澳門的繁華盡收眼底，晚上還有燈光秀，非常浪漫。',
            style: { marginBottom: '20px', fontSize: '0.8rem' }
          },
          {
            type: 'text',
            content: '結束後可以前往 銀河酒店的鑽石大堂，觀賞音樂水舞表演，免費又精彩。若還有精力，不妨在度假區內找間餐廳，享用葡式晚餐，為這趟 澳門一日遊 劃下完美句點。',
            style: { marginBottom: '20px', fontSize: '0.8rem' }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '澳門一日遊交通攻略',
        titleLevel: 2,
        id: 'transportation',
        description: '由於時間有限，交通規劃是關鍵',
        content: [
          {
            type: 'text',
            content: '由於時間有限，交通規劃是關鍵：',
            style: { marginBottom: '15px', fontSize: '0.8rem' }
          },
          {
            type: 'list',
            items: [
              '步行：舊城區多為世界遺產景點，步行即可完成。',
              '輕軌：氹仔與路氹一帶可搭輕軌接駁。',
              '包車服務：若想在一天內跑遍多個景點，建議可以選擇我們龍匯澳門包車，節省時間更輕鬆。'
            ],
            style: { marginBottom: '20px', fontSize: '0.8rem' }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '小貼士',
        titleLevel: 2,
        id: 'tips',
        description: '實用建議讓你的澳門一日遊更順利',
        content: [
          {
            type: 'list',
            items: [
              '時間分配：上午安排舊城區，下午走娛樂度假村，晚上欣賞夜景，是最經典的一日遊路線。',
              '舒適穿著：大三巴一帶需步行，建議穿輕便鞋。',
              '預約門票：旅遊塔、水上樂園等熱門景點，建議提前網上訂票以免久候。',
              '帶點現金：部分老字號小吃店可能不接受電子支付，準備些澳門幣更方便。'
            ],
            ordered: true,
            style: { marginBottom: '20px', fontSize: '0.8rem' }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '結語',
        titleLevel: 2,
        id: 'conclusion',
        description: '短短一天，雖然無法完全探索澳門，但透過精心規劃，澳門一日遊 依然能讓你感受到世界遺產的莊嚴、街頭小吃的魅力，以及度假村的繁華與夜景之美',
        content: [
          {
            type: 'text',
            content: '短短一天，雖然無法完全探索澳門，但透過精心規劃，澳門一日遊 依然能讓你感受到世界遺產的莊嚴、街頭小吃的魅力，以及度假村的繁華與夜景之美。這就是澳門的獨特之處——小而精緻，濃縮了歷史、人文與現代娛樂的精華。',
            style: { marginBottom: '20px', fontSize: '0.8rem' }
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
        content: '想帶著孩子來一趟輕鬆又充滿驚喜的旅程嗎？近年來，澳門親子自由行 成為許多家庭旅遊的熱門選擇。不同於單純的觀光購物，澳門除了世界遺產與美食文化，更有許多適合親子同樂的景點與活動，無論是寓教於樂的體驗，還是盡情放鬆的休閒空間，都能讓爸媽與小孩留下難忘回憶。',
        style: { 
          marginBottom: '20px',
          fontSize: '0.8rem'
        }
      }
    ],
    // Table of Contents
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '為什麼選擇澳門親子自由行？', id: 'why-choose' },
        { level: 1, text: '澳門親子自由行必去景點', id: 'must-visit' },
        { level: 2, text: '1. 新濠影滙水上樂園', id: 'studio-city-waterpark' },
        { level: 2, text: '2. 澳門科學館', id: 'science-museum' },
        { level: 2, text: '3. 路氹區親子酒店', id: 'cotai-family-hotels' },
        { level: 2, text: '4. 大熊貓館（石排灣郊野公園）', id: 'panda-pavilion' },
        { level: 2, text: '5. 澳門旅遊塔', id: 'macau-tower' },
        { level: 1, text: '親子自由行玩法建議', id: 'itinerary-suggestions' },
        { level: 1, text: '澳門親子自由行住宿推薦', id: 'accommodation' },
        { level: 1, text: '美食體驗', id: 'food-experience' },
        { level: 1, text: '小提醒', id: 'tips' },
        { level: 1, text: '結語', id: 'conclusion' }
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
        title: '為什麼選擇澳門親子自由行？',
        titleLevel: 2,
        id: 'why-choose',
        image: {
          src: '/travel/macao-parent-child/frogs-897981_1920.jpg',
          alt: '為什麼選擇澳門親子自由行？',
          width: 800,
          height: 450
        },
        description: '澳門親子自由行的優勢',
        content: [
          {
            type: 'list',
            items: [
              '交通便利：澳門不大，主要景點之間距離近，可以找龍匯天下包車非常方便。',
              '親子友善：許多飯店、樂園和博物館都設有兒童設施與親子活動。',
              '中西文化融合：在遊玩同時，孩子可以感受中葡文化交織的氛圍，寓教於樂。'
            ],
            ordered: true,
            style: { marginBottom: '20px', fontSize: '0.8rem' }
          },
          {
            type: 'text',
            content: '因此，澳門親子自由行能兼顧玩樂與學習，適合週末或短假期安排。',
            style: { marginBottom: '20px', fontSize: '0.8rem' }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '澳門親子自由行必去景點',
        titleLevel: 2,
        id: 'must-visit',
        image: {
          src: '/travel/macao-parent-child/singapore-2556630_1920.jpg',
          alt: '澳門親子自由行必去景點',
          width: 800,
          height: 450
        },
        description: '精選適合親子同樂的澳門景點',
        content: [
          {
            type: 'heading',
            level: 3,
            content: '1. 新濠影滙水上樂園',
            id: 'studio-city-waterpark',
            style: { marginTop: '0', marginBottom: '15px' }
          },
          {
            type: 'text',
            content: '夏季必玩！這裡擁有室內與戶外雙區域，孩子能玩滑水道、漂流河，大人也能享受衝浪模擬器。全年恆溫設計，即便冬天也能開心玩水。',
            style: { marginBottom: '20px', fontSize: '0.8rem' }
          },
          {
            type: 'heading',
            level: 3,
            content: '2. 澳門科學館',
            id: 'science-museum',
            style: { marginTop: '20px', marginBottom: '15px' }
          },
          {
            type: 'text',
            content: '外型像太空飛碟，館內有互動實驗、天文館與親子展區，非常適合啟發孩子的好奇心與探索精神。',
            style: { marginBottom: '20px', fontSize: '0.8rem' }
          },
          {
            type: 'heading',
            level: 3,
            content: '3. 路氹區親子酒店',
            id: 'cotai-family-hotels',
            style: { marginTop: '20px', marginBottom: '15px' }
          },
          {
            type: 'text',
            content: '不少酒店如銀河、新濠影滙、威尼斯人都設有兒童遊戲區、泳池與家庭套房，爸媽能安心休息，小朋友也不無聊。',
            style: { marginBottom: '20px', fontSize: '0.8rem' }
          },
          {
            type: 'heading',
            level: 3,
            content: '4. 大熊貓館（石排灣郊野公園）',
            id: 'panda-pavilion',
            style: { marginTop: '20px', marginBottom: '15px' }
          },
          {
            type: 'text',
            content: '觀看大熊貓、紅頰黑猴等珍稀動物，是孩子最期待的親子行程之一。',
            style: { marginBottom: '20px', fontSize: '0.8rem' }
          },
          {
            type: 'heading',
            level: 3,
            content: '5. 澳門旅遊塔',
            id: 'macau-tower',
            style: { marginTop: '20px', marginBottom: '15px' }
          },
          {
            type: 'text',
            content: '除了欣賞 360 度城市美景，勇敢的家庭還能挑戰高空觀景平台，孩子則能參加較安全的親子活動。',
            style: { marginBottom: '20px', fontSize: '0.8rem' }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '親子自由行玩法建議',
        titleLevel: 2,
        id: 'itinerary-suggestions',
        description: '不同主題的親子行程安排',
        content: [
          {
            type: 'list',
            items: [
              '文化探索日：上午參觀大三巴牌坊、媽閣廟，下午走訪澳門博物館，讓孩子接觸歷史文化。',
              '親子娛樂日：入住路氹區度假村，享受水上樂園、遊戲區，晚上逛美食街。',
              '自然放鬆日：到路環或氹仔，走進石排灣郊野公園或海灘，親近自然。'
            ],
            style: { marginBottom: '20px', fontSize: '0.8rem' }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '澳門親子自由行住宿推薦',
        titleLevel: 2,
        id: 'accommodation',
        image: {
          src: '/travel/macao-parent-child/hotel-1749602_1920.jpg',
          alt: '澳門親子自由行住宿推薦',
          width: 800,
          height: 450
        },
        description: '選擇住宿是親子旅行的關鍵',
        content: [
          {
            type: 'text',
            content: '選擇住宿是親子旅行的關鍵。若預算充足，可選擇 新濠影滙酒店、銀河酒店，設施豐富且有專屬兒童天地。若偏向經濟型旅遊，可考慮氹仔或澳門本島的親子友善民宿，如果想知道有什麼優惠又不錯的飯店，可以在龍匯天下Line了解更多喔！',
            style: { marginBottom: '20px', fontSize: '0.8rem' }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '美食體驗',
        titleLevel: 2,
        id: 'food-experience',
        description: '親子出遊怎能少了美食',
        content: [
          {
            type: 'text',
            content: '親子出遊怎能少了美食？澳門擁有葡式蛋撻、豬扒包、水蟹粥等經典美食，許多餐廳也設有兒童餐點。家庭旅遊時，可以安排在氹仔官也街或路環享用在地小吃。',
            style: { marginBottom: '20px', fontSize: '0.8rem' }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '小提醒',
        titleLevel: 2,
        id: 'tips',
        description: '實用建議讓親子旅行更順利',
        content: [
          {
            type: 'list',
            items: [
              '記得攜帶防曬用品與替換衣物，特別是玩水設施時。',
              '提前規劃景點路線，避免孩子過度疲累。',
              '選擇適合孩子年齡的活動，安全與舒適最重要。'
            ],
            style: { marginBottom: '20px', fontSize: '0.8rem' }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '結語',
        titleLevel: 2,
        id: 'conclusion',
        description: '澳門親子自由行能帶給家庭成員不同的驚喜',
        content: [
          {
            type: 'text',
            content: '無論是體驗水上樂園的刺激，還是探索博物館的知識，澳門親子自由行 都能帶給家庭成員不同的驚喜。這是一座小而美的城市，既能滿足孩子的好奇心，也能讓爸媽享受悠閒氛圍。如果你正在規劃家庭旅遊，不妨把澳門列入清單，親子同遊的美好回憶，將會在這裡誕生。',
            style: { marginBottom: '20px', fontSize: '0.8rem' }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      }
    ]
  }
};

