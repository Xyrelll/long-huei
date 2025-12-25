'use client';

import Link from 'next/link';

interface Category {
  name: string;
  href: string;
  count: number;
  active?: boolean;
}

interface PopularTag {
  name: string;
  href: string;
}

interface ArticleSidebarProps {
  categories: Category[];
  popularTags: PopularTag[];
  activeCategory?: string;
}

export default function ArticleSidebar({
  categories,
  popularTags,
  activeCategory,
}: ArticleSidebarProps) {
  return (
    <>
      {/* Categories Box */}
      <div
        className="cate-box rounded-[40px] mb-[30px]"
        style={{
          backgroundImage: 'linear-gradient(180deg, #151515 0%, #2d2d2d 100%)',
          padding: '20px 0 10px',
          paddingLeft: '0px',
          height: 'auto',
          width: '100%',
        }}
      >
        <h4
          style={{
            paddingLeft: '20px',
            paddingTop: '10px',
            paddingBottom: '10px',
          }}
          className="text-white text-lg mb-4 flex items-center gap-2 border-b border-white/"
        >
          <i className="bi bi-bookmarks-fill text-white"></i>
          所有文章分類
        </h4>
        <ul
          className="list-none p-0 m-0"
          style={{
            paddingTop: '10px',
            paddingBottom: '10px',
          }}
        >
          {categories.map((category) => (
            <li
              key={category.name}
              style={{
                paddingLeft: '20px',
                paddingTop: '5px',
                paddingBottom: '5px',
              }}
              className="flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-white rounded-sm flex-shrink-0"></span>
              <Link
                href={category.href}
                className={`block py-2 transition-colors ${
                  category.active || category.name === activeCategory
                    ? 'text-[#FFCD83] font-bold'
                    : 'text-white hover:text-[#FFCD83]'
                }`}
              >
                {category.name} ({category.count})
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Tags Box */}
      <div
        className="hot-tags-box rounded-[40px]"
        style={{
          marginTop: '15px',
          backgroundImage: 'linear-gradient(180deg, #301e03 0%, #a76909 100%)',
          paddingRight: '0px',
          paddingBottom: '10px',
          paddingTop: '10px',
          paddingLeft: '0px',
          height: 'auto',
          width: '100%',
        }}
      >
        <h4
          style={{
            paddingLeft: '20px',
            paddingTop: '10px',
            paddingBottom: '10px',
          }}
          className="text-white text-lg mb-4 flex items-center gap-2 border-b border-white/70"
        >
          <i className="bi bi-tags-fill text-white"></i>
          熱門 TAGs
        </h4>
        <div className="w-full h-3" />
        <ul
          className="list-none p-0 m-0 flex flex-wrap gap-2"
          style={{
            paddingLeft: '20px',
            paddingTop: '10px',
            paddingBottom: '20px',
            paddingRight: '20px',
          }}
        >
          {popularTags.map((tag) => (
            <li
              key={tag.name}
              style={{
                paddingLeft: '0px',
                paddingRight: '1px',
              }}
            >
              <Link
                href={tag.href}
                style={{
                  paddingLeft: '0px',
                  paddingRight: '1px',
                }}
                className="h-7 rounded-full bg-black/50 text-[#CD861A] bg-white text-sm flex justify-center items-center hover:bg-[#CD861A] hover:text-white transition-colors"
              >
                &nbsp;&nbsp; {tag.name}&nbsp;&nbsp;
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

