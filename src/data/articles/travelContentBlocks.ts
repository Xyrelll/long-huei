// Content blocks for travel articles
// Mapped by article ID for easy reference
import { ArticleContent } from '@/types/articleContent';

// Common style constants - edit here to update all instances
const TEXT_STYLE_BOTTOM_20 = { 
  marginBottom: '20px', 
  marginTop: '0', 
  fontSize: '1.125rem'
};

const TEXT_STYLE_BOTTOM_10 = { 
  marginBottom: '10px', 
  marginTop: '0', 
  fontSize: '1.125rem'
};

const TEXT_STYLE_BOTTOM_20_NO_TOP = { 
  marginBottom: '20px',
  fontSize: '1.125rem'
};

const TEXT_STYLE_BOTTOM_20_1_1 = { 
  marginBottom: '20px',
  fontSize: '1.1rem'
};

const HEADING_STYLE_H3 = { 
  marginTop: '20px', 
  marginBottom: '10px' 
};

const TABLE_OF_CONTENTS_STYLE = {
  backgroundColor: 'rgba(83, 52, 4, 0.842)',
  borderRadius: '50px',
  padding: '20px',
  marginTop: '20px',
  marginBottom: '30px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 165, 0, 0.2)',
  border: '1px solid #d18411',
  backdropFilter: 'blur(10px)',
  
  hoverTextColor: '#FFCD83',
};

const SECTION_STYLE = {
  marginTop: '40px',
  marginBottom: '40px'
};

const LIST_STYLE = {
  marginTop: '10px',
  marginBottom: '20px',
  fontSize: '1.125rem',
  lineHeight: '5rem'
};

export const travelArticleContentBlocks: Record<number, ArticleContent> = {
  1: {
    description: [
      {
        type: 'text',
        content: '',
        style: TEXT_STYLE_BOTTOM_20_1_1
      }
    ],
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '特色景點與建築風格', id: 'attractions-architecture' },
        { level: 2, text: '1. 古羅馬表演場', id: 'roman-colosseum' },
        { level: 2, text: '2. 火山建築群與阿拉丁堡壘', id: 'volcano-aladdin' },
        { level: 2, text: '3. 唐城、東西匯聚與勵駿碼頭', id: 'tang-city-wharf' },
        { level: 1, text: '美食與購物推薦', id: 'food-shopping' },
        { level: 2, text: '美食選擇多元', id: 'food-options' },
        { level: 2, text: '購物體驗', id: 'shopping-experience' },
        { level: 1, text: '娛樂活動與住宿', id: 'entertainment-accommodation' },
        { level: 2, text: '娛樂設施', id: 'entertainment-facilities' },
        { level: 2, text: '住宿推薦', id: 'accommodation-recommendations' },
        { level: 1, text: '實用資訊', id: 'practical-info' },
        { level: 1, text: '遊玩小建議', id: 'travel-tips' },
        { level: 1, text: '結語', id: 'conclusion' }
      ],
      style: TABLE_OF_CONTENTS_STYLE
    },
    sections: [
      {
        type: 'section',
        title: '',
        titleLevel: 2,
        id: 'intro-image',
        image: {
          src: '/travel/macaomatou/macau-1654180_1280.jpg',
          alt: '澳門漁人碼頭',
          width: 300,
          height: 200
        },
        content: [],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '特色景點與建築風格',
        titleLevel: 2,
        id: 'attractions-architecture',
        content: [
          {
            type: 'heading',
            level: 3,
            content: '1. 古羅馬表演場',
            id: 'roman-colosseum',
            style: { marginTop: '20px', marginBottom: '15px', fontSize: '1.1rem' }
          },
          {
            type: 'text',
            content: '漁人碼頭最吸睛的標誌性建築，仿照古羅馬鬥獸場設計，充滿歷史氛圍。這裡不定期舉辦演唱會、文化活動，夜晚燈光亮起時更顯宏偉，是攝影愛好者的絕佳取景地。',
            style: {
              marginBottom: '20px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '2. 火山建築群與阿拉丁堡壘',
            id: 'volcano-aladdin',
            style: { marginTop: '20px', marginBottom: '15px', fontSize: '1.1rem' }
          },
          {
            type: 'text',
            content: '高達40米的火山造型建築，內部設有兒童遊樂設施，適合親子同遊。旁邊的阿拉丁堡壘充滿中東特色，細節雕刻精緻，展現異國風情。',
            style: {
              marginBottom: '20px',
              fontSize: '1.1rem',
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '3. 唐城、東西匯聚與勵駿碼頭',
            id: 'tang-city-wharf',
            style: { marginTop: '20px', marginBottom: '15px', fontSize: '1.1rem' }
          },
          {
            type: 'list',
            items: [
              '唐城：以唐代建築為藍本，灰瓦紅牆、亭台樓閣，展現中國古典美學。',
              '東西匯聚：融合歐陸建築與東方元素，街道兩旁餐廳、商店林立，適合漫步。',
              '勵駿碼頭：仿照歐洲碼頭設計，停泊多艘仿古帆船，夜晚景色浪漫。'
            ],
            style: LIST_STYLE
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '美食與購物推薦',
        titleLevel: 2,
        id: 'food-shopping',
        content: [
          {
            type: 'heading',
            level: 3,
            content: '美食選擇多元：',
            id: 'food-options',
            style: { marginTop: '20px', marginBottom: '15px', fontSize: '1.1rem' }
          },
          {
            type: 'list',
            items: [
              '中式餐廳：提供經典粵菜、點心。',
              '葡國菜餐廳：可品嚐澳門特色的葡式焗雞、馬介休。',
              '國際美食：義大利披薩、日本料理、東南亞風味應有盡有。',
              '小吃與甜品：街邊小攤販售豬扒包、木糠布丁等在地小食。'
            ],
            style: LIST_STYLE
          },
          {
            type: 'heading',
            level: 3,
            content: '購物體驗：',
            id: 'shopping-experience',
            style: { marginTop: '20px', marginBottom: '15px', fontSize: '1.1rem' }
          },
          {
            type: 'list',
            items: [
              '特色手信店：可購買杏仁餅、花生糖等澳門伴手禮。',
              '文創商品：不少小店販售澳門主題紀念品、設計師商品。',
              '歐美品牌：部分商店引進國際品牌，滿足購物需求。'
            ],
            style: LIST_STYLE
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '娛樂活動與住宿',
        titleLevel: 2,
        id: 'entertainment-accommodation',
        content: [
          {
            type: 'heading',
            level: 3,
            content: '娛樂設施：',
            id: 'entertainment-facilities',
            style: { marginTop: '20px', marginBottom: '15px', fontSize: '1.1rem' }
          },
          {
            type: 'list',
            items: [
              '巴比倫娛樂場：提供博彩娛樂（僅限成年旅客）。',
              '音樂表演與展覽：節日期間常有街頭表演、藝術展。',
              '親子活動：火山建築內的遊戲區適合兒童遊玩。'
            ],
            style: LIST_STYLE
          },
          {
            type: 'heading',
            level: 3,
            content: '住宿推薦：',
            id: 'accommodation-recommendations',
            style: { marginTop: '20px', marginBottom: '15px', fontSize: '1.1rem' }
          },
          {
            type: 'text',
            content: '漁人碼頭內設有萊斯酒店與勵宮酒店，兩者均以歐式風格設計，海景房可眺望珠江口岸，適合追求浪漫與舒適的旅客。',
            style: {
              marginBottom: '20px',
              fontSize: '1.1rem',
            }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '實用資訊',
        titleLevel: 2,
        id: 'practical-info',
        content: [
          {
            type: 'list',
            items: [
              '地址：澳門新口岸友誼大馬路及孫逸仙大馬路交界',
              '開放時間：24小時開放（各商店與餐廳營業時間不同）',
              '門票：免費入場（部分娛樂設施另行收費）',
              '交通方式：免費接駁巴士：往返澳門外港碼頭、關閘、澳門國際機場等地；公共巴士：多條路線經過「漁人碼頭」站；的士：從澳門半島市中心前往約10-15分鐘'
            ],
            style: LIST_STYLE
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '遊玩小建議',
        titleLevel: 2,
        id: 'travel-tips',
        content: [
          {
            type: 'list',
            ordered: true,
            items: [
              '最佳時間：建議下午至傍晚到訪，可同時欣賞日景與夜景。',
              '拍照建議：古羅馬表演場、勵駿碼頭燈光夜景最出片。',
              '節慶活動：農曆新年、聖誕節期間常有特色佈置與活動。',
              '聯遊推薦：可結合附近的金沙娛樂場、澳門科學館規劃一日行程。'
            ],
            style: LIST_STYLE
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '結語',
        titleLevel: 2,
        id: 'conclusion',
        content: [
          {
            type: 'text',
            content: '澳門漁人碼頭不僅是娛樂勝地，更是見證澳門中西文化交融的縮影。無論你是想感受歷史建築的震撼、品嚐多元美食，還是單純想找一個輕鬆散步的景點，這裡都能滿足你的期待。下次來澳門，不妨將漁人碼頭列入行程，親身探索這個充滿魅力的海濱地標，當然，也能讓我們龍匯天下替您安排，讓您不僅能開心出遊平安回家，更能從澳門帶走一段回味無窮的旅遊經驗！',
            style: {
              marginBottom: '20px',
              fontSize: '1.1rem',
            }
          }
        ],
        style: SECTION_STYLE
      }
    ]
  },
  2: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '澳門作為融合中西文化的特別行政區，2025年持續推出新景點與服務升級。台灣旅客最關心的重點更新：',
        style: { 
          marginBottom: '20px',
          fontSize: '1.125rem'
        }
      },
      {
        type: 'text',
        content: '簽證新制：台灣旅客持有效期6個月以上護照可免簽停留30天，入境改採「電子通關+人臉辨識」，通關更快速',
        style: { 
          marginTop: '30px',
          marginBottom: '20px',
          fontSize: '1.125rem'
        }
      },
      {
        type: 'text',
        content: '交通升級：',
        style: { 
          marginTop: '30px',
          marginBottom: '20px',
          fontSize: '1.125rem'
        }
      },
      {
        type: 'list',
        items: [
          '輕軌氹仔線延伸至媽閣站，串聯澳門半島與離島',
          '新增「澳門出行」APP整合叫車、公車與輕軌資訊'
        ],
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
        content: '支付便利：',
        style: { 
          marginTop: '30px',
          marginBottom: '20px',
          fontSize: '1.125rem'
        }
      },
      {
        type: 'list',
        items: [
          '全澳電子支付覆蓋率達95%，連路邊攤都可用台灣行動支付'
        ],
        style: { marginBottom: '20px', fontSize: '1.125rem' }
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
      style: TABLE_OF_CONTENTS_STYLE
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
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'heading',
            level: 3,
            content: '【全新開幕】',
            id: 'new-openings',
            style: { marginTop: '0', marginBottom: '15px' }
          },
          {
            type: 'text',
            content: '澳門太空館（路環）：',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1.125rem' }
          },
          {
            type: 'list',
            items: [
              '亞洲首個以航天科技為主題的沉浸式體驗館',
              '特色設施：4D太空漫遊、月球表面模擬區'
            ],
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem',
              fontFamily: 'inherit',
              lineHeight: '1.6'
            }
          },
          {
            type: 'text',
            content: '銀河綜合度假城三期：',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1.125rem' }
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
              fontSize: '1.125rem',
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
            type: 'text',
            content: '大三巴牌坊新增「AR導覽眼鏡」租借服務',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '威尼斯人購物中心引進50+新品牌，包括台灣人愛的日本藥妝店',
            style: { marginTop: '10px', marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '美食新發現',
        titleLevel: 2,
        id: 'food',
        image: {
          src: '/travel/macau-all/hamburger-494706.jpg',
          alt: '澳門美食',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '葡國菜創新版：',
            style: { marginTop: '0', marginBottom: '10px', fontSize: '1.125rem' }
          },
          {
            type: 'list',
            items: [
              '「澳葡 fusion」新派料理（推薦：葡式蚵仔煎、澳門塔下午茶）'
            ],
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '🍴夜市新選擇：',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1.125rem' }
          },
          {
            type: 'list',
            items: [
              '「澳門之夜」美食市集（每晚6-12點）',
              '必吃：龍蝦包、榴槤葡撻、AI調酒'
            ],
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '住宿推薦',
        titleLevel: 2,
        id: 'accommodation',
        image: {
          src: '/travel/macau-all/macau-1901264_1920.jpg',
          alt: '澳門酒店',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'heading',
            level: 3,
            content: '新開幕酒店',
            id: 'new-hotels',
            style: { marginTop: '0', marginBottom: '15px' }
          },
          {
            type: 'text',
            content: '澳門四季名薈（2025/3開幕）：',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1.125rem' }
          },
          {
            type: 'list',
            items: [
              '全套房設計，',
              '特色：私人管家服務、24小時米其林客房送餐'
            ],
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: 'W澳門（2025下半年）：',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1.125rem' }
          },
          {
            type: 'list',
            items: [
              '潮牌酒店首度進駐澳門',
              '無邊際泳池直望港珠澳大橋'
            ],
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'heading',
            level: 3,
            content: '性價比之選',
            id: 'value-hotels',
            style: { marginTop: '30px', marginBottom: '15px' }
          },
          {
            type: 'text',
            content: '「澳門人酒店」（近大三巴）',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '「金光度假公寓」(家庭房超值）',
            style: { marginTop: '10px', marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '最佳旅遊季：',
            style: { marginTop: '30px', marginBottom: '10px', fontSize: '1.125rem' }
          },
          {
            type: 'list',
            items: [
              '推薦10-12月（避開暑期人潮，天氣涼爽）',
              '春節期間房價漲3倍，建議避開'
            ],
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '省錢秘訣：',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1.125rem' }
          },
          {
            type: 'list',
            items: [
              '週二～週四住房最便宜',
              '善用酒店「住客專屬優惠券」'
            ],
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '網路建議：',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1.125rem' }
          },
          {
            type: 'list',
            items: [
              '機場可租「5G隨身WiFi」NT$150/天',
              '全澳免費WiFi熱點增加至500+處'
            ],
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '澳門2025年持續進化，既有文化底蘊又不斷創新，無論第幾次造訪都能發現新驚喜！立即追蹤',
            style: { marginTop: '30px', marginBottom: '0', fontSize: '1.125rem' }
          },
          {
            type: 'link',
            href: 'https://www.instagram.com/lhts.8899/',
            text: '龍匯天下官方IG',
            style: {
              color: '#3b82f6',
              textDecoration: 'underline'
            }
          },
          {
            type: 'text',
            content: '或點擊下方連結加入官方賴安排你的澳門之旅吧～ ',
            style: { marginTop: '0', marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      }
    ]
  },
  3: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '如果你只有一天時間在澳門停留，該怎麼玩才能值回票價？這就是 澳門一日遊 的魅力所在。這座小城融合了中西文化，既有古老的歷史建築，又有國際級的娛樂度假村，只要行程安排得宜，即使僅有 24 小時，也能從清晨到深夜都充實難忘。',
        style: { 
          marginBottom: '20px',
          fontSize: '1.125rem'
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
      style: TABLE_OF_CONTENTS_STYLE
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
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '澳門的舊城區是 澳門一日遊 的最佳起點。早餐後，可以先到 議事亭前地，感受葡式石板路與周邊建築的古典氛圍。接著前往澳門的象徵——大三巴牌坊，這裡曾是聖保祿教堂的一部分，現在是世界文化遺產，也是遊客必拍的打卡地點。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '沿著大三巴往上走，就能到達 大炮台與澳門博物館，了解澳門的海上貿易歷史與中葡文化交流。如果時間充裕，不妨散步到 媽閣廟，這座建於明代的古廟，是「澳門」名字的由來，充滿歷史韻味。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '中午：街頭美食體驗',
        titleLevel: 2,
        id: 'noon-food',
        image: {
          src: '/travel/macao-onedaypass/new-york-3659946.jpg',
          alt: '中午：街頭美食體驗',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '澳門一日遊 的午餐，絕不能錯過道地美食。前往氹仔的 官也街，你會發現這裡是美食天堂：葡式蛋撻、豬扒包、水蟹粥、葡國雞，甚至是牛雜、杏仁餅等小吃都能一次收集。帶著孩子的家庭，也能在這裡輕鬆找到適合的餐廳，讓大人小孩都能享受美食。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '下午：娛樂與親子樂園',
        titleLevel: 2,
        id: 'afternoon-entertainment',
        image: {
          src: '/travel/macao-onedaypass/f27d1fcbc2071d4cfdf3f71b0437f852adb44564.jpg',
          alt: '下午：娛樂與親子樂園',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '來到氹仔與路氹金光大道，另一個截然不同的澳門展現在眼前。這裡雲集世界知名度假村和娛樂設施，是 澳門一日遊 中最繽紛的一環。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'list',
            items: [
              '想要刺激？可以去 澳門旅遊塔，挑戰高空漫步或笨豬跳，飽覽全景。',
              '想要親子同樂？那麼 新濠影滙水上樂園 是首選，室內外雙區設計，即使下雨也能暢快玩水。',
              '如果想購物休閒，則可以到 威尼斯人購物中心，仿威尼斯的運河與貢多拉船，讓人恍如置身歐洲。'
            ],
            style: LIST_STYLE
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '晚上：夜色下的澳門',
        titleLevel: 2,
        id: 'evening-night',
        image: {
          src: '/travel/macao-onedaypass/澳門巴黎人酒店巴黎鐵塔門票.jpg',
          alt: '晚上：夜色下的澳門',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '傍晚時分，建議到 巴黎人艾菲爾鐵塔 欣賞夜景。塔頂的觀景台能夠將澳門的繁華盡收眼底，晚上還有燈光秀，非常浪漫。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '結束後可以前往 銀河酒店的鑽石大堂，觀賞音樂水舞表演，免費又精彩。若還有精力，不妨在度假區內找間餐廳，享用葡式晚餐，為這趟 澳門一日遊 劃下完美句點。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
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
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'list',
            items: [
              '步行：舊城區多為世界遺產景點，步行即可完成。',
              '輕軌：氹仔與路氹一帶可搭輕軌接駁。',
              '包車服務：若想在一天內跑遍多個景點，建議可以選擇我們龍匯澳門包車，節省時間更輕鬆。'
            ],
            style: LIST_STYLE
          }
        ],
        style: SECTION_STYLE
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
            style: LIST_STYLE
          }
        ],
        style: SECTION_STYLE
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
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      }
    ]
  },
  4: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '想帶著孩子來一趟輕鬆又充滿驚喜的旅程嗎？近年來，澳門親子自由行 成為許多家庭旅遊的熱門選擇。不同於單純的觀光購物，澳門除了世界遺產與美食文化，更有許多適合親子同樂的景點與活動，無論是寓教於樂的體驗，還是盡情放鬆的休閒空間，都能讓爸媽與小孩留下難忘回憶。',
        style: { 
          marginBottom: '20px',
          fontSize: '1.125rem'
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
      style: TABLE_OF_CONTENTS_STYLE
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
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'list',
            items: [
              '交通便利：澳門不大，主要景點之間距離近，可以找龍匯天下包車非常方便。',
              '親子友善：許多飯店、樂園和博物館都設有兒童設施與親子活動。',
              '中西文化融合：在遊玩同時，孩子可以感受中葡文化交織的氛圍，寓教於樂。'
            ],
            ordered: true,
            style: LIST_STYLE
          },
          {
            type: 'text',
            content: '因此，澳門親子自由行能兼顧玩樂與學習，適合週末或短假期安排。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '澳門親子自由行必去景點',
        titleLevel: 2,
        id: 'must-visit',
        image: {
          src: '/travel/macao-parent-child/singapore-2556630_1920.jpg',
          alt: '澳門親子自由行必去景點',
          width: 300,
          height: 200
        },
        description: '',
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
            style: { marginBottom: '20px', fontSize: '1.125rem' }
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
            style: { marginBottom: '20px', fontSize: '1.125rem' }
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
            style: { marginBottom: '20px', fontSize: '1.125rem' }
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
            style: { marginBottom: '20px', fontSize: '1.125rem' }
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
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
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
            style: LIST_STYLE
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '澳門親子自由行住宿推薦',
        titleLevel: 2,
        id: 'accommodation',
        image: {
          src: '/travel/macao-parent-child/hotel-1749602_1920.jpg',
          alt: '澳門親子自由行住宿推薦',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '選擇住宿是親子旅行的關鍵。若預算充足，可選擇 新濠影滙酒店、銀河酒店，設施豐富且有專屬兒童天地。若偏向經濟型旅遊，可考慮氹仔或澳門本島的親子友善民宿，如果想知道有什麼優惠又不錯的飯店，可以在龍匯天下Line了解更多喔！',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
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
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
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
            style: LIST_STYLE
          }
        ],
        style: SECTION_STYLE
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
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      }
    ]
  },
  5: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '澳門被譽為「東方拉斯維加斯」，同時擁有中葡文化交融的獨特魅力。想要輕鬆規劃行程、節省交通時間、深入體驗澳門的美食與文化，選擇 澳門旅遊團 絕對是最聰明的方式。透過 澳門旅遊團，不僅能享受專業導遊的講解，更能輕鬆走訪必去的世界文化遺產、人氣娛樂場與隱藏版美食，讓旅程充滿驚喜。',
        style: { 
          marginBottom: '20px',
          fontSize: '1.125rem'
        }
      }
    ],
    // Table of Contents
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '為什麼選擇澳門旅遊團？', id: 'why-choose' },
        { level: 1, text: '澳門旅遊團熱門路線推薦', id: 'popular-routes' },
        { level: 1, text: '澳門旅遊團的特色', id: 'features' },
        { level: 1, text: '適合哪些人參加澳門旅遊團？', id: 'who-should-join' },
        { level: 1, text: '如何選擇適合的澳門旅遊團？', id: 'how-to-choose' },
        { level: 1, text: '結語', id: 'conclusion' }
      ],
      style: TABLE_OF_CONTENTS_STYLE
    },
    // Array of sections
    sections: [
      {
        type: 'section',
        title: '為什麼選擇澳門旅遊團？',
        titleLevel: 2,
        id: 'why-choose',
        image: {
          src: '/travel/macao-travelgroup1/macau-3766162_1920.jpg',
          alt: '為什麼選擇澳門旅遊團？',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '選擇 澳門旅遊團 的最大好處，就是可以省去自行安排行程的麻煩。無論是兩天一夜還是三天兩夜，澳門旅遊團 都能根據需求規劃完整路線，涵蓋景點、餐食、交通，甚至住宿。許多首次到訪的旅客往往不知道該如何取捨景點，而專業的 澳門旅遊團 則會幫你安排最精華的行程，避免浪費寶貴時間。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '澳門旅遊團熱門路線推薦',
        titleLevel: 2,
        id: 'popular-routes',
        image: {
          src: '/travel/macao-travelgroup1/macao-4769471_1920.jpg',
          alt: '澳門旅遊團熱門路線推薦',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'list',
            items: [
              '文化古蹟深度遊：澳門擁有多達八項世界文化遺產，例如大三巴牌坊、媽閣廟、東望洋炮台等。參加 澳門旅遊團，能由專業導遊講解背後的歷史故事，體會葡式建築與中國文化的結合。',
              '美食探索之旅：澳門被譽為「美食之都」，從葡撻、馬介休球到水蟹粥，每一道都是饕客必吃。許多 澳門旅遊團 會特別安排特色餐廳，帶領團員品嚐在地料理。',
              '娛樂購物體驗遊：澳門的娛樂場聞名世界，同時也有許多大型購物中心。透過 澳門旅遊團，不僅能體驗國際級的娛樂氛圍，也能享受購物優惠與貼心接送服務。'
            ],
            ordered: true,
            style: LIST_STYLE
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '澳門旅遊團的特色',
        titleLevel: 2,
        id: 'features',
        image: {
          src: '/travel/macao-travelgroup1/china-5131521_1920.jpg',
          alt: '澳門旅遊團的特色',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'list',
            items: [
              '專業導遊帶領：深入了解景點歷史與文化背景。',
              '交通無憂：專車接送，避免自行找路的困擾。',
              '彈性行程：可選擇自由行搭配部分 澳門旅遊團，享受兩全其美的旅行方式。',
              '價格透明：不同預算都有適合的 澳門旅遊團，無需擔心隱藏收費。'
            ],
            style: LIST_STYLE
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '適合哪些人參加澳門旅遊團？',
        titleLevel: 2,
        id: 'who-should-join',
        description: '了解哪些類型的旅客最適合參加澳門旅遊團',
        content: [
          {
            type: 'list',
            items: [
              '第一次到澳門的遊客：透過 澳門旅遊團 能快速掌握必去景點。',
              '長輩或親子旅客：行程規劃完善，交通方便又省心。',
              '時間有限的上班族：短時間內體驗澳門精華，效率最高。',
              '美食與文化愛好者：跟著 澳門旅遊團 深入品味在地風情。'
            ],
            style: LIST_STYLE
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '如何選擇適合的澳門旅遊團？',
        titleLevel: 2,
        id: 'how-to-choose',
        description: '挑選澳門旅遊團時需要注意的事項',
        content: [
          {
            type: 'text',
            content: '在挑選 澳門旅遊團 時，建議注意以下幾點：',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'list',
            items: [
              '行程內容：是否包含你最想去的景點與餐廳。',
              '團費透明度：避免隱藏消費，選擇口碑良好的旅行社。',
              '導遊專業度：好的導遊能讓整個旅程更加豐富。',
              '評價與口碑：參考其他旅客對該 澳門旅遊團 的評價。'
            ],
            ordered: true,
            style: LIST_STYLE
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '結語',
        titleLevel: 2,
        id: 'conclusion',
        description: '澳門旅遊團能滿足不同需求，讓旅程更輕鬆精彩',
        content: [
          {
            type: 'text',
            content: '無論你是想體驗世界遺產的文化深度、美食的無窮魅力，還是娛樂購物的奢華享受，澳門旅遊團 都能滿足不同需求。與其自己花時間研究路線，不如交給專業的 龍匯天下，讓旅程更輕鬆、更精彩。下次規劃假期時，不妨選擇一個口碑良好的 澳門旅遊團，帶你探索這座中西交融、充滿驚喜的城市，點擊下方LINE連結了解更多喔。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      }
    ]
  },
  6: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '澳門，這座融合中葡文化的小城，不僅以華麗的賭場和歷史建築聞名，更是許多公司、學校或親友出遊的首選地點。若您正規劃一次難忘的澳門團體旅遊，那麼這篇文章將帶您深入了解行程安排、必訪景點、美食推薦與注意事項，讓整趟旅程順利又精彩。',
        style: { 
          marginBottom: '20px',
          fontSize: '1.125rem'
        }
      }
    ],
    // Table of Contents
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '為什麼選擇澳門團體旅遊？', id: 'why-choose' },
        { level: 1, text: '澳門團體旅遊行程建議', id: 'itinerary' },
        { level: 1, text: '澳門團體旅遊的美食亮點', id: 'food-highlights' },
        { level: 1, text: '如何安排理想的澳門團體旅遊？', id: 'how-to-plan' },
        { level: 1, text: '結語', id: 'conclusion' }
      ],
      style: TABLE_OF_CONTENTS_STYLE
    },
    // Array of sections
    sections: [
      {
        type: 'section',
        title: '為什麼選擇澳門團體旅遊？',
        titleLevel: 2,
        id: 'why-choose',
        image: {
          src: '/travel/grouptravel/macao-958786_1920.jpg',
          alt: '為什麼選擇澳門團體旅遊？',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '選擇澳門團體旅遊，有幾個明顯的好處。首先，澳門地小景點集中，不需耗費太多交通時間，適合一天或兩天的快閃行程。其次，澳門旅遊資源豐富，無論是歷史文化、現代娛樂、美食體驗或購物血拼，都能滿足不同年齡層的需求。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '團體旅遊可以安排專車接送，免除交通煩惱，也能統一住宿與用餐安排，大幅提升效率與舒適度。更重要的是，參與澳門團體旅遊通常能享有團體優惠價，CP值超高！',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '澳門團體旅遊行程建議',
        titleLevel: 2,
        id: 'itinerary',
        image: {
          src: '/travel/grouptravel/macao-4769469_1920.jpg',
          alt: '澳門團體旅遊行程建議',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'heading',
            level: 3,
            content: '第一天：文化探索與城市風情',
            style: { marginTop: '0', marginBottom: '15px' }
          },
          {
            type: 'list',
            items: [
              '大三巴牌坊：澳門最具代表性的世界文化遺產，團體旅遊的打卡熱點。',
              '議事亭前地：葡式建築群圍繞的廣場，是了解澳門歷史的起點。',
              '媽閣廟：香火鼎盛的古廟，見證澳門的命名來源。'
            ],
            ordered: true,
            style: LIST_STYLE
          },
          {
            type: 'heading',
            level: 3,
            content: '第二天：娛樂與購物享樂',
            style: { marginTop: '20px', marginBottom: '15px' }
          },
          {
            type: 'list',
            items: [
              '威尼斯人度假村：內有仿威尼斯水鄉、室內運河與大型購物中心，是澳門團體旅遊的必去之地。',
              '巴黎人鐵塔：登上塔頂俯瞰澳門風光，浪漫與現代感兼具。',
              '官也街：購買伴手禮、享用地道澳門美食如葡式蛋撻、豬扒包。'
            ],
            ordered: true,
            style: LIST_STYLE
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '澳門團體旅遊的美食亮點',
        titleLevel: 2,
        id: 'food-highlights',
        image: {
          src: '/travel/grouptravel/istockphoto-1148465742-1024x1024.jpg',
          alt: '澳門團體旅遊的美食亮點',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '無論您是美食控或普通吃貨，澳門的多元美食絕對讓人驚艷。推薦幾道不可錯過的經典：',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'list',
            items: [
              '葡式蛋撻：酥脆外皮配上滑嫩蛋餡，許多團體行程都會安排試吃。',
              '葡國雞：結合咖哩與椰奶風味，獨特又下飯。',
              '馬介休球：以葡萄牙進口鹹魚製成，外酥內軟。'
            ],
            style: LIST_STYLE
          },
          {
            type: 'text',
            content: '團體旅遊更可以安排在地餐廳體驗桌菜或特色套餐，節省等待時間，也更方便統一用餐。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '如何安排理想的澳門團體旅遊？',
        titleLevel: 2,
        id: 'how-to-plan',
        description: '讓澳門團體旅遊順利且難忘的建議',
        content: [
          {
            type: 'text',
            content: '要讓澳門團體旅遊順利且難忘，建議找有經驗的旅行社或導遊協助規劃。以下是幾個重點：',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'list',
            items: [
              '提早規劃行程與報名：尤其旺季時，飯店與景點容易客滿。',
              '依團體人數安排交通與住宿：可選擇旅遊巴或分組入住，效率高又安全。',
              '選擇有口碑的餐廳與景點：避免踩雷，讓團員都能有好回憶。'
            ],
            style: LIST_STYLE
          },
          {
            type: 'text',
            content: '此外，也可依團體需求客製化行程，例如企業員工旅遊可安排團建活動，學生旅遊則可加入文化教育元素，靈活彈性。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '結語',
        titleLevel: 2,
        id: 'conclusion',
        description: '澳門團體旅遊能讓人留下美好回憶',
        content: [
          {
            type: 'text',
            content: '澳門是一個能同時滿足觀光、美食、文化與娛樂需求的城市，不論是朋友聚會、公司旅遊還是學校出遊，選擇澳門團體旅遊都能讓人留下美好回憶。掌握以上行程安排與注意事項，搭配專業旅行團隊，您的澳門之旅將充滿驚喜與感動。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '若您還在猶豫該去哪裡，不妨現在就開始規劃一趟專屬的澳門團體旅遊行程吧，可以點擊下面LIine連結聯絡我們，可以幫您搞定交通與住宿喔~',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      }
    ]
  },
  7: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '澳門大三巴牌坊是這座城市的靈魂地標，更是聯合國世界文化遺產的核心區域。無論是初次造訪或重返探索，2025年的澳門大三巴將以更完善的設施與豐富體驗迎接旅客。小編整理了最新參觀資訊、周邊玩法與在地美食，帶你深度感受這座地標的魅力。',
        style: { 
          marginBottom: '20px',
          fontSize: '1.125rem'
        }
      }
    ],
    // Table of Contents
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '【大三巴牌坊】是什麼？揭開澳門歷史的標誌性建築', id: 'what-is-ruins' },
        { level: 1, text: '【大三巴牌坊】周邊必訪景點：2025最新推薦路線', id: 'nearby-attractions' },
        { level: 1, text: '【大三巴牌坊】附近吃什麼？在地人認證的5大美食', id: 'nearby-food' },
        { level: 1, text: '【大三巴牌坊】交通攻略：節省時間的抵達方式', id: 'transportation' },
        { level: 1, text: '【大三巴牌坊】深度體驗：2025年不可錯過的3大活動', id: 'deep-experience' }
      ],
      style: TABLE_OF_CONTENTS_STYLE
    },
    // Array of sections
    sections: [
      {
        type: 'section',
        title: '【大三巴牌坊】是什麼？揭開澳門歷史的標誌性建築',
        titleLevel: 2,
        id: 'what-is-ruins',
        image: {
          src: '/travel/macao-dasanba/20220315185411-公教新闻0315-2.jpg',
          alt: '【大三巴牌坊】是什麼？揭開澳門歷史的標誌性建築',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '大三巴牌坊原名「聖保祿大教堂遺址」，建於17世紀初，曾是遠東最大的天主教教堂，歷經火災後僅存壯觀的前壁石雕。2025年，遺址旁增設的「沉浸式歷史展廳」將透過AR技術重現教堂原貌，讓遊客直觀感受其輝煌歷史。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '建築特色：牌坊融合歐洲文藝復興與東方雕刻藝術，頂端的十字架、聖母雕像與象徵中國的牡丹浮雕，見證了中西文化交融。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '參觀須知：全年免費開放，建議避開中午烈日，清晨或傍晚的光線最適合拍照。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【大三巴牌坊】周邊必訪景點：2025最新推薦路線',
        titleLevel: 2,
        id: 'nearby-attractions',
        image: {
          src: '/travel/macao-dasanba/0_20250626165147_2802.jpg',
          alt: '【大三巴牌坊】周邊必訪景點：2025最新推薦路線',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '從大三巴牌坊出發，步行10分鐘內可抵達多個文化景點與打卡熱點：',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '1.澳門博物館（位於大炮台山頂）：2025年新增「海上絲路貿易文物特展」，展示葡萄牙航海時代的珍貴文物。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '2.戀愛巷：粉彩色建築與文創小店林立，巷尾新開的「光影藝術牆」結合互動投影，夜間更顯浪漫。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '3.哪吒廟：隱身於牌坊右側的中式廟宇，2025年推出中葡文化對照導覽，深入解讀澳門宗教融合。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '建議路線：大三巴→哪吒廟→澳門博物館→戀愛巷，全程約2小時可輕鬆走完。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【大三巴牌坊】附近吃什麼？在地人認證的5大美食',
        titleLevel: 2,
        id: 'nearby-food',
        image: {
          src: '/travel/macao-dasanba/DSC09866.jpg',
          alt: '【大三巴牌坊】附近吃什麼？在地人認證的5大美食',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '周邊隱藏多間經營數十年的老字號與2025年新開業的人氣餐廳：',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '葡國菜首選：福隆新街的「番茄屋」主打改良版葡式料理，馬介休球和葡式燴雞必點。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '街頭小吃：議事亭前地的「檸檬王」老攤販，2025年推出限定款陳皮冰淇淋，酸甜消暑。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '新開業推薦：大三巴腳下的「匠．茶記」以澳門奶茶搭配現烤豬扒包，開放式廚房可觀看製作過程。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '貼心提醒：避開週末用餐高峰，多數店家支持電子支付，部分老店仍只收現金。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【大三巴牌坊】交通攻略：節省時間的抵達方式',
        titleLevel: 2,
        id: 'transportation',
        image: {
          src: '/travel/macao-dasanba/DSC05508.jpg.jpg',
          alt: '【大三巴牌坊】交通攻略：節省時間的抵達方式',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '澳門輕軌東線預計今年全線通車，新增的「聖保祿站」步行至大三巴僅需8分鐘，比過去節省一半時間。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '其他方式包括：',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '免費接駁車：各大酒店提供往返大三巴的接駁專車，最新班次可於酒店官網查詢。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '步行建議：從議事亭前地沿著碎石路漫步而上，沿途經過特色小店，適合喜歡慢遊的旅客。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '避人潮秘訣：週一至週五上午9點前人潮較少，週末可選擇晚間參觀（牌坊夜間打燈至22:00）。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【大三巴牌坊】深度體驗：2025年不可錯過的3大活動',
        titleLevel: 2,
        id: 'deep-experience',
        image: {
          src: '/travel/macao-dasanba/ae5bb6f96d27c25171016f1135659563e5eddb62.jpg',
          alt: '【大三巴牌坊】深度體驗：2025年不可錯過的3大活動',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '除了靜態參觀，2025年還推出了更多互動體驗：',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'list',
            items: [
              '夜間燈光秀：每週五、六晚間20:00-21:00，牌坊上演以澳門歷史為主題的3D光影秀。',
              '文化工作坊：週末於遺址廣場舉辦葡式磁磚彩繪、中式茶藝體驗，需提前線上預約。',
              '季節限定活動：12月結合聖誕節的「中葡市集」，可品嘗到現做的木糠布甸與非洲雞。'
            ],
            ordered: true,
            style: LIST_STYLE
          },
          {
            type: 'text',
            content: '【大三巴牌坊】結語：行了！我們龍匯天下官方賴連結給你放下面啦，記得也去追蹤一下我們官方',
            style: { marginBottom: '5px', fontSize: '1.125rem' }
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
            content: '才不會錯過最新有關澳門旅遊的消息喔~',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      }
    ]
  },
  8: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '是不是很好奇【澳門百老匯】是個什麼樣的地方呀！從2015年開幕走到2025年的它可多了不少有意思的新玩意兒呢~跟著小編一起來重新認識【澳門百老匯】吧！',
        style: { 
          marginBottom: '20px',
          fontSize: '1.125rem'
        }
      }
    ],
    // Table of Contents
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '【澳門百老匯】建築硬體革命｜12億澳門元「夜市生態穹頂」', id: 'architecture-revolution' },
        { level: 1, text: '【澳門百老匯】米其林街頭戰場｜2025年「摘星平民化」計劃', id: 'michelin-street' },
        { level: 1, text: '【澳門百老匯】娛樂科技共生體｜阿里巴巴雲端技術實裝', id: 'entertainment-tech' },
        { level: 1, text: '【澳門百老匯】永續夜市實驗場｜2024 GSTC全球最高評級', id: 'sustainable-night-market' },
        { level: 1, text: '【澳門百老匯】深度玩家路線圖｜澳門理工學院人因工程研究', id: 'player-route-map' }
      ],
      style: TABLE_OF_CONTENTS_STYLE
    },
    // Array of sections
    sections: [
      {
        type: 'section',
        title: '【澳門百老匯】建築硬體革命｜12億澳門元「夜市生態穹頂」',
        titleLevel: 2,
        id: 'architecture-revolution',
        image: {
          src: '/travel/macao-hundred-old/1mi4j224x8ualaicy8FC9_W_640_0_R5_Q80.jpg',
          alt: '【澳門百老匯】建築硬體革命｜12億澳門元「夜市生態穹頂」',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '2025年完成第二期擴建工程，經Aedas建築事務所重新規劃：',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'list',
            items: [
              '全天候透明天幕：採用德國Covestro研發的ETFE膜材，UV透光率依氣象數據即時調節',
              '智能攤車系統：200+餐車配備美的集團IoT溫控技術，油溫誤差控制在±1.5℃',
              '聲學分區科技：Bose主動降噪柱劃分12個美食區，各區域噪音值維持55分貝以下'
            ],
            style: LIST_STYLE
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門百老匯】米其林街頭戰場｜2025年「摘星平民化」計劃',
        titleLevel: 2,
        id: 'michelin-street',
        image: {
          src: '/travel/macao-hundred-old/1mi6t224x8ualif7s5002_W_640_0_R5_Q80.jpg',
          alt: '【澳門百老匯】米其林街頭戰場｜2025年「摘星平民化」計劃',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '與《米其林指南》合作推出全球首個街市評鑑系統：',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'list',
            items: [
              'AI炭火監測儀：葡萄牙Nobre烤乳豬攤位安裝紅外線探頭，自動計算最佳美拉德反應值',
              '分子甜品推車：香港佳記甜品聯手法國Christophe Michalak打造低糖版雞蛋仔',
              '拉麵計量認證：日本丸龜製麵開發0.1mm精度的麵條直徑檢測器，誤差超標自動回饋10%餐費'
            ],
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門百老匯】娛樂科技共生體｜阿里巴巴雲端技術實裝',
        titleLevel: 2,
        id: 'entertainment-tech',
        description: '',
        content: [
          {
            type: 'text',
            content: '2025年導入阿里雲「街市元宇宙」：',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'list',
            items: [
              '全息大排檔：每晚20:00投影已故歌星梅艷芳虛擬人駐唱，支援觀眾點歌AI填詞',
              'AR尋寶遊戲：掃描指定攤位QR Code觸發限量版NFT菜譜碎片收集任務',
              '氣味直播間：美食博主可透過酒店特製直播箱，遠端傳送牛雜鍋的蒸氣分子至粉絲端'
            ],
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門百老匯】永續夜市實驗場｜2024 GSTC全球最高評級',
        titleLevel: 2,
        id: 'sustainable-night-market',
        image: {
          src: '/travel/macao-hundred-old/1mi3r224x8ualgz8r3779_W_640_0_R5_Q80.jpg',
          alt: '【澳門百老匯】永續夜市實驗場｜2024 GSTC全球最高評級',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '經SGS認證的環保數據指標：',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'list',
            items: [
              '油煙裂解系統：以色列Tempo公司靜電過濾技術，PM2.5去除率達99.3%',
              '廚餘發電擂台：每日19:00開放觀眾投餵殘食，每公斤可轉化0.7度電力供攤車使用',
              '循環餐具押金：租借環保餐盒需支付50MOP，歸還時自動計算碳足跡返還對應代幣'
            ],
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門百老匯】深度玩家路線圖｜澳門理工學院人因工程研究',
        titleLevel: 2,
        id: 'player-route-map',
        image: {
          src: '/travel/macao-hundred-old/1mi4p224x8ualh1iz6087_W_640_0_R5_Q80.jpg',
          alt: '【澳門百老匯】深度玩家路線圖｜澳門理工學院人因工程研究',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '2025年人氣公式：',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'list',
            items: [
              '1.快閃吃播路線：17:30在「梓記牛雜」領取智能腕帶，完成5家指定攤位挑戰可解鎖廚房後台參觀',
              '2.懷舊影迷專屬：預訂「澳門風雲主題房」可獲贈邵氏電影數位修復版24小時點播權',
              '3.親子科學任務：在「禮記雪糕」購買實驗室套餐附贈DNA提取工具組，可自製果味基因圖譜'
            ],
            ordered: true,
            style: { marginBottom: '20px', fontSize: '1.125rem', paddingLeft: '0' }
          },
          {
            type: 'text',
            content: '不錯吧~是不是很值得去走上一遭呢?想知道更多關於【澳門百老匯】可以點擊下方龍匯天下官方賴連結詢問，也記得追蹤一下我們龍匯天下官方',
            style: { marginBottom: '5px', fontSize: '1.125rem' }
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
            content: '才不會錯過澳門旅遊最新活動及消息喔！',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      }
    ]
  },
  9: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '澳門不只賭場與蛋塔！這座世界遺產小城藏著葡式浪漫、漁村風情與隱藏版打卡點。本篇嚴選【澳門景點】TOP 10清單，從經典地標到在地人才知的秘境，教你用最少時間玩最精華，直接幫你規劃好路線，手機存這篇就GO！',
        style: { 
          marginBottom: '20px',
          fontSize: '1.125rem'
        }
      }
    ],
    // Table of Contents
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '【澳門景點】大三巴牌坊｜歷史與網美照的完美結合', id: 'ruins-of-st-paul' },
        { level: 1, text: '【澳門景點】龍環葡韻｜薄荷綠別墅群的浪漫暴擊', id: 'taipa-houses' },
        { level: 1, text: '【澳門景點】路環漁村｜彩色小屋與安德魯餅店原爆點', id: 'coloane-village' },
        { level: 1, text: '【澳門景點】東望洋燈塔｜制高點全景＋隱藏砲台探險澳門半島最高點', id: 'guia-lighthouse' },
        { level: 1, text: '【澳門景點】崗頂前地｜一秒穿越歐洲的鵝卵石廣場', id: 'largo-santo-augusto' },
        { level: 1, text: '【澳門景點】美食地圖｜玩到哪吃到哪的掃街清單', id: 'food-map' },
        { level: 1, text: '【澳門景點】QA懶人包｜新手秒解3大痛點', id: 'qa' },
        { level: 1, text: '跟著玩就對了！免費領「澳門景點」電子地圖', id: 'conclusion' }
      ],
      style: TABLE_OF_CONTENTS_STYLE
    },
    // Array of sections
    sections: [
      {
        type: 'section',
        title: '【澳門景點】大三巴牌坊｜歷史與網美照的完美結合',
        titleLevel: 2,
        id: 'ruins-of-st-paul',
        image: {
          src: '/travel/macao-view/www.long-huei.com.har.jpg',
          alt: '【澳門景點】大三巴牌坊｜歷史與網美照的完美結合',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '澳門地標「大三巴牌坊」必訪！推薦早上8點抵達避開人潮，側面「戀愛巷」的粉橘牆面＋葡式建築，輕鬆拍出歐風大片。牌坊後方的天主教藝術博物館免費開放，深入感受400年中西交匯史。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '路線：關閘搭「3號公車」直達，或從議事亭前地步行10分鐘。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '小秘密：週三下午有免費粵語導覽，聽完才知道牌坊藏著「火災倖存密碼」！',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門景點】龍環葡韻｜薄荷綠別墅群的浪漫暴擊',
        titleLevel: 2,
        id: 'taipa-houses',
        image: {
          src: '/travel/macao-view/2_20250602202612_9953.jpg',
          alt: '【澳門景點】龍環葡韻｜薄荷綠別墅群的浪漫暴擊',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '氹仔「龍環葡韻」五棟薄荷綠葡式建築，被譽為澳門最美婚紗照聖地！週末市集能淘手作飾品，對面濕地黃昏時常有白鷺飛掠，拍動態景超夢幻。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '路線：搭乘「11、15、22號公車」至「氹仔官也街站」，步行5分鐘即達。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '私房點：住宅博物館後方小徑的「嘉模聖母堂眺望台」，能一次收錄教堂＋濕地＋夕陽！',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門景點】路環漁村｜彩色小屋與安德魯餅店原爆點',
        titleLevel: 2,
        id: 'coloane-village',
        image: {
          src: '/travel/macao-view/ULvjiuB.jpeg',
          alt: '【澳門景點】路環漁村｜彩色小屋與安德魯餅店原爆點',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '路環的靜謐漁村氛圍，與本島喧囂成反差！必拍「十月初五馬路」的濱海長廊、明黃色聖方濟各教堂，再衝「安德魯餅店總店」吃熱騰葡撻（不用排隊！）。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '路線：從澳門半島搭「21A、25號公車」約40分鐘，建議搭配黑沙海灘行程。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '吃貨技：安德魯對面「橋記咖啡」的辣魚通粉，是澳門學生的共同回憶！',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門景點】東望洋燈塔｜制高點全景＋隱藏砲台探險澳門半島最高點',
        titleLevel: 2,
        id: 'guia-lighthouse',
        image: {
          src: '/travel/macao-view/下載_20250602202837_559.jpg',
          alt: '【澳門景點】東望洋燈塔｜制高點全景＋隱藏砲台探險澳門半島最高點',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '「東望洋燈塔」，360度俯瞰新舊城區與港珠澳大橋！沿山徑探索17世紀砲台遺跡，幸運的話能遇到駐守人員講古。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '路線：搭「2、6、12、28C號公車」至「得勝斜巷」，步行15分鐘上山。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '省力法：搭的士到「東望洋酒店」後方入口，省掉一半爬坡路！',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門景點】崗頂前地｜一秒穿越歐洲的鵝卵石廣場',
        titleLevel: 2,
        id: 'largo-santo-augusto',
        image: {
          src: '/travel/macao-view/01-1_20250602202929_8765.jpg',
          alt: '【澳門景點】崗頂前地｜一秒穿越歐洲的鵝卵石廣場',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '黑白波浪紋地面、嫩黃色聖奧斯定教堂、墨綠窗櫺的何東圖書館……崗頂前地根本是澳門版「小里斯本」！推薦下午4點後造訪，斜陽灑在葡式建築上光影絕美。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '路線：從議事亭前地步行8分鐘，順路探「聖老楞佐教堂」的巴洛克風彩繪玻璃。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '冷知識：廣場上的三盞煤氣路燈，是澳門最後的明火街燈！',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門景點】美食地圖｜玩到哪吃到哪的掃街清單',
        titleLevel: 2,
        id: 'food-map',
        description: '',
        content: [
          {
            type: 'text',
            content: '瑪嘉烈蛋塔：酥皮層次分明，週二下午出爐的最脆！',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'image',
            src: '/travel/macao-view/20240107182703_0.jpg',
            alt: '瑪嘉烈蛋塔',
            width: 300,
            height: 200,
            style: { marginBottom: '20px' }
          },
          {
            type: 'text',
            content: '榮記豆腐：冷熱皆有的豆花，搭配辣醬油「混搭吃法」在地人激推',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'image',
            src: '/travel/macao-view/b153dc94-c542-11ed-b77f-22f5c40d9082.jpg',
            alt: '榮記豆腐',
            width: 300,
            height: 200,
            style: { marginBottom: '20px' }
          },
          {
            type: 'text',
            content: '大利來記豬扒包：菠蘿包版本比傳統法包更涮嘴',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'image',
            src: '/travel/macao-view/d43561df-695a-4ff1-ac2a-91d7219cf9ca_i_image.jpg',
            alt: '大利來記豬扒包',
            width: 300,
            height: 200,
            style: { marginBottom: '20px' }
          },
          {
            type: 'text',
            content: '莫義記榴槤雪糕：貓山王果肉含量高達80%，榴槤控必跪',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'image',
            src: '/travel/macao-view/batch_0F4A9432.jpg',
            alt: '莫義記榴槤雪糕',
            width: 300,
            height: 200,
            style: { marginBottom: '20px' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門景點】QA懶人包｜新手秒解3大痛點',
        titleLevel: 2,
        id: 'qa',
        description: '',
        content: [
          {
            type: 'text',
            content: 'Q：一天能玩完主要【澳門景點】嗎？',
            style: { marginBottom: '10px', fontSize: '1.125rem', fontWeight: '600' }
          },
          {
            type: 'text',
            content: 'A：絕對可以！澳門面積僅32.9平方公里，搭公車＋步行就能輕鬆串聯，參考本文路線早上8點出發，晚上10點收工剛好。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: 'Q：自由行預算怎麼抓？',
            style: { marginBottom: '10px', fontSize: '1.125rem', fontWeight: '600' }
          },
          {
            type: 'text',
            content: 'A：交通（公車＋計程車）約$150MOP/天，門票多數免費，飲食$300MOP能吃遍地道小吃！',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: 'Q：語言不通怎麼辦？',
            style: { marginBottom: '10px', fontSize: '1.125rem', fontWeight: '600' }
          },
          {
            type: 'text',
            content: 'A：景點標示、公車到站皆有中文，店家大多能聽懂普通話，安心啦～',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '跟著玩就對了！免費領「澳門景點」電子地圖',
        titleLevel: 2,
        id: 'conclusion',
        description: '',
        content: [
          {
            type: 'text',
            content: '立即追蹤 龍匯天下官方',
            style: { marginBottom: '5px', fontSize: '1.125rem' }
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
            content: '另外也可點擊下方連結加入龍匯天下官方賴喔~',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      }
    ]
  },
  10: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '澳門，不只是賭場那麽簡單！這座融合中西文化的小城，有歷史、有風情，有美食、有藝術。對於時間不多但又想深入體驗澳門的人來說，一條合理的自由行路線，比什麽都重要。跟著這篇澳門自由行攻略，不走馬看花，也不踩雷，哪怕只有一天時間照樣玩得盡興！',
        style: { 
          marginBottom: '20px',
          fontSize: '1.125rem'
        }
      }
    ],
    // Table of Contents
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '【澳門自由行】怎麼能不去大三巴牌坊打卡呢', id: 'ruins-of-st-paul' },
        { level: 1, text: '【澳門自由行】那就不得不提到大炮台與澳門博物館', id: 'monte-fortress' },
        { level: 1, text: '【澳門自由行】下一站推薦您前往議事亭前地還有玫瑰堂體驗葡式風情的街頭漫步', id: 'senado-square' },
        { level: 1, text: '【澳門自由行】午餐時段肯定就是要來老城區品嘗本地小吃', id: 'lunch-local-food' },
        { level: 1, text: '【澳門自由行】下午必來澳門塔挑戰極限或俯瞰城市兩相宜', id: 'macau-tower' },
        { level: 1, text: '【澳門自由行】的傍晚帶您到氹仔舊城區感受小鎮步調', id: 'taipa-old-town' },
        { level: 1, text: '【澳門自由行】的夜晚就去海邊看燈光夜景為浪漫旅程畫一個完美的句點', id: 'night-seaside' },
        { level: 1, text: '【澳門自由行】那我只有一天怎麼夠?', id: 'one-day-enough' }
      ],
      style: TABLE_OF_CONTENTS_STYLE
    },
    // Array of sections
    sections: [
      {
        type: 'section',
        title: '【澳門自由行】怎麼能不去大三巴牌坊打卡呢',
        titleLevel: 2,
        id: 'ruins-of-st-paul',
        image: {
          src: '/travel/macao-free-go/MO_1298188909.jpg',
          alt: '【澳門自由行】怎麼能不去大三巴牌坊打卡呢',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '大三巴牌坊是澳門最有代表性的歷史遺跡，【澳門自由行】打卡必去~大三巴不僅是一堵城墻，更是葡式建築與中國文化的融合象征，站在台階前拍一張照片，是幾乎所有遊客來澳門的必修課。路線的話，早上從關閘或口岸入境後，步行或搭乘公交前往。這裡的亮點除了感受「東方小歐洲」的建築之美，也能在旁邊的天主教藝術博物館和遺址慢慢逛，沿路小吃也豐富，可別顧著逛忘了嘗幾口，那可就得不「嘗」失了！',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門自由行】那就不得不提到大炮台與澳門博物館',
        titleLevel: 2,
        id: 'monte-fortress',
        image: {
          src: '/travel/macao-free-go/0825-00480-007b2.jpg',
          alt: '【澳門自由行】那就不得不提到大炮台與澳門博物館',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '它可是澳門歷史與風景的完美結合，在這你可以俯瞰老城區全景，了解澳門的前世今生，相當值得一去！而這緊鄰大三巴的大炮台，是早期防禦體系的重要組成部分。站在高處，整個澳門城區盡收眼底，而博物館則完整講述了澳門從漁村到中西交匯之城的變遷。路線的話就是從大三巴步行5分鐘即可抵達。很快吧~替大家總結一下這一站的重點，看古炮與城墻，感受時代更替。然後去澳門博物館，它的內部布展精致，絕對值得慢慢看。同時這裡也是許多攝影愛好者拍攝城市天際線眾所周知的絕佳位置呢~',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門自由行】下一站推薦您前往議事亭前地還有玫瑰堂體驗葡式風情的街頭漫步',
        titleLevel: 2,
        id: 'senado-square',
        image: {
          src: '/travel/macao-free-go/AnyConv.com__images__3___1_.jpg',
          alt: '【澳門自由行】下一站推薦您前往議事亭前地還有玫瑰堂體驗葡式風情的街頭漫步',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '會推薦它的理由，首先鵝卵石地面加上彩色建築，既浪漫又有異國氣氛，而議事亭前地是澳門的心臟地帶，這裡的街道、建築和廣場，處處透著歐洲味道。走在其中，就像置身國外電影場景。路線的話也很簡單，從大炮台步行10分鐘就到了，光是這裡很好拍照這點，你的【澳門自由行】就沒有理由不來了對吧~這裡可是澳門最有氛圍的街區之一，可以逛街可以喝下午茶，玩累了就去玫瑰堂沉澱一下心情，小編私心相當推薦！',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門自由行】午餐時段肯定就是要來老城區品嘗本地小吃',
        titleLevel: 2,
        id: 'lunch-local-food',
        image: {
          src: '/travel/macao-free-go/20190518141432_13.jpg',
          alt: '【澳門自由行】午餐時段肯定就是要來老城區品嘗本地小吃',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '澳門是鼎鼎大名的「吃貨天堂」，融合了葡式、中式、東南亞風味。從葡式蛋塔到豬扒包，再到地道米粉和糖水，老城區沒走幾步就一家店，密度堪稱台灣的便利商店，琳瑯滿目的本地小吃隨便你挑。不過這邊建議還是要避開中午飯點的高峰，早點吃或稍晚些更舒適。然後街邊攤多，挑人多乾凈的店即可。不用擔心吃不慣 這裡總有你的愛~',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門自由行】下午必來澳門塔挑戰極限或俯瞰城市兩相宜',
        titleLevel: 2,
        id: 'macau-tower',
        image: {
          src: '/travel/macao-free-go/_Mobile_Macau_Tower.jpg',
          alt: '【澳門自由行】下午必來澳門塔挑戰極限或俯瞰城市兩相宜',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '除了是城市制高點可以看全景、拍夕陽還能體驗相當刺激的項目，澳門塔可不僅僅是觀景勝地，更有世界級的高空彈跳挑戰。如果你熱愛刺激，這裡切不能錯過。這裡路線就建議從老城區叫車，約15分鐘直達。不免俗地整理一下【澳門自由行】來到這裡的重點，360度無死角看澳門與珠海，還能體驗在玻璃地板行走，挑戰心理極限。另外啊，不跳也能上塔的，哪怕只拍照也很值得的。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門自由行】的傍晚帶您到氹仔舊城區感受小鎮步調',
        titleLevel: 2,
        id: 'taipa-old-town',
        image: {
          src: '/travel/macao-free-go/m1370086.jpg',
          alt: '【澳門自由行】的傍晚帶您到氹仔舊城區感受小鎮步調',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '這裡相較老城區，更寧靜，有歐洲村落的感覺。氹仔老街、龍環葡韻住宅式博物館等景點都集中於此，適合黃昏時分慢慢散步，感受不一樣的澳門。建議直接乘坐輕軌前往氹仔站，步行抵達。這裡亮點也不少，看落日映照老街，拍照極美。也能感受葡式民居風格，很像穿越時空，當然，可以邊走邊吃，感受地道生活氣息。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門自由行】的夜晚就去海邊看燈光夜景為浪漫旅程畫一個完美的句點',
        titleLevel: 2,
        id: 'night-seaside',
        image: {
          src: '/travel/macao-free-go/AnyConv.com__DSC07544-1.jpg.jpg',
          alt: '【澳門自由行】的夜晚就去海邊看燈光夜景為浪漫旅程畫一個完美的句點',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '夜幕下的澳門更加迷人，海風、燈火、心情剛剛好。可選擇前往澳門旅遊塔下或外港碼頭附近的海濱散步區，吹風拍夜景，【澳門自由行】一天的疲憊隨著風一掃而空。路線就建議從氹仔出發輕軌或叫車回市區即可。最後一站的亮點，除了拍攝對岸珠海燈火與澳門塔交相輝映，感受港口城市夜晚的獨特氛圍外，也給自己留一段安靜的回憶時光。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門自由行】那我只有一天怎麼夠?',
        titleLevel: 2,
        id: 'one-day-enough',
        description: '澳門區域小、交通方便，步行就可以覆蓋主要景點',
        content: [
          {
            type: 'text',
            content: '澳門區域小、交通方便，步行就可以覆蓋主要景點，配合地圖App是可以輕鬆規劃路線的。哪怕就一天，也是能玩得相當盡興的！千萬別有那種才一天絕對玩不到什麼，玩不過癮這種想法，真的，信我一把，有得你玩的！',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'heading',
            level: 3,
            content: '語言不通怎麼辦',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1rem' }
          },
          {
            type: 'text',
            content: '澳門居民多數會普通話，即使不會，也有圖示標牌可輔助，溝通基本無壓力。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'heading',
            level: 3,
            content: '怕人多怎麼辦',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1rem' }
          },
          {
            type: 'text',
            content: '盡量避開節假日高峰時段，選擇工作日出行，會輕鬆許多，熱門景點建議早點去打卡。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'heading',
            level: 3,
            content: '住宿安全嗎',
            style: { marginTop: '20px', marginBottom: '10px', fontSize: '1rem' }
          },
          {
            type: 'text',
            content: '市區酒店選擇多，正規酒店基本都有嚴格管理，提前查看用戶評價能規避大多數問題。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '想了解更多關於【澳門自由行】，歡迎點擊下方「龍匯天下」的官方賴連結，或是在',
            style: { marginBottom: '5px', fontSize: '1.125rem' }
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
            content: '上追蹤也可以',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      }
    ]
  },
  11: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '說到澳門旅遊，想必你心中肯定有很多問號，想去澳門但不知道去哪裡玩，澳門旅遊去哪裡cp值最高，最值回票價的美景在澳門的哪裡，你的疑問小編都聽到啦，於是特別替大家精挑細選並濃縮成懶人包，事不宜遲，快跟著小編一起來了解吧！',
        style: { 
          marginBottom: '20px',
          fontSize: '1.125rem'
        }
      }
    ],
    // Table of Contents
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '【澳門旅遊】這些景點必逛', id: 'must-visit-attractions' },
        { level: 1, text: '【澳門旅遊】美高梅飯店', id: 'mgm-hotel' },
        { level: 1, text: '【澳門旅遊】美高梅是什麼', id: 'what-is-mgm' },
        { level: 1, text: '【澳門旅遊】保利美高梅博物館及天幕廣場', id: 'poly-mgm-museum' },
        { level: 1, text: '【澳門旅遊】吉祥物', id: 'mascot' },
        { level: 1, text: '【澳門旅遊】龍匯天下', id: 'long-huei' }
      ],
      style: TABLE_OF_CONTENTS_STYLE
    },
    // Array of sections
    sections: [
      {
        type: 'section',
        title: '【澳門旅遊】這些景點必逛',
        titleLevel: 2,
        id: 'must-visit-attractions',
        description: '先說澳門旅遊的結論，去澳門旅遊沒個三五個月是玩不完的',
        content: [
          {
            type: 'text',
            content: '先說澳門旅遊的結論，去澳門旅遊沒個三五個月是玩不完的，值得去的地方太多太多了！簡單舉幾個澳門旅遊的例子就好，你想去看看最經典的澳門賭場，光是賭場就有澳門威尼斯人娛樂場、永利娛樂場、星際娛樂場、英皇宮殿娛樂場...你想去澳門的歷史景點；大三巴牌坊、議事亭前地、媽閣廟、大炮台...',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '奇怪?那我澳門旅遊只有三五天的安排是不是不該去澳門?我知道各位很急，但各位先別急，小編早就整理好了澳門旅遊cp值最高、最多景點給帥哥美女們拍照打卡的地方了，說了這麼多到底在哪?跟著小編看下去吧~',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門旅遊】美高梅飯店',
        titleLevel: 2,
        id: 'mgm-hotel',
        image: {
          src: '/travel/macao-travel/20230425133723_36.jpg',
          alt: '【澳門旅遊】美高梅飯店',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '小編要推薦的澳門旅遊去處就是澳門的美高梅，作為澳門地平線上最引人矚目的時尚地標，澳門美高梅連續十年奪得《福布斯旅遊指南》五星殊榮，是尊尚格調的典範。除豪華客房及套房外，賓客能在這裏發現眾多與別不同的奢華享受，包括充滿歐陸設計特色的天幕廣場、五星殊榮的水療中心、多間頂級餐廳，致力為客人提供世界級佳餚，以及功能齊全的會議及場地設施等...',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門旅遊】美高梅是什麼',
        titleLevel: 2,
        id: 'what-is-mgm',
        description: '澳門美高梅（2010年4月23日前稱澳門美高梅金殿；MGM Macau）位於澳門新口岸新填海區',
        content: [
          {
            type: 'text',
            content: '澳門美高梅（2010年4月23日前稱澳門美高梅金殿；MGM Macau）位於澳門新口岸新填海區，樓高154米，高35層，為一所五星級娛樂場酒店，總建築面積達200萬平方呎，原為澳門商業貿易城南區部分；南向氹仔，西靠壹號湖畔，北靠永利澳門。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '澳門美高梅是美高梅公司於澳門首個娛樂場酒店項目，是澳門六個賭牌（三個主牌及三個副牌）之中最後一個賭牌公司正式落成的旗艦賭場酒店，也標誌著澳門博彩業正式進入六分天下的局面。澳門美高梅所領之賭牌，屬於澳門博彩公司賭牌之副牌。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '澳門美高梅整個項目投資逾12.5億美元，香港王董國際有限公司設計，香港協興建築承建，於2005年年中進行填海、填土及興建的工程；於2007年12月18日開幕。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門旅遊】保利美高梅博物館及天幕廣場',
        titleLevel: 2,
        id: 'poly-mgm-museum',
        image: {
          src: '/travel/macao-travel/124.jpg',
          alt: '【澳門旅遊】保利美高梅博物館及天幕廣場',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '澳門旅遊必去保利美高梅博物館，它由保利文化與美高梅中國聯合打造，於2024年11月15日開幕為大中華區首座建造於酒店內合國際規模的博物館。博物館位於澳門美高梅二樓，空間面積近2000平方米，按照國家一級文物展陳標準建造，以創新科技融合傳統非遺工藝及革新的策展手法作展覽。博物館首展以「海上絲綢之路」為主題的「藍色飄帶——探索神秘海域　邂逅絲路遺珍」，共展出84組共228件文物及藝術品，重點展品包括在「交織」區展出的國寶級珍品「圓明園四獸首」銅像文物原件及「唐三彩文官俑」藝術品，展期只到2025年9月。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '天幕廣場是澳門旅遊大家選擇美高梅的其中一個主要的賣點，位於金殿中心處的天幕廣場面積約2,320平方米，天幕最高處達25米，廣場的設計參照了葡萄牙首都里斯本的里斯本車站作為建築風格以及融合鐵達尼號的貴賓區的設計，充份地表現出葡萄牙對於澳門帶來的影響及高級酒店的形象。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門旅遊】吉祥物',
        titleLevel: 2,
        id: 'mascot',
        image: {
          src: '/travel/macao-travel/eb632db56b3f4c70bdee1fdc362b6276.jpeg',
          alt: '【澳門旅遊】吉祥物',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '澳門旅遊絕對不能錯過澳門美高梅正門側矗立的一座金獅青銅雕像，該雕像高10米、重63噸，形態參照拉斯維加斯美高梅大酒店的金獅銅像，由鑄造香港天壇大佛的南京著名雕塑藝術坊製造。金獅青銅雕像於2007年10月15日揭幕。另外，澳門美高梅的商標上也有這頭金獅，喻意其公司品牌理念（堅毅力量、領導群雄、信心勇氣、尊貴顯赫及忠誠一致）。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門旅遊】龍匯天下',
        titleLevel: 2,
        id: 'long-huei',
        description: '【澳門旅遊】2025/5月水舞間強勢來襲',
        content: [
          {
            type: 'text',
            content: '【澳門旅遊】2025/5月水舞間強勢來襲，詳情及相關影音盡在instergram：龍匯天下',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '美高梅的位置距澳門國際機場車程約15分鐘而距澳門客運碼頭車程約5分鐘，但若你是台灣人，小編很推薦您在instergram搜尋「龍匯天下」也可直接點擊官方line添加做進一步的詢問與了解~放心，入住才付款，你安心，我們才放心！',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      }
    ]
  },
  12: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '澳門景點融合了葡式風情與中華文化，更坐擁8項世界遺產與頂級度假村，是亞洲旅客短程出遊的熱門選擇。本文精選12個「連在地人都推薦」的必訪景點，從歷史古蹟到網美打卡點一次整理，搭配本文獨家的實用攻略，教你用最省時省力的方式玩遍澳門精華！',
        style: { 
          marginBottom: '20px',
          fontSize: '1.125rem'
        }
      }
    ],
    // Table of Contents
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '【澳門景點】必訪TOP5｜穿梭400年時光隧道', id: 'top5-must-visit' },
        { level: 2, text: '大三巴牌坊：世界遺產地標這樣玩才內行', id: 'ruins-of-st-paul' },
        { level: 2, text: '媽閣廟：求平安還能看海事展覽', id: 'a-ma-temple' },
        { level: 1, text: '【澳門景點】必玩TOP4｜尖叫系設施與網美打卡', id: 'top4-must-play' },
        { level: 2, text: '旅遊塔233米高空漫步：比台北101更刺激', id: 'macau-tower' },
        { level: 2, text: 'teamLab超自然空間：全球最高規格光影展', id: 'teamlab' },
        { level: 1, text: '【澳門景點】必吃TOP3｜米其林小吃與葡國菜', id: 'top3-must-eat' },
        { level: 2, text: '安德魯餅店：比肯德基更好吃的葡式蛋撻', id: 'andrew-egg-tart' },
        { level: 2, text: '永利皇宮纜車晚餐：搭免費纜車吃米其林', id: 'wynn-palace' },
        { level: 1, text: '【澳門景點】實用攻略｜專屬建議', id: 'practical-guide' },
        { level: 2, text: '最佳旅遊季節與穿著建議', id: 'best-season' },
        { level: 2, text: '省時交通這樣安排', id: 'transportation-tips' }
      ],
      style: TABLE_OF_CONTENTS_STYLE
    },
    // Array of sections
    sections: [
      {
        type: 'section',
        title: '【澳門景點】必訪TOP5｜穿梭400年時光隧道',
        titleLevel: 2,
        id: 'top5-must-visit',
        description: '必訪TOP5景點',
        content: [
          {
            type: 'text',
            content: '以下介紹澳門必訪的TOP5歷史景點，帶你穿梭400年時光隧道。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '大三巴牌坊：世界遺產地標這樣玩才內行',
        titleLevel: 3,
        id: 'ruins-of-st-paul',
        image: {
          src: '/travel/travel1/duomo-6808817_1920.jpg',
          alt: '大三巴牌坊：世界遺產地標這樣玩才內行',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '作為澳門地標的大三巴牌坊，前身是聖保羅教堂的遺址，精緻的巴洛克式浮雕見證了中葡文化交融。建議早上9點前抵達避開人潮，從側邊戀愛巷拍攝能避開雜亂背景。牌坊後方的天主教藝術博物館免費開放，展示珍貴宗教文物。周邊必吃議事亭前地的「義順燉奶」與「檸檬車露」冰淇淋，步行5分鐘可達手信街採購鉅記餅家杏仁餅。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '重點注意：每週三、六晚間8點有光雕投影秀，最佳觀賞位置在牌坊正前方階梯。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '媽閣廟：求平安還能看海事展覽',
        titleLevel: 3,
        id: 'a-ma-temple',
        description: '澳門最古老的媽祖廟建於1488年',
        content: [
          {
            type: 'text',
            content: '澳門最古老的媽祖廟建於1488年，廟內香火鼎盛卻維持寧靜氛圍，台灣旅客可試用廟方提供的電子點香系統。參拜後別錯過旁邊的澳門海事博物館，三層樓展區展示從漁船到現代港口的發展史，頂樓觀景台能眺望西灣大橋。推薦搭配「媽閣廟前地」的傳統茶樓體驗廣式早茶，人均消費約200台幣。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '交通攻略：搭乘公車1、2、5路線至「媽閣廟站」，周邊有免費接駁車往旅遊塔。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門景點】必玩TOP4｜尖叫系設施與網美打卡',
        titleLevel: 2,
        id: 'top4-must-play',
        description: '必玩TOP4景點',
        content: [
          {
            type: 'text',
            content: '以下介紹澳門必玩的TOP4尖叫系設施與網美打卡景點。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '旅遊塔233米高空漫步：比台北101更刺激',
        titleLevel: 3,
        id: 'macau-tower',
        image: {
          src: '/travel/travel1/Skywalk-Express-1-1680x900px__ScaleMaxWidthWzE5MjBd.jpg',
          alt: '旅遊塔233米高空漫步：比台北101更刺激',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '澳門旅遊塔的「空中漫步X版」是亞洲最高戶外挑戰，在233米高空無扶手行走，台灣旅客可選普通版（綁安全帶）或極限版（自由行走）。塔內還有透明地板觀景台與旋轉餐廳，推薦預約下午茶時段（每人1,200台幣）同時享受美食與全景。每年11月會舉辦國際跳傘大賽，可現場報名雙人跳傘體驗。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: 'teamLab超自然空間：全球最高規格光影展',
        titleLevel: 3,
        id: 'teamlab',
        description: '威尼斯人酒店的teamLab展區占地5,000平方公尺',
        content: [
          {
            type: 'text',
            content: '威尼斯人酒店的teamLab展區占地5,000平方公尺，展出50件互動數位藝術作品。必拍「無界宇宙」的無限鏡面空間與「漂浮花園」的懸吊花海，展區提供2小時限時通行證（成人票1,100台幣）。建議穿著淺色衣物增強光影效果，週末下午人潮較多可選擇晚間8點後入場。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '隱藏玩法：向工作人員索取AR眼鏡，能解鎖隱藏版動態特效。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門景點】必吃TOP3｜米其林小吃與葡國菜',
        titleLevel: 2,
        id: 'top3-must-eat',
        description: '必吃TOP3美食',
        content: [
          {
            type: 'text',
            content: '以下介紹澳門必吃的TOP3米其林小吃與葡國菜。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '安德魯餅店：比肯德基更好吃的葡式蛋撻',
        titleLevel: 3,
        id: 'andrew-egg-tart',
        image: {
          src: '/travel/travel1/igreja-de-sao-francisco.jpg',
          alt: '安德魯餅店：比肯德基更好吃的葡式蛋撻',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '路環的安德魯餅店是澳門葡撻創始店，外皮酥脆、內餡奶香濃郁，一顆35台幣的價格十年未漲。內用推薦搭配「冰鎮檸檬茶」，外帶可選盒裝（6顆200台幣）當伴手禮。避開下午茶時段的人潮秘訣是早上11點前購買，順道逛旁邊的彩色碼頭屋與聖方濟各教堂。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '交通提醒：從澳門半島搭26A公車約40分鐘，或搭計程車跳表約300台幣。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '永利皇宮纜車晚餐：搭免費纜車吃米其林',
        titleLevel: 3,
        id: 'wynn-palace',
        description: '永利皇宮的觀光纜車不僅免費搭乘',
        content: [
          {
            type: 'text',
            content: '永利皇宮的觀光纜車不僅免費搭乘，還推出「纜車晚餐套票」（每人3,800台幣）能在車廂內享用米其林星級料理。推薦預約晚間7點的「水舞秀時段」，搭配音樂噴泉的燈光秀超浪漫。纜車運營到午夜12點，最後一班車廂適合拍攝無人空景。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門景點】實用攻略｜專屬建議',
        titleLevel: 2,
        id: 'practical-guide',
        description: '實用攻略與專屬建議',
        content: [
          {
            type: 'text',
            content: '以下提供澳門景點的實用攻略與專屬建議。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '最佳旅遊季節與穿著建議',
        titleLevel: 3,
        id: 'best-season',
        description: '澳門夏季（6-9月）高溫達35度且多雨',
        content: [
          {
            type: 'text',
            content: '澳門夏季（6-9月）高溫達35度且多雨，建議攜帶防曬外套與防水鞋。冬季（12-2月）平均溫度18度，適合穿著薄毛衣逛戶外景點。春秋季是攝影黃金時段，推薦3月參加國際煙花比賽，10月體驗葡國文化節。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '必備物品：轉接插頭（英規三腳）、輕便雨衣。',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '省時交通這樣安排',
        titleLevel: 3,
        id: 'transportation-tips',
        description: '澳門半島景點集中，推薦步行搭配「免費酒店接駁車」',
        content: [
          {
            type: 'text',
            content: '澳門半島景點集中，推薦步行搭配「免費酒店接駁車」。氹仔與路環區建議購買「澳門通」交通卡（押金50台幣可退），公車單程僅12台幣。跨海行程可選計程車，平均跳表價格比台北便宜20%。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '結語：澳門景點兼具文化深度與娛樂強度，5天4夜就能輕鬆玩遍精華。記得提前預約熱門餐廳與展覽，利用酒店接駁車省下交通費。',
            style: { marginBottom: '15px', fontSize: '1.125rem' }
          },
          {
            type: 'text',
            content: '現在就透過龍匯天下官方',
            style: { marginBottom: '5px', fontSize: '1.125rem' }
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
            content: '或下方官方賴連結了解更多獨家優惠吧！',
            style: { marginBottom: '20px', fontSize: '1.125rem' }
          }
        ],
        style: SECTION_STYLE
      }
    ]
  }
};

