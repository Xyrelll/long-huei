// Content blocks for entertainment articles
// Mapped by article ID for easy reference
import { ArticleContent } from '@/types/articleContent';

export const entertainmentArticleContentBlocks: Record<number, ArticleContent> = {
  1: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '澳門遠不止賭場和歷史遺跡，這座城市正以全新面貌迎接旅客。小編推薦這些與眾不同的體驗方式：',
        style: { 
          marginBottom: '20px',
          fontSize: '0.8rem'
        }
      },
      {
        type: 'heading',
        level: 3,
        content: '1. 高空視角：換個角度看澳門',
        id: 'aerial-view',
        style: { marginTop: '20px', marginBottom: '10px' }
      },
      {
        type: 'text',
        content: '• 直升機觀光：新推出的10分鐘航程（約MOP1,200/人），從空中俯瞰港珠澳大橋和澳門半島全景',
        style: { 
          marginBottom: '10px', 
          marginTop: '0', 
          fontSize: '0.8rem'
        }
      },
      {
        type: 'text',
        content: '• 澳門塔空中漫步 X 版：新增極限體驗，在233米高空邊緣行走並完成指定動作可獲證書',
        style: { 
          marginBottom: '20px', 
          marginTop: '0', 
          fontSize: '0.8rem'
        }
      },
      {
        type: 'heading',
        level: 3,
        content: '2. 夜間澳門：越夜越美麗',
        id: 'night-macau',
        style: { marginTop: '20px', marginBottom: '10px' }
      },
      {
        type: 'text',
        content: '• 光影節特別路線：每年12月舉辦，「海上光影秀」位於內港碼頭區',
        style: { 
          marginBottom: '10px', 
          marginTop: '0', 
          fontSize: '0.8rem'
        }
      },
      {
        type: 'text',
        content: '• 深夜美食地圖：凌晨 3 點仍營業的祐漢街市熟食中心',
        style: { 
          marginBottom: '20px', 
          marginTop: '0', 
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
        { level: 1, text: '主題式玩法：找到你的專屬澳門', id: 'themed-tours' },
        { level: 2, text: '【文青必走】藝術澳門路線', id: 'art-route' },
        { level: 2, text: '【吃貨專屬】米其林摘星之旅', id: 'michelin-route' },
        { level: 2, text: '【親子同樂】家庭友善行程', id: 'family-route' },
        { level: 1, text: '季節限定：不可錯過的特別活動', id: 'seasonal-events' },
        { level: 2, text: '春季（3–5 月）', id: 'spring' },
        { level: 2, text: '夏季（6–8 月）', id: 'summer' },
        { level: 2, text: '秋季（9–11 月）', id: 'autumn' },
        { level: 2, text: '冬季（12–2 月）', id: 'winter' },
        { level: 1, text: '在地人帶路：避開人潮的私房景點', id: 'local-spots' },
        { level: 2, text: '1. 望德堂區後巷藝術', id: 'sao-lazaro' },
        { level: 2, text: '2. 路環漁村深度遊', id: 'coloane-village' },
        { level: 2, text: '3. 澳門半島秘境', id: 'peninsula-secrets' },
        { level: 2, text: '交通新選擇', id: 'transport-options' },
        { level: 2, text: '省錢妙招', id: 'money-saving' },
        { level: 2, text: '科技應用', id: 'tech-apps' },
        { level: 1, text: '澳門旅遊 Q&A（2025 最新版）', id: 'qa' },
        { level: 1, text: '結語：打造你的完美澳門之旅', id: 'conclusion' }
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
        title: '主題式玩法：找到你的專屬澳門',
        titleLevel: 2,
        id: 'themed-tours',
        image: {
          src: '/entertainment/id1/macau-5705841.jpg',
          alt: '主題式玩法：找到你的專屬澳門',
          width: 800,
          height: 450
        },
        description: '主題式玩法推薦',
        content: [
          {
            type: 'heading',
            level: 3,
            content: '【文青必走】藝術澳門路線',
            id: 'art-route',
            style: { marginTop: '0', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '• 塔石藝文館：每月更換的當代藝術展',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '• 瘋堂十號創意園：週末文創市集（週六14:00–20:00）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '• 澳門藝術博物館：數位藝術互動展區',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '【吃貨專屬】米其林摘星之旅',
            id: 'michelin-route',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '• 三星體驗：天巢法國餐廳午市套餐',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '• 街頭摘星：榮記荳腐薑汁撞奶',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '【親子同樂】家庭友善行程',
            id: 'family-route',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '• 新濠天地童夢天地：VR 互動遊戲區',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '• 澳門科學館：全新「太空探索」主題展',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '• 大熊貓館：上午 10 點餵食時段最精彩',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '季節限定：不可錯過的特別活動',
        titleLevel: 2,
        id: 'seasonal-events',
        image: {
          src: '/entertainment/id1/istockphoto-1469498103-1024x1024.jpg',
          alt: '季節限定活動',
          width: 800,
          height: 450
        },
        description: '季節限定活動推薦',
        content: [
          {
            type: 'heading',
            level: 3,
            content: '春季（3–5 月）',
            id: 'spring',
            style: { marginTop: '0', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '• 澳門藝術節（4/26–5/31）：戶外表演藝術活動',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '• 櫻花美食節：3 月龍環葡韻日式市集',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '夏季（6–8 月）',
            id: 'summer',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '• 水上樂園夜場：新濠影匯每週五、六延長至 22:00',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '• 澳門國際啤酒節：7 月漁人碼頭',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '秋季（9–11 月）',
            id: 'autumn',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '• 澳門國際煙花比賽：新增最佳觀賞點「科學館海堤」',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '• 葡韻嘉年華：10 月土生葡人文化盛宴',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '冬季（12–2 月）',
            id: 'winter',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '• 聖誕市集：於大三巴牌坊前舉行',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '• 冬日澳門光影秀：1 月於議事亭前地上映',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '在地人帶路：避開人潮的私房景點',
        titleLevel: 2,
        id: 'local-spots',
        image: {
          src: '/entertainment/id1/china-5131523.jpg',
          alt: '在地人帶路',
          width: 800,
          height: 450
        },
        description: '在地人推薦的私房景點',
        content: [
          {
            type: 'heading',
            level: 3,
            content: '1. 望德堂區後巷藝術',
            id: 'sao-lazaro',
            style: { marginTop: '0', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '• 隱藏於住宅區的小型壁畫與裝置藝術',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '• 推薦路線：瘋堂斜巷 → 聖祿杞街',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '2. 路環漁村深度遊',
            id: 'coloane-village',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '• 荔枝碗船廠遺址：廢棄船廠改造成文創空間',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '• 路環圖書館：全澳門最安靜的閱讀角落',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '3. 澳門半島秘境',
            id: 'peninsula-secrets',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '• 聖奧斯定教堂廣場：少人知道的葡式庭院',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '• 崗頂劇院後巷：保留完整 19 世紀住宅區',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '交通新選擇',
            id: 'transport-options',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '• 電動滑板車租借：「澳門微出行」新服務',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '• 水上巴士：往返澳門半島與路環之間',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '• 包車服務：也可找龍匯天下預約',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '省錢妙招',
            id: 'money-saving',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '• 澳門通特別版：含交通與景點折扣',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '• 博物館通行證：MOP85 可參觀 6 大博物館（3 天有效）',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '科技應用',
            id: 'tech-apps',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '• 「澳門文旅」APP：新增 AR 導覽功能',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '• 各大酒店推出手機房卡服務',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '澳門旅遊 Q&A（2025 最新版）',
        titleLevel: 2,
        id: 'qa',
        description: '常見問題解答',
        content: [
          {
            type: 'heading',
            level: 3,
            content: 'Q：澳門現在還需要戴口罩嗎？',
            id: 'q1',
            style: { marginTop: '0', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: 'A：2024 年起除醫療機構外已不強制。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: 'Q：如何避開賭場人潮？',
            id: 'q2',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: 'A：上午 11 點前或晚上 10 點後前往。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: 'Q：帶長輩旅遊最推薦方式？',
            id: 'q3',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: 'A：建議包車半日遊（可向龍匯天下預約）。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: 'Q：最適合拍照的時段？',
            id: 'q4',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: 'A：日出前 1 小時的「藍調時刻」。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '結語：打造你的完美澳門之旅',
        titleLevel: 2,
        id: 'conclusion',
        description: '結語',
        content: [
          {
            type: 'text',
            content: '澳門結合傳統與創新，每次造訪都能遇見驚喜。依照自己的興趣選擇主題路線，再留些時間探索街頭巷尾，才能真正體驗澳門多樣魅力！',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '立即追蹤龍匯天下官方 IG 或加入官方賴，開啟你的澳門之旅！',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
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
        content: '提到澳門，很多人第一時間想到的是大三巴、美食或世界級的酒店，但其實還有一個不能錯過的玩樂去處，那就是 澳門水上樂園。炎炎夏日，最適合和家人朋友一起暢玩水上設施，體驗刺激又清涼的快感。無論是親子家庭、情侶出遊，還是三五好友，澳門水上樂園 都能帶來無限歡樂。',
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
        { level: 1, text: '澳門水上樂園有什麼特別？', id: 'what-is-special' },
        { level: 1, text: '必玩設施推薦', id: 'must-play-facilities' },
        { level: 1, text: '澳門水上樂園適合誰？', id: 'who-is-it-for' },
        { level: 1, text: '澳門水上樂園玩樂小技巧', id: 'tips' },
        { level: 1, text: '新濠影滙澳門水上樂園門票與開放時間', id: 'tickets-hours' },
        { level: 2, text: '如何前往？', id: 'how-to-get-there' },
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
        title: '澳門水上樂園有什麼特別？',
        titleLevel: 2,
        id: 'what-is-special',
        image: {
          src: '/entertainment/id2/water-park-6799006_1920.jpg',
          alt: '澳門水上樂園有什麼特別？',
          width: 800,
          height: 450
        },
        description: '新濠影滙澳門水上樂園的特色',
        content: [
          {
            type: 'text',
            content: '與一般的室內娛樂不同，新濠影滙澳門水上樂園 集結了滑水道、漂流河、造浪池、兒童專區等多樣化設施。這裡不僅有刺激的大型滑水道，讓喜歡挑戰的人尖叫連連；也有適合親子的淺水池和遊樂區，讓小朋友安全玩水。對於只想放鬆的旅客，躺在漂流河上隨水漂流，更是一種享受。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '必玩設施推薦',
        titleLevel: 2,
        id: 'must-play-facilities',
        description: '推薦的必玩設施',
        content: [
          {
            type: 'list',
            items: [
              '光速飛車（水上過山車） — 室內極速滑道設計，驚險感十足，是 新濠影滙水上樂園 的招牌刺激項目。',
              '室內衝浪模擬器「衝浪戰士」 — 全澳門水上樂園獨有的室內浪潮體驗，適合中高階水上活動愛好者。',
              '漂流河 / 星空激流之旅 — 緩慢漂流穿梭在室內與戶外之間，感受悠閒與刺激交錯',
              '兒童專區 / 安全淺水池 — 針對孩童設計的水上遊戲設施，讓家庭出遊更安心。'
            ],
            ordered: true,
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '澳門水上樂園適合誰？',
        titleLevel: 2,
        id: 'who-is-it-for',
        description: '適合的遊客類型',
        content: [
          {
            type: 'list',
            items: [
              '親子家庭：爸媽可以帶小孩一起玩水，度過歡樂時光。',
              '情侶檔：在 澳門水上樂園 拍下甜蜜合照，享受浪漫的夏日。',
              '好友聚會：大夥一起挑戰刺激設施，笑聲不斷。',
              '散心旅客：即使是一個人，也能在漂流河或泳池中找到放鬆的樂趣。'
            ],
            ordered: false,
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '澳門水上樂園玩樂小技巧',
        titleLevel: 2,
        id: 'tips',
        description: '玩樂小技巧',
        content: [
          {
            type: 'list',
            items: [
              '提早入園：早點到達，避免人潮高峰。',
              '優先玩室內設施：若天氣不佳或想避暑，可以優先在室內區探索。',
              '準備防水用品：防水手機套、毛巾必不可少。',
              '留意園區規定：部分設施有身高限制，玩之前先了解清楚。'
            ],
            ordered: true,
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '新濠影滙澳門水上樂園門票與開放時間',
        titleLevel: 2,
        id: 'tickets-hours',
        image: {
          src: '/entertainment/id2/open-4033043_1920.jpg',
          alt: '新濠影滙澳門水上樂園門票與開放時間',
          width: 800,
          height: 450
        },
        description: '門票與開放時間資訊',
        content: [
          {
            type: 'list',
            items: [
              '標準票價：成人票約 MOP 520，兒童票（1.0m ~ 1.19m）約 MOP 320。',
              '特殊日期 / 旺季票價：節假日或特定日期票價可能調整為 MOP 580 等級。',
              '冬季票價（僅室內可用）：成人票 MOP 398、兒童票 MOP 258（視季節及園區開放情況而定）',
              '開放時間：12:00 至 20:00 為主要營運時段。入口與票務處時間：室內與戶外入口在不同行程時間開放。'
            ],
            ordered: false,
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '如何前往？',
            id: 'how-to-get-there',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '澳門交通便利，不論你住在哪裡，都能輕鬆抵達 澳門水上樂園。如果不想自己搭車，可以選擇龍匯天下澳門包車服務，或搭乘接駁車直達。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '結語',
        titleLevel: 2,
        id: 'conclusion',
        description: '結語',
        content: [
          {
            type: 'text',
            content: '如果你以為澳門只有賭場、購物與美食，那你就錯過了最適合夏日的去處。澳門水上樂園 不僅是一個玩水的地方，更是一個和親朋好友共享歡樂時光的最佳選擇。下次來澳門，別忘了留一天給 澳門水上樂園，讓清涼與刺激成為你旅程中最難忘的回憶。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
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
        content: '說到澳門旅遊，不得不提「澳門百老匯」這個集美食、娛樂與文化於一體的熱門地點。無論是自由行旅客還是家庭出遊，澳門百老匯都是不可錯過的行程之一。它不僅擁有豐富多元的地道美食，更有精彩不斷的現場表演與舒適的住宿選擇，讓遊客在短短數日內體驗澳門的多重魅力。',
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
        { level: 1, text: '美食天堂：澳門百老匯美食街', id: 'food-paradise' },
        { level: 1, text: '澳門百老匯：娛樂焦點', id: 'entertainment-focus' },
        { level: 1, text: '澳門百老匯酒店：舒適住宿', id: 'hotel-accommodation' },
        { level: 1, text: '小型娛樂場，輕鬆體驗博彩樂趣', id: 'casino' },
        { level: 1, text: '為什麼選擇澳門百老匯？', id: 'why-choose' }
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
        title: '美食天堂：澳門百老匯美食街',
        titleLevel: 2,
        id: 'food-paradise',
        image: {
          src: '/entertainment/id3/pancakes-2291908_1280.jpg',
          alt: '美食天堂：澳門百老匯美食街',
          width: 800,
          height: 450
        },
        description: '澳門百老匯美食街介紹',
        content: [
          {
            type: 'text',
            content: '澳門百老匯最吸引人的亮點之一就是其聞名遐邇的「澳門百老匯美食街」。這裡雲集了來自澳門、香港、台灣與東南亞的街頭美食與老字號名店，提供超過40間小吃攤與特色餐廳。從正宗葡式蛋撻、澳門豬扒包，到香港雲吞麵與台灣珍珠奶茶，應有盡有，是吃貨的天堂。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '許多餐廳更曾獲得米芝蓮推介或國際媒體報導，是體驗正宗亞洲街頭味道的最佳地點。不論你想輕鬆吃個快餐，還是坐下來慢慢品嚐地道風味，澳門百老匯美食街都能滿足你的味蕾。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '澳門百老匯：娛樂焦點',
        titleLevel: 2,
        id: 'entertainment-focus',
        image: {
          src: '/entertainment/id3/new-years-eve-1953253_1280.jpg',
          alt: '澳門百老匯：娛樂焦點',
          width: 800,
          height: 450
        },
        description: '澳門百老匯舞台介紹',
        content: [
          {
            type: 'text',
            content: '「澳門百老匯舞台」是澳門百老匯的另一大賣點。這座可容納逾三千人的劇院，經常邀請亞洲各地的明星藝人來澳演出，包括音樂會、戲劇、舞蹈與魔術表演等，類型多元，老少咸宜。無論你是來欣賞流行音樂、懷舊金曲還是文藝演出，這裡都能找到讓你心動的節目。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '如果你計劃到澳門旅行，不妨提前查詢百老匯舞台的演出時程，預訂門票，為行程增添文化氣息與視聽享受。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '澳門百老匯酒店：舒適住宿',
        titleLevel: 2,
        id: 'hotel-accommodation',
        image: {
          src: '/entertainment/id3/couch-447484_1280.jpg',
          alt: '澳門百老匯酒店：舒適住宿',
          width: 800,
          height: 450
        },
        description: '澳門百老匯酒店介紹',
        content: [
          {
            type: 'text',
            content: '來到澳門百老匯，當然也要住得好。「澳門百老匯酒店」是一家四星級酒店，提供約320間現代化客房，設計簡約時尚，極具舒適感。酒店與澳門銀河渡假城僅一街之隔，透過有蓋天橋即可來往兩地，無論是購物、娛樂或享受設施都非常便利。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '酒店設有健身中心、泳池與兒童設施，十分適合親子或情侶入住，且價格親民，是追求高CP值住宿的好選擇。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '小型娛樂場，輕鬆體驗博彩樂趣',
        titleLevel: 2,
        id: 'casino',
        description: '小型娛樂場介紹',
        content: [
          {
            type: 'text',
            content: '如果你對博彩感興趣但不想走進大型賭場，澳門百老匯的娛樂場是個不錯的起點。這裡規模不大，主打角子機與少量賭桌，氛圍輕鬆，適合初次體驗博彩的遊客。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '為什麼選擇澳門百老匯？',
        titleLevel: 2,
        id: 'why-choose',
        description: '總結',
        content: [
          {
            type: 'text',
            content: '「澳門百老匯」不只是個美食街，更是一個充滿活力的娛樂與文化據點。不論你是為了吃、玩、看表演還是住宿，它都能一次滿足你的需求。下一次計劃到澳門旅遊，不妨把澳門百老匯列入行程，讓你的旅程更加豐富精彩！想要在百老匯訂房的朋友，可以加入下方官方Line給你滿滿的折扣喔～',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
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
        content: '藝術、夜景與在地融合的極致體驗，這可不是一般來【澳門永利】的觀光客能夠擁有的，但經過小編的整理，只要看完這篇文章，你就懂啦，走起！',
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
        { level: 1, text: '【澳門永利】夜間亮點｜水舞聲光秀的沉浸式觀賞訣竅', id: 'night-highlights' },
        { level: 1, text: '【澳門永利】藝術底蘊｜全球頂級收藏的免費導覽路線', id: 'art-collection' },
        { level: 1, text: '【澳門永利】空間設計｜建築迷必訪的隱藏幾何美學', id: 'architectural-design' },
        { level: 1, text: '【澳門永利】在地融合｜米其林餐廳裡的澳門老味道', id: 'local-fusion' },
        { level: 1, text: '【澳門永利】靜謐時光｜避開人潮的私房休憩點', id: 'quiet-time' }
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
        title: '【澳門永利】夜間亮點｜水舞聲光秀的沉浸式觀賞訣竅',
        titleLevel: 2,
        id: 'night-highlights',
        image: {
          src: '/entertainment/id4/Wynn_Macau_Night.jpg',
          alt: '【澳門永利】夜間亮點｜水舞聲光秀的沉浸式觀賞訣竅',
          width: 800,
          height: 450
        },
        description: '水舞聲光秀觀賞訣竅',
        content: [
          {
            type: 'text',
            content: '永利皇宮「表演湖」水舞秀每20分鐘一場，多數遊客擠在北側主舞台，卻忽略南側「湖畔步道」的絕佳視角。實測發現，晚間9點後的場次搭配《梁祝》交響樂時，南側能完整捕捉水柱與澳門塔重疊的畫面。建議提前10分鐘卡位，搭配永利提供的免費降噪耳機（於服務台押證件借用），音效清晰度提升40%。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門永利】藝術底蘊｜全球頂級收藏的免費導覽路線',
        titleLevel: 2,
        id: 'art-collection',
        image: {
          src: '/entertainment/id4/travel-macau-palace-02-e1531104975436.jpg',
          alt: '【澳門永利】藝術底蘊｜全球頂級收藏的免費導覽路線',
          width: 800,
          height: 450
        },
        description: '全球頂級藝術收藏',
        content: [
          {
            type: 'text',
            content: '永利館內展示的藝術品總值超過22億美元，卻鮮少人知道每日11:00與15:00有「中英雙語導覽團」。必看三件鎮館之寶：',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '1.清朝翡翠玉雕《瑤池獻壽》（全球僅存3件）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '2.Jeff Koons的《鬱金香》不鏽鋼雕塑（亞洲唯一公開展品）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '3.葡萄牙皇室流出的18世紀鍍金水晶吊燈',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '導覽員會解密藝術品運輸來澳的幕後故事，全程約50分鐘，無需預約。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門永利】空間設計｜建築迷必訪的隱藏幾何美學',
        titleLevel: 2,
        id: 'architectural-design',
        image: {
          src: '/entertainment/id4/33437351888_816874ce19_c.jpg',
          alt: '【澳門永利】空間設計｜建築迷必訪的隱藏幾何美學',
          width: 800,
          height: 450
        },
        description: '建築設計的隱藏美學',
        content: [
          {
            type: 'text',
            content: '由傳奇設計師Thomas Heatherwick打造的「萬利大堂」，其螺旋金色穹頂暗藏視覺陷阱——站在特定角度（大堂東側第3根立柱前），會發現穹頂紋路與地面大理石形成無限延伸的莫比烏斯環。黃昏5:30-6:00的自然光斜射時，還能拍到金色光影在廊柱間流動的獨特效果。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門永利】在地融合｜米其林餐廳裡的澳門老味道',
        titleLevel: 2,
        id: 'local-fusion',
        image: {
          src: '/entertainment/id4/wm-winglei-video-cover-image.jpg',
          alt: '【澳門永利】在地融合｜米其林餐廳裡的澳門老味道',
          width: 800,
          height: 450
        },
        description: '米其林餐廳的澳門老味道',
        content: [
          {
            type: 'text',
            content: '永利軒的「金湯龍蝦粥」改良自澳門漁村古法，每日限熬8鍋的湯底需用15斤本地龍蝦頭熬製6小時。二樓包廂牆面更暗藏巧思——鑲嵌路環漁民捐贈的百年蠔殼牆，用餐時可向主廚申請參觀廚房內的傳統炭火砂鍋區，見證新舊烹飪技藝的碰撞。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門永利】靜謐時光｜避開人潮的私房休憩點',
        titleLevel: 2,
        id: 'quiet-time',
        image: {
          src: '/entertainment/id4/92381538_2547630908899579_5770666828535693312_n.jpg',
          alt: '【澳門永利】靜謐時光｜避開人潮的私房休憩點',
          width: 800,
          height: 450
        },
        description: '私房休憩點',
        content: [
          {
            type: 'text',
            content: '多數遊客聚集在賭場與購物區時，行家會轉戰「永利藝廊」後方的茶道空間。每日14:00-17:00提供免費普洱茶席（含3款陳年茶餅品鑑），搭配澳門本地藝術家創作的「聲景裝置」，耳機內播放的是錄製於氹仔舊城的市井聲響，創造出鬧中取靜的五感體驗。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '結語：怎麼樣?澳門永利很值得一去吧，快點擊下方龍匯天下官方賴連結或是追蹤官方IG了結更多吧~',
            style: { 
              marginBottom: '20px', 
              marginTop: '20px', 
              fontSize: '0.8rem'
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
        content: '想在澳門永利享受頂級住宿，卻擔心荷包失血或人擠人？2024年實測發現，80%台灣旅客直接官網訂房，都2025年了，可千萬別再這麼做！為什麼呢?文末我再告訴你~',
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
        { level: 1, text: '【澳門永利】避開人潮的黃金入住時段', id: 'golden-check-in' },
        { level: 1, text: '【澳門永利】免費沉浸式光影展', id: 'light-exhibition' },
        { level: 1, text: '【澳門永利】24小時接駁車路線', id: 'shuttle-service' },
        { level: 1, text: '【澳門永利】免費兒童水療體驗', id: 'kids-spa' },
        { level: 1, text: '【澳門永利】用細節打造頂級回憶', id: 'premium-memories' }
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
        title: '【澳門永利】避開人潮的黃金入住時段',
        titleLevel: 2,
        id: 'golden-check-in',
        image: {
          src: '/entertainment/id5/jSvoqYEn5cl3Kixj.jpg',
          alt: '【澳門永利】避開人潮的黃金入住時段',
          width: 800,
          height: 450
        },
        description: '黃金入住時段',
        content: [
          {
            type: 'text',
            content: '【澳門永利】旗下酒店（永利澳門、永利皇宮）在平日15:00後辦理入住可享「延遲退房至16:00」禮遇，房客避開10:00-12:00的旅行團尖峰時段，平均省下40分鐘等待時間。去年實測發現，週日15:30入住永利皇宮表演湖景房，房價比週五便宜32%，且可獨享纜車包廂優先通行權。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門永利】免費沉浸式光影展',
        titleLevel: 2,
        id: 'light-exhibition',
        image: {
          src: '/entertainment/id5/jpg.jpg',
          alt: '【澳門永利】免費沉浸式光影展',
          width: 800,
          height: 450
        },
        description: '免費沉浸式光影展',
        content: [
          {
            type: 'text',
            content: '去年6月新開幕的「光影藝境」展區位於永利澳門1樓，每日10:00-22:00開放免費參觀。必拍點：AI互動式《花海迷蹤》投影牆（每20分鐘變換季節主題），以及台灣藝術家林明弘合作的「牡丹AR擴增實境」裝置，掃描QR Code即可生成專屬數位藝術明信片。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門永利】24小時接駁車路線',
        titleLevel: 2,
        id: 'shuttle-service',
        description: '24小時接駁車服務',
        content: [
          {
            type: 'text',
            content: '永利提供全澳唯一「深夜專車」服務，每日23:00-05:00每20分鐘一班往返澳門機場與路氹城，憑房卡可攜帶28吋行李箱上車。實測凌晨1點從永利皇宮到澳門塔車程僅8分鐘，比日間省時50%。台灣旅客建議下載「Wynn Resorts」APP即時查詢車輛定位。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門永利】免費兒童水療體驗',
        titleLevel: 2,
        id: 'kids-spa',
        image: {
          src: '/entertainment/id5/iridium-spa.jpg',
          alt: '【澳門永利】免費兒童水療體驗',
          width: 800,
          height: 450
        },
        description: '免費兒童水療體驗',
        content: [
          {
            type: 'text',
            content: '永利皇宮2024年新增「小名媛水療坊」，6-12歲兒童可免費體驗30分鐘的巧克力手部護理（需提前1天預約）。家長同步預訂「雙人90分鐘熱石按摩」，享水療中心包場使用權與無邊際泳池獨家時段，家庭客平均節省68%附加費用。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門永利】用細節打造頂級回憶',
        titleLevel: 2,
        id: 'premium-memories',
        image: {
          src: '/entertainment/id5/original_20250620170058_269.jpg',
          alt: '【澳門永利】用細節打造頂級回憶',
          width: 800,
          height: 450
        },
        description: '用細節打造頂級回憶',
        content: [
          {
            type: 'text',
            content: '從避開人潮的彈性入住時段、台灣限定的餐飲代碼，到深夜接駁車與兒童專屬服務，澳門永利透過差異化體驗提升旅客回訪率。2024年數據顯示，活用隱藏優惠的台灣客群，平均以2.3萬台幣預算即可享受3天2夜的全套尊榮禮遇，性價比超越同級度假村！',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '還在等什麼?快點擊下方連結加入「龍匯天下」官方賴預訂，也別忘了追蹤龍匯天下官方IG解鎖你的VIP級澳門之旅吧！',
            style: { 
              marginBottom: '20px', 
              marginTop: '20px', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      }
    ]
  },
  6: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '來到澳門旅遊最不能錯過的就是《水舞間》，耗資超過二十億港元，是全球最壯觀最大型的水上匯演舞台劇，還曾榮獲2011年度「HKMA/TVB 傑出市場策劃獎」金獎；表演橋段結合高難度特技、絢爛炫目燈光、特殊服裝以及絕佳空間設計，視覺、聽覺都讓人驚豔，小編今天特別整理出了超吸引人的獨家亮點，包準你看完就想去！Let\'s Go！',
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
        { level: 1, text: '【澳門水舞間】世界最大水上舞台｜解構3項破紀錄硬實力', id: 'world-largest-stage' },
        { level: 1, text: '【澳門水舞間】人類極限巔峰｜8大無法複製的「水上特技標籤」', id: 'human-limits' },
        { level: 1, text: '【澳門水舞間】沉浸式水科技｜顛覆認知的「水體操控術」', id: 'water-technology' },
        { level: 1, text: '【澳門水舞間】真實「零距離暴擊」體驗｜行家認證的3個腎上腺素開關', id: 'zero-distance' },
        { level: 1, text: '【澳門水舞間】永續型娛樂革命｜澳門首創「零碳表演」3大實證', id: 'sustainable-entertainment' }
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
        title: '【澳門水舞間】世界最大水上舞台｜解構3項破紀錄硬實力',
        titleLevel: 2,
        id: 'world-largest-stage',
        image: {
          src: '/entertainment/id6/20191018005842_62.jpg',
          alt: '【澳門水舞間】世界最大水上舞台｜解構3項破紀錄硬實力',
          width: 800,
          height: 450
        },
        description: '世界最大水上舞台',
        content: [
          {
            type: 'text',
            content: '耗資20億港幣建造的專屬劇院暗藏工程奇蹟：',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '2700噸海水懸空：9米深泳池容積相當於4個奧運標準池，5秒內可切換陸地/水域模式',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '360度旋轉觀眾席：機械臂驅動的環形看台，2700個座位同步旋轉23°捕捉最佳視角',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '水下爆破系統：德國Schüknecht特製低溫火焰，實現水面爆破零安全距離',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門水舞間】人類極限巔峰｜8大無法複製的「水上特技標籤」',
        titleLevel: 2,
        id: 'human-limits',
        image: {
          src: '/entertainment/id6/353947c95955fd030aa469fcb6304093.jpg',
          alt: '【澳門水舞間】人類極限巔峰｜8大無法複製的「水上特技標籤」',
          width: 800,
          height: 450
        },
        description: '（獲吉尼斯世界紀錄認證）',
        content: [
          {
            type: 'text',
            content: '（獲吉尼斯世界紀錄認證）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }
          },
          {
            type: 'text',
            content: '28米高空跳水：從相當於9層樓高度俯衝入水，衝擊力達3.5G',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '濕身摩托飛越：8輛重型機車以75km/h時速衝破15米火牆',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '同步深潛威亞：16名演員在7米水下完成360度雙軸翻轉',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '流體力學軟骨：特技員穿過直徑僅1.2米的旋轉水環',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門水舞間】沉浸式水科技｜顛覆認知的「水體操控術」',
        titleLevel: 2,
        id: 'water-technology',
        image: {
          src: '/entertainment/id6/24_100047378032.jpg',
          alt: '【澳門水舞間】沉浸式水科技｜顛覆認知的「水體操控術」',
          width: 800,
          height: 450
        },
        description: '澳門獨家研發的劇場黑科技',
        content: [
          {
            type: 'text',
            content: '澳門獨家研發的劇場黑科技：',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '量子水幕投影：0.3秒生成8K影像的奈米級水粒子幕牆',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '聲控噴泉矩陣：2000個智能噴嘴即時響應觀眾尖叫聲波',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '流體雕塑裝置：法國藝術家Yann Nguema打造動態水雕，每分鐘變換12種幾何形態',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '氣味水霧系統：瑞士Givaudan特調「海水/火焰/金屬」三頻香氛分子',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門水舞間】真實「零距離暴擊」體驗｜行家認證的3個腎上腺素開關',
        titleLevel: 2,
        id: 'zero-distance',
        image: {
          src: '/entertainment/id6/32057375.jpg',
          alt: '【澳門水舞間】真實「零距離暴擊」體驗｜行家認證的3個腎上腺素開關',
          width: 800,
          height: 450
        },
        description: '澳門旅遊局認證的極致玩法',
        content: [
          {
            type: 'text',
            content: '澳門旅遊局認證的極致玩法：',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '1.爆破熱浪區（A區前5排）：臉部可感受水面爆破的45°C熱風衝擊波',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '2.墜水震撼區（G區15-20排）：親歷高空跳水引發的2米人工浪花',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '3.濕身互動席（VIP區S12-S18）：自帶防水套裝，體驗摩托艇衝刺濺射的3D水軌',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門水舞間】永續型娛樂革命｜澳門首創「零碳表演」3大實證',
        titleLevel: 2,
        id: 'sustainable-entertainment',
        image: {
          src: '/entertainment/id6/header_mobile.jpg',
          alt: '【澳門水舞間】永續型娛樂革命｜澳門首創「零碳表演」3大實證',
          width: 800,
          height: 450
        },
        description: '（2025年獲BSI碳中和認證）',
        content: [
          {
            type: 'text',
            content: '（2025年獲BSI碳中和認證）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }
          },
          {
            type: 'text',
            content: '海水循環黑科技：每場節省380噸淡水，等同300個家庭日用量',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '生質能火焰：用廚餘提煉的環保燃料取代液化石油氣',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '可降解特效：爆破殘留物72小時內自然分解，獲歐盟REACH認證',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '結語：看完有沒有心癢癢的?還不快點擊下方龍匯天下官方賴連結安排起來~',
            style: { 
              marginBottom: '10px', 
              marginTop: '20px', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '另外也可以追蹤龍匯天下官方IG喔~',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      }
    ]
  },
  7: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '澳門的夜，指尖暗藏玄機！半島小巷裡的 「18+沉浸式按摩」 ，用熱石與精油解鎖你不敢說的渴望：雙人鴛鴦浴缸暗門、角色扮演情境理療、VIP密室筋膜調教...',
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
        { level: 1, text: '【澳門按摩】行家首選｜安全與慾望的平衡藝術', id: 'expert-choice' },
        { level: 1, text: '【澳門按摩】安全潛規則｜行家絕不透露的3大鐵律', id: 'safety-rules' },
        { level: 1, text: '【澳門按摩】老司機暗戰指南｜這樣玩才專業', id: 'expert-guide' },
        { level: 1, text: '【澳門按摩】各式獨家情報想了解更多', id: 'more-info' }
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
        title: '【澳門按摩】行家首選｜安全與慾望的平衡藝術',
        titleLevel: 2,
        id: 'expert-choice',
        image: {
          src: '/entertainment/id7/j1vnDH3rlkAl6fgv.jpg',
          alt: '【澳門按摩】行家首選｜安全與慾望的平衡藝術',
          width: 800,
          height: 450
        },
        description: '行家首選的按摩服務',
        content: [
          {
            type: 'heading',
            level: 3,
            content: '「幻境芳療」角色調情套餐',
            id: 'fantasy-aromatherapy',
            style: { marginTop: '0', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '從空姐制服到女總裁套裝任選，在香薰蒸氣房進行「機密文件搜查」按摩，觸發「登機通道」筋膜刀特殊手法',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '暗號：預約時說「需要深度安檢」可解鎖耳後淋巴挑逗技法',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '安全機制：玻璃門一鍵霧化＋緊急暫停鈕',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '「黑金地庫」雙人密室調教',
            id: 'black-gold-basement',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'image',
            src: '/entertainment/id7/huNfydHrZHjk6RSl.jpg',
            alt: '「黑金地庫」雙人密室調教',
            width: 800,
            height: 450,
            style: {
              marginTop: '10px',
              marginBottom: '20px'
            }
          },
          {
            type: 'text',
            content: '全澳門唯一磁浮按摩床，用紅外線熱成像技術定位「壓力敏感帶」，輸家需佩戴震動鈴鐺完成反向指壓挑戰',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 4,
            content: '隱私設計',
            id: 'privacy-design',
            style: { marginTop: '10px', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '獨立電梯直達地下三層，車牌自動打碼',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '離場可選「記憶清除模式」刪除監控片段',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '「慾望方程式」熱石暗語療程',
            id: 'desire-equation',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '用加溫黑曜石排列摩斯密碼，破譯錯誤將觸發「懲罰性刮痧」，正確解法可開啟浴缸暗格領取香檳',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '玩家攻略：自備絲質眼罩可提升NPC互動等級',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門按摩】安全潛規則｜行家絕不透露的3大鐵律',
        titleLevel: 2,
        id: 'safety-rules',
        image: {
          src: '/entertainment/id7/yNOww9drTyNm2ETM.jpg',
          alt: '【澳門按摩】安全潛規則｜行家絕不透露的3大鐵律',
          width: 800,
          height: 450
        },
        description: '安全潛規則',
        content: [
          {
            type: 'heading',
            level: 3,
            content: '「三層驗證」隱私盾牌',
            id: 'three-layer-verification',
            style: { marginTop: '0', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '第一關：預約時提供已實名電話（僅用於接收密碼）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '第二關：到店輸入動態加密碼（限時10分鐘）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '第三關：更衣室指靜脈辨識啟動服務',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '敏感帶安全協定',
            id: 'sensitive-zone-protocol',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '可勾選「禁區地圖」：標記不開放部位（例：腰窩/大腿內側）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '緊急暫停指令：咳嗽三次或拉動鍍金鈴鐺繩',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '離場反跟蹤系統',
            id: 'anti-tracking',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '提供「偽裝出口」：從便利店後門離開',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '叫車顯示虛擬目的地：「澳門塔觀景台」',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門按摩】老司機暗戰指南｜這樣玩才專業',
        titleLevel: 2,
        id: 'expert-guide',
        description: '老司機暗戰指南',
        content: [
          {
            type: 'heading',
            level: 3,
            content: '挑逗技法層次學',
            id: 'seduction-techniques',
            style: { marginTop: '0', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: 'Level 1：用熱毛巾敷頸時「不經意」滑過鎖骨',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: 'Level 2：耳語詢問「要不要試試巴厘島式手法」',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: 'Level 3：以「疏通經絡」名義啟動泰式反向騎壓',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '設備心機清單',
            id: 'equipment-tips',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '震動頻率加密：按摩椅頻率對應不同劇情音效（海浪/喘息/耳語）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '精油溫度陷阱：40°C觸發常規療程，45°C解鎖隱藏指壓路徑',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '小費潛規則',
            id: 'tipping-rules',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'list',
            items: [
              '塞在絲質眼罩夾層＝期待更多驚喜',
              '放入特製功德箱＝要求正規服務',
              '用美金折成玫瑰＝預約下次私密時段'
            ],
            ordered: false,
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門按摩】各式獨家情報想了解更多',
        titleLevel: 2,
        id: 'more-info',
        description: '更多資訊',
        content: [
          {
            type: 'text',
            content: '立即點擊 龍匯天下 官方賴入口，別忘了追蹤龍匯天下官方IG',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      }
    ]
  },
  8: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '【澳門美高梅】不只奢華賭場！從海底藝術殿堂到空中糖雕塑、免費水上大秀，這座娛樂王國藏著連在地人都驚豔的玩法。教你用賭場積分換免費下午茶、解鎖房客專屬機位，連非住客都能爽玩一整天！',
        style: { 
          marginBottom: '20px',
          fontSize: '0.8rem'
        }
      }
    ],
    // Table of contents
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '【澳門美高梅】必玩亮點｜連IG網紅都不知道的秘技', id: 'mgm-highlights' },
        { level: 1, text: '【澳門美高梅】隱藏福利｜不花錢當VIP的5大招', id: 'mgm-benefits' },
        { level: 1, text: '【澳門美高梅】美食全攻略｜百元吃米其林星級', id: 'mgm-food' },
        { level: 1, text: '【澳門美高梅】QA懶人包｜破解3大痛點', id: 'mgm-qa' }
      ],
      style: {
        backgroundColor: 'rgba(83, 52, 4, 0.842)',
        borderRadius: '8px',
        padding: '16px',
        marginTop: '20px',
        marginBottom: '20px'
      }
    },
    // Main content sections
    sections: [
      {
        type: 'section',
        title: '【澳門美高梅】必玩亮點｜連IG網紅都不知道的秘技',
        titleLevel: 2,
        id: 'mgm-highlights',
        image: {
          src: '/entertainment/id8/spectacle-image-resize-web-banner-748x307.jpg',
          alt: '視博廣場海底奇境',
          width: 800,
          height: 450
        },
        content: [
          {
            type: 'heading',
            level: 3,
            content: '「視博廣場」海底奇境',
            id: 'spectacle-square',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '25米高水族幕牆藏著「黃金時段」！每日11:30/15:30/19:30有潛水員餵食秀，推薦站在「東翼手扶梯」俯拍全景。',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '隱藏玩法：向櫃檯出示任何消費發票，可預約「15分鐘水族館後台導覽」',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '「天幕廣場」光影魔法-—情侶必收',
            id: 'sky-roof-square',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'image',
            src: '/entertainment/id8/MGM-MACAU-Grande.jpg',
            alt: '天幕廣場光影魔法',
            width: 800,
            height: 450,
            style: {
              marginTop: '10px',
              marginBottom: '20px'
            }
          },
          {
            type: 'text',
            content: '歐洲風玻璃天幕下藏著「3大隱藏機位」：',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '1.二樓「甜點廊」露台拍出無人穹頂',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'image',
            src: '/entertainment/id8/1bb623ec4985a744ce45fd34517fa185.jpg',
            alt: '二樓甜點廊露台',
            width: 800,
            height: 450,
            style: {
              marginTop: '10px',
              marginBottom: '20px'
            }
          },
          {
            type: 'text',
            content: '2.旋轉樓梯底層仰角捕捉彩繪玻璃',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '3.每整點啟動「聲光投影秀」時，站在廣場中央黑磚上',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '另外每日18:00後免費提供「光影互動道具」租借喔~',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'heading',
            level: 3,
            content: '《華府》水上大秀-—-零元神級體驗',
            id: 'hua-fu-show',
            style: { marginTop: '20px', marginBottom: '10px' }
          },
          {
            type: 'text',
            content: '【澳門美高梅】獨家免費表演！',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '空中飛人＋火焰特效＋水上芭蕾，最佳觀賞位在「盛事餐廳」前第三排圓桌（需開演前1小時卡位）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '時間：週五～週日17:00、20:00｜',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '房客福利：憑房卡可進「VIP露台區」',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門美高梅】隱藏福利｜不花錢當VIP的5大招',
        titleLevel: 2,
        id: 'mgm-benefits',
        content: [
          {
            type: 'text',
            content: '免費藝術導覽：大廳的《復甦之蝶》雕塑、28件當代藝術品，每日14:00有專人解說（需官網預約）',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '賭場積分變現：累積200分換「甜點廊」葡撻6顆，500分換「盛事餐廳」龍蝦湯',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '兒童放電區：北翼「童樂天地」免費玩VR賽車＋糖藝DIY(需抵押證件)',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '房型升級術：Check-in時說「我想參觀天幕套房」，50%機率免費升等',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '深夜甜點車：23:00後在大廳遊走的「黃金馬車」，憑任意消費可領熔岩巧克力',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門美高梅】美食全攻略｜百元吃米其林星級',
        titleLevel: 2,
        id: 'mgm-food',
        content: [
          {
            type: 'text',
            content: '蜀道（川菜天花板）：午市「麻婆豆腐＋鐘水餃」，贈花椒巧克力',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '濤岸（必比登推薦）：隱藏菜單「澳門限定豬扒包」每日14:30出爐，外帶價省30%',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '甜點廊（打卡必衝）：必吃「金獅奶黃月餅」每日限量100顆（10:00/16:00出爐）',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '省錢密技：下載「MGM Live」APP領「買一送一卷」，適用咖啡苑自助餐',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門美高梅】QA懶人包｜破解3大痛點',
        titleLevel: 2,
        id: 'mgm-qa',
        content: [
          {
            type: 'text',
            content: 'Q：非住客能進泳池嗎？',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }
          },
          {
            type: 'text',
            content: 'A：絕對可以！購買「水療中心」任一套餐，即可免費使用天幕泳池',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: 'Q：如何避開人潮拍美照？',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }
          },
          {
            type: 'text',
            content: 'A：兩大秘訣：',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '利用「早晨8:00-9:30」清場時段，整個天幕廣場隨你拍',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '參加「深夜藝術導覽」-—-23:00場次，獨佔《聲如千紙鶴》互動裝置',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: 'Q：帶長輩適合玩什麼？',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }
          },
          {
            type: 'text',
            content: 'A：必推三大行程：',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '1.免費《華府》水上秀＋天幕廣場下午茶',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '2.預約「養生水療套餐」含中醫把脈諮詢',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '3.搭乘「金獅穿梭巴士」直達媽閣廟',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '手刀追蹤 龍匯天下官方IG，點擊下方官方LINE獲取更多獨家行程情報！',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      }
    ]
  },
  9: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '誰說【澳門賭場】只有老虎機和牌桌？這座東方拉斯維加斯藏著太多你不知道的驚喜！今天就跟著小編解鎖【澳門賭場】的另類玩法，連本地人都驚呼"原來還能這樣玩"～',
        style: { 
          marginBottom: '20px',
          fontSize: '0.8rem'
        }
      }
    ],
    // Table of contents
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '【澳門賭場】新葡京必看！價值連城的"何鴻燊收藏館"免費開放', id: 'grand-lisboa-collection' },
        { level: 1, text: '【澳門賭場】永利皇宮免費纜車+音樂噴泉終極觀賞指南', id: 'wynn-palace-cable-car' },
        { level: 1, text: '【澳門賭場】裡的米其林美食地圖誰說高級餐廳一定貴？', id: 'michelin-food-map' },
        { level: 1, text: '【澳門賭場】 內行人才知道的購物秘笈', id: 'shopping-secrets' },
        { level: 1, text: '【澳門賭場】小白必學3招防尷尬技巧', id: 'beginner-tips' },
        { level: 1, text: '【澳門賭場】冷知識Q&A', id: 'casino-qa' }
      ],
      style: {
        backgroundColor: 'rgba(83, 52, 4, 0.842)',
        borderRadius: '8px',
        padding: '16px',
        marginTop: '20px',
        marginBottom: '20px'
      }
    },
    // Main content sections
    sections: [
      {
        type: 'section',
        title: '【澳門賭場】新葡京必看！價值連城的"何鴻燊收藏館"免費開放',
        titleLevel: 2,
        id: 'grand-lisboa-collection',
        image: {
          src: '/entertainment/id9/bbc44a3b295e4636b9ae65a5394e9308_20250522202411_4729.jpg',
          alt: '【澳門賭場】新葡京必看！價值連城的"何鴻燊收藏館"免費開放',
          width: 800,
          height: 450
        },
        content: [
          {
            type: 'text',
            content: '新葡京大堂那座金光閃閃的圓明園馬首銅像只是開胃菜！',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '乘電梯到42層"何鴻燊收藏館"，你會看到：',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '218克拉的"何鴻燊之星"鉆石在防彈玻璃裡閃耀',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '明朝永樂年間的青花瓷要價2億港幣',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '拿破侖親筆信和維多利亞女王珠寶匣',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '貼心提示：每天14:00有中文導覽，周四閉館維護別撲空哦！',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門賭場】永利皇宮免費纜車+音樂噴泉終極觀賞指南',
        titleLevel: 2,
        id: 'wynn-palace-cable-car',
        image: {
          src: '/entertainment/id9/9_compressed-1200x900_20250522202411_4729.jpg',
          alt: '【澳門賭場】永利皇宮免費纜車+音樂噴泉終極觀賞指南',
          width: 800,
          height: 450
        },
        content: [
          {
            type: 'text',
            content: '永利皇宮的表演湖藏著澳門最浪漫的夜景：',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '19:00-23:00每20分鐘上演《月亮代表我的心》水舞秀',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '最佳機位在購物長廊二樓露台（人少還能拍到倒影）',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '免費纜車建議黃昏時分搭乘，透明車廂要排隊但超值',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '秘密情報：非住客也能坐纜車，出示任意【澳門賭場】會員卡可走快速通道！',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門賭場】裡的米其林美食地圖誰說高級餐廳一定貴？',
        titleLevel: 2,
        id: 'michelin-food-map',
        content: [
          {
            type: 'text',
            content: '這些【澳門賭場】美食藏著大智慧：',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '【新濠天地】米其林一星"金阪極上壽司"午市套餐僅需480澳門幣',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'image',
            src: '/entertainment/id9/IMG_1256_20250522202548_8026.jpg',
            alt: '【澳門賭場】裡的米其林美食地圖',
            width: 800,
            height: 450,
            style: {
              marginTop: '10px',
              marginBottom: '20px'
            }
          },
          {
            type: 'text',
            content: '【威尼斯人】安德魯蛋塔賭場分店根本不用排隊',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'image',
            src: '/entertainment/id9/04_20250522202548_8026.jpg',
            alt: '【澳門賭場】安德魯蛋塔',
            width: 800,
            height: 450,
            style: {
              marginTop: '10px',
              marginBottom: '20px'
            }
          },
          {
            type: 'text',
            content: '【美高梅】免費奶茶吧台',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'image',
            src: '/entertainment/id9/d14d16d4174e8fbbdb46215.jpg_1280_1280_3_8956.jpg',
            alt: '【澳門賭場】免費奶茶吧台',
            width: 800,
            height: 450,
            style: {
              marginTop: '10px',
              marginBottom: '20px'
            }
          },
          {
            type: 'text',
            content: '【澳門賭場】任意消費就能換絲襪奶茶+菠蘿油',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '吃貨秘籍：銀河賭場二樓美食區每周三有"東南亞夜市"，人均低至50澳門幣吃到撐',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門賭場】 內行人才知道的購物秘笈',
        titleLevel: 2,
        id: 'shopping-secrets',
        content: [
          {
            type: 'text',
            content: '1.威尼斯人DFA免稅店早上10點補貨 SK-II套裝比機場便宜30%',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '2.新濠影匯的Chanel賭場店常有限量款（跟SA要"神秘小黑盒"）',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '3.永利皇宮的愛馬仕周四上新，配貨比例比內地低20%',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '血拼小提示：【澳門賭場】消費滿1萬澳門幣可換購物券，疊加上匯率差等於折上折！',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門賭場】小白必學3招防尷尬技巧',
        titleLevel: 2,
        id: 'beginner-tips',
        content: [
          {
            type: 'text',
            content: '第一次進【澳門賭場】也不用慌：',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '免費教學區：金沙城中心每天15:00有百家樂體驗課',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '最低籌碼桌：新葡京二樓有50港幣起玩的輪盤賭',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '飲料密碼：玩老虎機時按"777"鍵可叫免費奶茶',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '特別注意：賭場內禁止拍照，想留念可在大堂水晶燈下打卡',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門賭場】冷知識Q&A',
        titleLevel: 2,
        id: 'casino-qa',
        content: [
          {
            type: 'text',
            content: 'Q：未成年能進賭場嗎？ A：滿21歲才能進博弈區，但購物美食區不限年齡哦！',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: 'Q：賭場有免費交通？ A：各酒店接駁車互通，記得拿"發財車時刻表"',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: 'Q：怎麽穿不會被攔？ A：男士避免拖鞋背心，女士別戴鴨舌帽',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '下次來【澳門賭場】別再只盯著賭桌啦！收藏這篇攻略，解鎖【澳門賭場】的100種隱藏玩法。想知道更多澳門秘境？',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '快追蹤我們的官方IG；龍匯天下，或是點擊下方龍匯天下官方賴連結！',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '（小提醒：賭博需理性，本文推薦皆為非賭博類體驗）',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      }
    ]
  },
  10: {
    // Article description (intro text)
    description: [
      {
        type: 'text',
        content: '澳門永利可不只是賭場那麽簡單！這座金光閃閃的度假王國，藏著米其林星星、夢幻噴泉秀和藝術珍品。今天就讓小編帶你解鎖【澳門永利】度假村的正確打開方式，就算不碰老虎機也能玩到捨不得回家～',
        style: { 
          marginBottom: '20px',
          fontSize: '0.8rem'
        }
      }
    ],
    // Table of contents
    tableOfContents: {
      type: 'tableOfContents',
      buttonText: '文章目錄',
      buttonIcon: '☰',
      items: [
        { level: 1, text: '【澳門永利】必看！吉祥樹與富貴龍交替上演的視覺盛宴', id: 'lucky-tree-dragon' },
        { level: 1, text: '【澳門永利】價值30億的收藏品能免費看，沒想到吧？', id: 'art-collection' },
        { level: 1, text: '【澳門永利】摘星指南，3家米其林餐廳的隱藏吃法！', id: 'michelin-dining' },
        { level: 1, text: '【澳門永利】不用錢交通攻略！', id: 'free-transport' },
        { level: 1, text: '【澳門永利】水療中心秘密，亞洲首家CHANEL SPA體驗！', id: 'spa-secrets' },
        { level: 1, text: '【澳門永利】購物秘笈，DFS獨家限量款這裏都有', id: 'shopping-guide' },
        { level: 1, text: '【澳門永利】常見Q&A', id: 'wynn-qa' }
      ],
      style: {
        backgroundColor: 'rgba(83, 52, 4, 0.842)',
        borderRadius: '8px',
        padding: '16px',
        marginTop: '20px',
        marginBottom: '20px'
      }
    },
    // Main content sections
    sections: [
      {
        type: 'section',
        title: '【澳門永利】必看！吉祥樹與富貴龍交替上演的視覺盛宴',
        titleLevel: 2,
        id: 'lucky-tree-dragon',
        image: {
          src: '/entertainment/id10/AnyConv.com__aa3063a06005f8031bb8d7a84edf0a74.jpg',
          alt: '【澳門永利】必看！吉祥樹與富貴龍交替上演的視覺盛宴',
          width: 800,
          height: 450
        },
        content: [
          {
            type: 'text',
            content: '每天整點準時開演的吉祥樹表演，可是【澳門永利】皇宮的鎮店之寶！12枝金葉片在25米高空綻放的瞬間，配合著《茉莉花》交響樂，連本地人都會特地來看。悄悄告訴你，最佳觀賞位在酒店大堂中央，記得提前15分鐘卡位。表演結束後別急著走，轉身就是會噴火的富貴龍裝置，兩條金龍在琉璃穹頂下盤旋的場面，保證讓你手機拍到沒電！',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'image',
            src: '/entertainment/id10/AnyConv.com__882137f311c5728f8e257e56820af92c.jpg',
            alt: '【澳門永利】富貴龍',
            width: 800,
            height: 450,
            style: {
              marginTop: '10px',
              marginBottom: '20px'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門永利】價值30億的收藏品能免費看，沒想到吧？',
        titleLevel: 2,
        id: 'art-collection',
        image: {
          src: '/entertainment/id10/462589073_2808418332654768_2737103656528930736_n.jpg',
          alt: '【澳門永利】價值30億的收藏品能免費看，沒想到吧？',
          width: 800,
          height: 450
        },
        content: [
          {
            type: 'text',
            content: '【澳門永利】走廊根本是座私人美術館！從清朝瓷器到現代雕塑，最吸睛的是傑夫·昆斯那組彩色不銹鋼《郁金香》，就在北翼入口處閃著糖果色的光。建議下午3點後人潮較少時慢慢逛，每件作品都有中英葡三語解說牌，藝術小白也能看得津津有味～',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門永利】摘星指南，3家米其林餐廳的隱藏吃法！',
        titleLevel: 2,
        id: 'michelin-dining',
        content: [
          {
            type: 'text',
            content: '第一家：京花軒，必點譚師傅招牌黃燜湯，記得加配現烤芝麻燒餅',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'image',
            src: '/entertainment/id10/1478609902-1547224834_l.jpg',
            alt: '【澳門永利】京花軒',
            width: 800,
            height: 450,
            style: {
              marginTop: '10px',
              marginBottom: '20px'
            }
          },
          {
            type: 'text',
            content: '第二家：永利扒房，牛排一定要選澳洲Blackmore和牛，配菜松露薯條是隱藏菜單',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'image',
            src: '/entertainment/id10/sw-steakhouse-will-linger.jpg',
            alt: '【澳門永利】永利扒房',
            width: 800,
            height: 450,
            style: {
              marginTop: '10px',
              marginBottom: '20px'
            }
          },
          {
            type: 'text',
            content: '第三家：皇宮甜藝廊，他們的下午茶必點芒果糯米糍，這可是澳門限定口味別處可吃不到',
            style: { 
              marginBottom: '10px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'image',
            src: '/entertainment/id10/_Desktop_WP_Dining_Detail_Sweets__Hero_Banner.jpg',
            alt: '【澳門永利】皇宮甜藝廊',
            width: 800,
            height: 450,
            style: {
              marginTop: '10px',
              marginBottom: '20px'
            }
          },
          {
            type: 'text',
            content: '貼心提示：提前3天訂位可要求窗邊座，晚上能邊吃邊看表演湖噴泉秀',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門永利】不用錢交通攻略！',
        titleLevel: 2,
        id: 'free-transport',
        content: [
          {
            type: 'text',
            content: '金光纜車最佳乘坐時段 連接【澳門永利】和【澳門永利】皇宮的觀光纜車，黃昏時段最浪漫！建議17:30從皇宮站上車，剛好能俯瞰表演湖的《我心永恒》音樂噴泉。記得選靠湖側的透明車廂，升到最高點時整個路氹城夜景盡收眼底。偷偷說，入住客人出示房卡可走VIP通道免排隊哦！',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門永利】水療中心秘密，亞洲首家CHANEL SPA體驗！',
        titleLevel: 2,
        id: 'spa-secrets',
        image: {
          src: '/entertainment/id10/AnyConv.com__6a8cd3d1058c0355a8cedf3445074f42.jpg',
          alt: '【澳門永利】水療中心秘密，亞洲首家CHANEL SPA體驗！',
          width: 800,
          height: 450
        },
        content: [
          {
            type: 'text',
            content: '【澳門永利】皇宮的「永利水療」藏著澳門唯一CHANEL美容房，90分鐘奢華護理包含全套山茶花產品。非住客也能預約，周三下午常有買一送一優惠。做完護理別錯過恒溫泳池旁的香檳吧，點杯Moët配馬卡龍才是真·名媛範兒～',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門永利】購物秘笈，DFS獨家限量款這裏都有',
        titleLevel: 2,
        id: 'shopping-guide',
        content: [
          {
            type: 'text',
            content: '【澳門永利】名店街的LV有澳門獨家膠囊系列，Gucci二樓藏著全澳最大的珠寶腕表專區，愛馬仕每周四補貨，早上11點去最容易碰到稀有皮，購物達人要特別注意喔！消費滿5萬澳門幣可預約私人購物顧問服務喔~',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      },
      {
        type: 'section',
        title: '【澳門永利】常見Q&A',
        titleLevel: 2,
        id: 'wynn-qa',
        content: [
          {
            type: 'text',
            content: 'Q：帶孩子能入住嗎？ A：12歲以下兒童免費加床，還提供寶格麗兒童洗浴套裝',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: 'Q：非住客能進泳池嗎？ A：水療中心付費項目含泳池使用權，人均消費滿800澳門幣即可',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: 'Q：怎麽拍到沒人的網紅樓梯？ A：早上7點或午夜12點前往皇宮大堂，金色旋梯任你拍',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '下次來澳門別再說永利只有賭場啦！收藏這篇攻略，你會發現這裡根本是座巨型遊樂場。',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          },
          {
            type: 'text',
            content: '您可透過 下方官方賴【澳門永利】獲取更多澳門奢華旅行情報！',
            style: { 
              marginBottom: '20px', 
              marginTop: '0', 
              fontSize: '0.8rem'
            }
          }
        ],
        style: { marginTop: '40px', marginBottom: '40px' }
      }
    ]
  }
};

