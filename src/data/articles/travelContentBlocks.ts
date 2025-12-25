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
  }
};

