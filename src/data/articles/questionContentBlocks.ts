// Content blocks for question articles
// Mapped by article ID for easy reference
import { ArticleContent } from '@/types/articleContent';

// Common style constants - edit here to update all instances
const HEADING_STYLE_LIST = { 
    marginBottom: '65px', 
    marginTop: '65px', 
    fontSize: '1.125rem'
  };

const TEXT_STYLE_BOTTOM_IMG = { 
  marginTop: '60px', 
  marginBottom: '20px', 
  fontSize: '1.125rem'
};

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

const HEADING_STYLE_H3 = { 
  marginTop: '65px', 
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

export const questionArticleContentBlocks: Record<number, ArticleContent> = {
  1: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '',
        style: TEXT_STYLE_BOTTOM_20_NO_TOP
      }
    ],
    // Table of Contents
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '【澳門換錢】3大渠道比拚！最新匯率實測', id: 'channel-comparison' },
        { level: 1, text: '【澳門換錢】2025匯率TOP3民間兌換所推薦', id: 'top3-recommended' },
        { level: 1, text: '【澳門換錢】聰明換錢5大技巧：省下門票錢', id: 'smart-tips' },
        { level: 1, text: '【澳門換錢】安全守則：最新防騙重點', id: 'safety-rules' },
        { level: 1, text: '【澳門換錢】結合行程：3天2夜實戰規劃', id: 'itinerary-plan' },
        { level: 1, text: '【澳門換錢】2025年終極建議', id: 'final-advice' }
      ],
      style: TABLE_OF_CONTENTS_STYLE
    },
    // Array of sections
    sections: [
      {
        type: 'section',
        title: '【澳門換錢】3大渠道比拚！最新匯率實測',
        titleLevel: 2,
        id: 'channel-comparison',
        image: {
          src: '/question/id1/money-7881948_1920.jpg',
          alt: '【澳門換錢】3大渠道比拚！2025年最新匯率實測',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '實測日期：2025/3/15，以兌換1,000港幣（HKD）為例',
            style: TEXT_STYLE_BOTTOM_IMG
          },
         
          {
            type: 'table',
            headers: ['渠道', '可得澳門元（MOP）', '手續費', '優缺點分析'],
            rows: [
              ['民間兌換所（推薦）', '1,028-1,032', '無', '匯率最佳，但需比價'],
              ['銀行（中國銀行）', '1,020-1,025', 'MOP 20', '安全但耗時，排隊>30分鐘'],
              ['酒店/機場櫃台', '1,010-1,015', 'MOP 50起', '緊急備用，匯率最差']
            ],
            showBorders: false, // Set to false to remove borders
            style: { 
              marginBottom: '20px', 
              marginTop: '60px'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '匯率浮動重點',
            id: 'exchange-rate-points',
            style: { marginTop: '155px', marginBottom: '15px' }
          },
          {
            type: 'text',
            content: '港幣（HKD）→ 澳門元（MOP）：民間兌換所約 1:1.028~1.032（銀行僅1:1.02）',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'text',
            content: '人民幣（CNY）→ 澳門元（MOP）：約 1:1.12~1.15（受人民幣匯率波動影響大）',
            style:  HEADING_STYLE_LIST
          },
          {
            type: 'text',
            content: '黃金法則：兌換金額越大，民間兌換所議價空間越高（實測換HKD 5,000可多拿MOP 50）',
            style: HEADING_STYLE_LIST
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門換錢】2025匯率TOP3民間兌換所推薦',
        titleLevel: 2,
        id: 'top3-recommended',
        image: {
          src: '/question/id1/blur-1853262_1920.jpg',
          alt: '【澳門換錢】2025匯率TOP3民間兌換所推薦',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '經實測與在地人驗證，這3家匯率持續領先：',
            style: TEXT_STYLE_BOTTOM_IMG
          },
          {
            type: 'heading',
            level: 3,
            content: '【新馬路】興業兌換有限公司',
            id: 'xingye-exchange',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '地址：新馬路噴水池旁義隆巷內（黃色招牌）',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'text',
            content: '優勢：全澳匯率冠軍，HKD→MOP達1:1.032（2025/3數據）',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'text',
            content: '營業時間：09:30-20:00（週六日照常）',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'heading',
            level: 3,
            content: '【議事亭】大豐兌換',
            id: 'dafeng-exchange',
            style:  {...HEADING_STYLE_H3, marginTop: '160px'}
          },
          {
            type: 'text',
            content: '地址：議事亭前地中國國貨公司側巷',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'text',
            content: '優勢：可用人民幣現金兌換，CNY匯率1:1.15',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'text',
            content: '祕技：出示本篇攻略截圖，兌HKD 3,000以上送礦泉水',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'heading',
            level: 3,
            content: '【氹仔】銀河兌換中心',
            id: 'galaxy-exchange',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '地址：銀河度假城鑽石大堂旁（近百老匯美食街）',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'text',
            content: '優勢：深夜營業至23:00，演唱會散場可即時換匯',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'heading',
            level: 3,
            content: '注意陷阱',
            id: 'traps',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '避開「匯率1:1」的標示（一定收手續費）',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'text',
            content: '拒收皺摺破損外幣是正常規定',
            style: HEADING_STYLE_LIST
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門換錢】聰明換錢5大技巧：省下門票錢',
        titleLevel: 2,
        id: 'smart-tips',
        image: {
          src: '/question/id1/banknote-1396351_1920.jpg',
          alt: '【澳門換錢】聰明換錢5大技巧：省下門票錢',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '比價暗號：進店先問「今天電匯價多少？」（業界術語表大額兌換）',
            style: TEXT_STYLE_BOTTOM_IMG
          },
          {
            type: 'heading',
            level: 3,
            content: '避開地雷區',
            id: 'avoid-traps',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '機場/碼頭匯率比市區低3%',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'text',
            content: '大三巴沿街兌換所匯率較差（遊客陷阱）',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'heading',
            level: 3,
            content: '免手續費絕招',
            id: 'no-fee-tricks',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '兌換所標「0佣金」才無隱藏費用',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'text',
            content: '銀行換需帶護照，單次收MOP 20',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'heading',
            level: 3,
            content: '電子支付替代方案',
            id: 'electronic-payment',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '支付寶「匯率升級」：鑽石會員享CNY→MOP 1:1.14（優於現金）',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'text',
            content: '澳門通儲值：便利店可用港幣1:1儲值（等同匯率1:1）',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'heading',
            level: 3,
            content: '應急SOP',
            id: 'emergency-sop',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '用澳門ATM「銀聯卡」取現 → 步驟②：再到民間兌換所換匯 → 比直接刷卡省5%貨幣轉換費',
            style: {...HEADING_STYLE_LIST, marginTop: '-10px'}
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門換錢】安全守則：最新防騙重點',
        titleLevel: 2,
        id: 'safety-rules',
        description: '',
        content: [
          {
            type: 'text',
            content: '鑑別真偽：認明「兌換許可證」（澳門金融管理局發，編號MCEXXX）',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'heading',
            level: 3,
            content: '當場確認',
            id: 'on-site-confirmation',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '要求櫃員在計算機按出兌換金額',
            style: {...HEADING_STYLE_LIST, marginTop: '-10px'}
          },
          {
            type: 'text',
            content: '拿到鈔票後立即清點（尤其MOP 1,000大鈔）',
            style: {...HEADING_STYLE_LIST, marginTop: '-60px'}
          },
          {
            type: 'text',
            content: '大額兌換：超過MOP 50,000需登記身份證（防洗錢規定）',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'text',
            content: '舉報管道：遇匯率詐騙撥打 治安警察局熱線 +853 2857 3333',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'heading',
            level: 3,
            content: '鈔票使用提醒',
            id: 'banknote-reminder',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: 'MOP 1,000面額部分小店拒收，優先換MOP 500以下小鈔',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '賭場內只收港幣，勿換太多澳門元進場',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門換錢】結合行程：3天2夜實戰規劃',
        titleLevel: 2,
        id: 'itinerary-plan',
        
        description: '',
        content: [
          {
            type: 'heading',
            level: 3,
            content: 'DAY1：抵澳集中換匯',
            id: 'day1',
            style: { marginTop: '0', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '➔ 機場抵達：僅換MOP 500（支付交通費）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '➔ 入住後：直奔新馬路「興業兌換」換主力旅費',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: 'DAY2：分散使用策略',
            id: 'day2',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '➔ 上午景點：用澳門通支付小額消費',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '➔ 午晚餐：支付寶/信用卡（享匯率優惠）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '➔ 夜市小吃：使用現金MOP 100小鈔',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: 'DAY3：離澳清空技巧',
            id: 'day3',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '➔ 剩餘澳門元→銀河兌換中心換回港幣（匯損約2%）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '➔ 小額硬幣→便利店買手信耗盡',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem',
              lineHeight: '2rem'
            }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門換錢】2025年終極建議',
        titleLevel: 2,
        id: 'final-advice',
        description: '',
        content: [
          {
            type: 'text',
            content: '最佳組合：大額用民間兌換所（新馬路/議事亭）+ 小額用澳門通/支付寶',
            style: {...HEADING_STYLE_LIST, marginTop:'0px' }
          },
          {
            type: 'text',
            content: '隨身現金：3天行程建議換MOP 1,500/人（不含住宿購物）',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'text',
            content: '省錢關鍵：避開機場/賭場換匯，價差足夠吃米其林一星！',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'text',
            content: '立即追蹤龍匯天下官方',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'link',
            href: 'https://www.instagram.com/lhts.8899/',
            text: 'IG',
            target: '_blank',
            style: {
              color: '#3b82f6',
              textDecoration: 'underline',
              marginTop: '0',
              marginBottom: '0'
            }
          },
          {
            type: 'text',
            content: '或點擊下方連結加入官方賴，也可以找我們換錢喔~',
            style: HEADING_STYLE_LIST
          },
          {
            type: 'text',
            content: '開啟你的澳門之旅吧！',
            style: HEADING_STYLE_LIST
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
        content: '澳門通（Macau Pass）是旅客探索澳門的智慧神卡，2025年全面升級後，整合交通、消費、景點門票等多元功能，成為自由行省錢省時的必備工具。本文從最新功能、使用範圍到隱藏優惠，帶你掌握這張小卡的無限潛力！',
        style: TEXT_STYLE_BOTTOM_20_NO_TOP
      }
    ],
    // Table of Contents
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '【澳門通】是什麼？2025年升級版亮點解析', id: 'what-is-macau-pass' },
        { level: 1, text: '【澳門通】怎麼買？儲值、退費最新規則', id: 'how-to-buy' },
        { level: 1, text: '【澳門通】省錢秘技：2025年隱藏優惠全公開', id: 'money-saving-tips' },
        { level: 1, text: '【澳門通】實戰應用：3天2夜行程推薦', id: 'practical-application' },
        { level: 1, text: '【澳門通】常見QA：2025年最新解答', id: 'faq' },
        { level: 1, text: '【澳門通】結語：為什麼2025年遊澳門必備澳門通？', id: 'conclusion' }
      ],
      style: TABLE_OF_CONTENTS_STYLE
    },
    // Array of sections
    sections: [
      {
        type: 'section',
        title: '【澳門通】是什麼？2025年升級版亮點解析',
        titleLevel: 2,
        id: 'what-is-macau-pass',
        image: {
          src: '/question/id2/E6h1kMaa5qcrfuuS3O0c.jpg',
          alt: '【澳門通】是什麼？2025年升級版亮點解析',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '澳門通是澳門通用的電子支付卡，採用感應式技術，2025年推出「第三代澳門通」強化以下功能：',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '一卡雙用：實體卡同步綁定「澳門通APP」，手機感應支付免掏卡（支援Android與iOS）。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '交通整合：適用全澳巴士、輕軌、渡輪，並新增「跨境適用」：2025年可於珠海部分公交路線使用。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '智慧旅遊：內建景點快速通行功能，持卡至大三巴牌坊、澳門塔等合作景點，掃碼即可獲取語音導覽。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '適用族群：適合3天以上行程、需頻繁搭乘公共交通、想省去現金找零麻煩的旅客。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門通】怎麼買？儲值、退費最新規則',
        titleLevel: 2,
        id: 'how-to-buy',
        image: {
          src: '/question/id2/澳门通-全国通卡2_202412.jpg',
          alt: '【澳門通】怎麼買？儲值、退費最新規則',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '取得澳門通極度便利，2025年新增多種購買管道：',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '購買地點',
            id: 'purchase-locations',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '機場/碼頭自助販賣機（支援微信、支付寶付款）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '7-11、OK便利店（售價MOP 130，含MOP 100可用餘額與MOP 30押金）',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '儲值方式',
            id: 'recharge-methods',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '全澳超過200台「加值易」自助機（可選繁體中文介面）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '澳門通APP線上信用卡儲值（單次最低MOP 50）',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '退卡規則',
            id: 'refund-rules',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '押金MOP 30與卡內餘額可於任一客服中心退還',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '2025年起，未使用滿3天退卡需扣手續費MOP 5',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門通】省錢秘技：2025年隱藏優惠全公開',
        titleLevel: 2,
        id: 'money-saving-tips',
        image: {
          src: '/question/id2/Macau_Pass_Vending_Machine_201910.jpg',
          alt: '【澳門通】省錢秘技：2025年隱藏優惠全公開',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '善用這些功能，最多可省下30%旅遊開銷：',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '交通折扣',
            id: 'transport-discount',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '巴士票價從MOP 6降至MOP 3，輕軌享8折（比現金支付便宜MOP 2-5/趟）',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '景點套票',
            id: 'attraction-packages',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '「世遺路線套票」：MOP 150含大三巴牌坊、玫瑰堂、崗頂劇院門票+交通費',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '「極限體驗套票」：澳門塔空中漫步門票+來回接駁車，卡友價MOP 388（原價MOP 480）',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '餐飲回饋',
            id: 'dining-rewards',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '大利來記豬扒包：持卡消費送凍檸茶',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '瑪嘉烈蛋撻：每日17:00後買3送1（需掃卡累計點數）',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '獨家情報：2025年新增「演唱會聯名卡」，購買G-DRAGON等指定演出門票，可憑卡享周邊商品9折與免費接駁車。',
            style: { 
              marginBottom: '20px', 
              marginTop: '20px', 
              fontSize: '1.125rem'
            }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門通】實戰應用：3天2夜行程推薦',
        titleLevel: 2,
        id: 'practical-application',
        image: {
          src: '/question/id2/getimage.jpg',
          alt: '【澳門通】實戰應用：3天2夜行程推薦',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '以下示範如何用澳門通高效玩遍熱門景點：',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: 'DAY1：澳門半島文化之旅',
            id: 'day1',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '上午：乘3號巴士至大三巴牌坊（掃卡啟動語音導覽）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '午餐：議事亭前地「黃枝記」雲吞麵（刷卡享9折）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '下午：澳門博物館→乘輕軌至媽閣廟站（轉乘免費接駁船）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '晚餐：福隆新街「佛笑樓」葡國菜（用卡積分兌換馬介休沙拉）',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: 'DAY2：路氹城奢華體驗',
            id: 'day2',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '上午：乘輕軌至路氹西站，步行至teamLab超自然空間（持卡快速入場）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '午餐：銀河「豚王拉麵」（消費滿MOP 100送叉燒券）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '晚上：威尼斯人購物＋金光綜藝館演唱會（憑卡租借應援手燈）',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: 'DAY3：路環深度漫遊',
            id: 'day3',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '上午：乘26A巴士至路環市區，安德魯餅店掃卡買一送一',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '下午：黑沙海灘散步＋漢記手打咖啡（刷卡免排隊）',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門通】常見QA：2025年最新解答',
        titleLevel: 2,
        id: 'faq',
        image: {
          src: '/question/id2/U2xpz7Au67EPqEFfU2Jo.jpg',
          alt: '【澳門通】常見QA：2025年最新解答',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'heading',
            level: 3,
            content: 'Q1：澳門通能搭計程車嗎？',
            id: 'q1',
            style: { marginTop: '0', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '2025年新增「澳門叫車」合作，可掃碼支付車資，但需提前於APP綁定信用卡。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: 'Q2：卡片餘額不足怎麼辦？',
            id: 'q2',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '全澳便利店與景點服務台提供「即時補票」功能，先乘車後扣款（需於48小時內補儲值）。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: 'Q3：適合多人共用一張卡嗎？',
            id: 'q3',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '不建議！澳門通為「一人一卡」制，搭乘巴士輕軌時，同行者需各自刷卡。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門通】結語：為什麼2025年遊澳門必備澳門通？',
        titleLevel: 2,
        id: 'conclusion',
        description: '',
        content: [
          {
            type: 'text',
            content: '澳門通已從交通卡進化成「智慧旅遊神器」，2025年升級後更提供：',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '省時：掃碼快速通行景點與演唱會接駁',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '省錢：交通+門票優惠最高省MOP 500/人',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '便利：免現金支付超過2,000間合作商家',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '建議抵澳後優先購買此卡，搭配「澳門通APP」即時查詢餘額與優惠，讓旅程更聰明流暢！',
            style: { 
              marginBottom: '20px', 
              marginTop: '20px', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '想知道更多有關澳門的獨家消息嗎?快追蹤龍匯天下官方',
            style: { 
              marginBottom: '0', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'link',
            href: 'https://www.instagram.com/lhts.8899/',
            text: 'IG',
            style: {
              color: '#3b82f6',
              textDecoration: 'underline',
              marginBottom: '0'
            }
          },
          {
            type: 'text',
            content: '吧~',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '有澳門相關疑問可以點擊下方官方賴連結詢問~我在澳門等你喔~',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
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
        content: '澳門連續7年穩居「亞洲最安全旅遊城市」前三名，根據2024年最新數據顯示，每10萬旅客犯罪率僅1.5件。本文建議收藏，廢話不多說，讓小編帶你快速掌握安全要點。',
        style: TEXT_STYLE_BOTTOM_20_NO_TOP
      }
    ],
    // Table of Contents
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '【澳門旅遊安全嗎？】權威數據告訴你', id: 'authority-data' },
        { level: 1, text: '【澳門旅遊安全嗎？】三大風險破解指南', id: 'risk-guide' },
        { level: 2, text: '1.交通注意事項', id: 'traffic-safety' },
        { level: 2, text: '2.常見詐騙手法', id: 'common-scams' },
        { level: 2, text: '3. 現金保管秘訣', id: 'cash-safety' },
        { level: 1, text: '【澳門旅遊安全嗎？】QA重點整理', id: 'qa-summary' },
        { level: 2, text: '1.治安比台灣好？', id: 'vs-taiwan' },
        { level: 2, text: '2.女性適合獨遊？', id: 'solo-female' },
        { level: 2, text: '3.緊急應變方式', id: 'emergency-response' },
        { level: 1, text: '【澳門旅遊安全嗎？】3大安心保證', id: 'safety-guarantees' },
        { level: 1, text: '【澳門旅遊安全嗎？】總結', id: 'conclusion' }
      ],
      style: TABLE_OF_CONTENTS_STYLE
    },
    // Array of sections
    sections: [
      {
        type: 'section',
        title: '【澳門旅遊安全嗎？】權威數據告訴你',
        titleLevel: 2,
        id: 'authority-data',
        image: {
          src: '/question/id3/ai-generated-9011895_1280.jpg',
          alt: '澳門旅遊安全嗎',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'text',
            content: '全球資料庫安全指數：92.3/100（超越東京、首爾）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '監控密度全球第一：每平方公里852支鏡頭',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '夜間安全感達94%，勝過多數亞洲城市',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門旅遊安全嗎？】三大風險破解指南',
        titleLevel: 2,
        id: 'risk-guide',
        description: '',
        content: [
          {
            type: 'heading',
            level: 3,
            content: '1.交通注意事項',
            id: 'traffic-safety',
            style: { marginTop: '0', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '計程車全裝行車紀錄器',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '免費接駁車強制繫安全帶',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '歷史區石板路建議穿防滑鞋',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '2.常見詐騙手法',
            id: 'common-scams',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '賭場周邊「高匯率換錢」陷阱',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '假冒酒店人員推銷行程',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '景點「免費拍照」收費爭議',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '3. 現金保管秘訣',
            id: 'cash-safety',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '分3處存放（貼身包/保險箱/電子支付）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '優先使用行動支付（支援台灣信用卡）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '深夜消費選擇酒店內商家',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門旅遊安全嗎？】QA重點整理',
        titleLevel: 2,
        id: 'qa-summary',
        image: {
          src: '/question/id3/overthink-7185863_1280.png',
          alt: '澳門旅遊安全嗎？',
          width: 300,
          height: 200
        },
        description: '',
        content: [
          {
            type: 'heading',
            level: 3,
            content: '1.治安比台灣好？',
            id: 'vs-taiwan',
            style: { marginTop: '0', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '竊盜率僅台灣1/2（每萬人0.8 vs 1.5件）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '詐騙破獲率高達89%',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '緊急反應快1.7分鐘',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '2.女性適合獨遊？',
            id: 'solo-female',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '92%女性旅客認同安全感足夠',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '酒店提供「單人女性專屬樓層」',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '深夜建議搭乘正規計程車',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '3.緊急應變方式',
            id: 'emergency-response',
            style: HEADING_STYLE_H3
          },
          {
            type: 'text',
            content: '手機直撥緊急熱線（中文服務）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: 'Google地圖搜尋「最近警局」',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '聯繫酒店24小時保全中心',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門旅遊安全嗎？】3大安心保證',
        titleLevel: 2,
        id: 'safety-guarantees',
        description: '',
        content: [
          {
            type: 'text',
            content: '全中文環境：78%標示為繁體字',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '智能監控：5G即時通報系統',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '法規保障：消費糾紛24小時處理機制',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          }
        ],
        style: SECTION_STYLE
      },
      {
        type: 'section',
        title: '【澳門旅遊安全嗎？】總結',
        titleLevel: 2,
        id: 'conclusion',
        description: '',
        content: [
          {
            type: 'text',
            content: '澳門憑藉「智能安防+中文友善」優勢，成為短程旅遊首選。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'text',
            content: '掌握「分散財物、使用電子支付、避開深夜小巷」3原則，即可安心探索世界遺產與米其林美食。建議出發前投保旅遊險，並追蹤龍匯天下官方',
            style: { 
              marginBottom: '0', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          },
          {
            type: 'link',
            text: 'IG',
            href: 'https://line.me/R/ti/p/@vgl8843j?from=page&searchId=vgl8843j',
            target: '_blank',
            style: {
              color: '#3b82f6',
              textDecoration: 'underline',
              marginTop: '0',
              marginBottom: '0'
            }
          },
          {
            type: 'text',
            content: '以及點擊下方官方賴獲取更多資訊。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '1.125rem'
            }
          }
        ],
        style: SECTION_STYLE
      }
    ]
  }
};

