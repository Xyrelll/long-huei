import { Metadata } from "next";
import { generateMetadata as genMeta } from "@/config/metadata";

export const metadata: Metadata = genMeta({
  title: "澳門常見問答 - 換錢、澳門通、旅遊安全全指南",
  description:
    "探索澳門常見問答完整攻略，包含換錢、澳門通、旅遊安全等實用資訊。精選澳門常見問題必看文章，從實用技巧到安全指南一次搞定，讓您的澳門之旅更加順利。",
  path: "/ArticleCategory/Question",
  image: "/Images/logo-m.png",
});

export default function QuestionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
