import { Metadata } from "next";
import { generateMetadata as genMeta } from "@/config/metadata";

export const metadata: Metadata = genMeta({
  title: "搜尋 - 龍匯天下",
  description:
    "搜尋澳門旅遊、桑拿、訂房、包車等相關文章。快速找到您需要的澳門旅遊資訊、酒店推薦、包車服務、桑拿體驗等內容。",
  path: "/Search",
  image: "/Images/logo-m.png",
});

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
