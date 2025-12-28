import { Metadata } from "next";
import { generateMetadata as genMeta } from "@/config/metadata";

export const metadata: Metadata = genMeta({
  title: "澳門訂房攻略 - 酒店推薦、住宿選擇全指南",
  description:
    "探索澳門訂房完整攻略，包含頂級酒店推薦、住宿區域指南、訂房省錢技巧等實用資訊。精選澳門訂房必看文章，從酒店選擇到優惠資訊一次搞定，讓您的澳門住宿體驗更加完美。",
  path: "/ArticleCategory/Booking",
  image: "/Images/logo-m.png",
});

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
