import { Metadata } from "next";
import { generateMetadata as genMeta } from "@/config/metadata";
import { findArticleBySlug } from "@/data/articles";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // Handle Next.js 15+ where params might be a Promise
  const resolvedParams = params instanceof Promise ? await params : params;
  const slug = resolvedParams?.slug || "";

  if (!slug) {
    return genMeta({
      title: "文章 - 龍匯天下",
      description: "探索澳門旅遊、訂房、包車、桑拿等相關文章",
      path: "/Article",
      image: "https://long-huei.vercel.app/Images/logo-m.png",
    });
  }

  try {
    const article = await findArticleBySlug(slug);

    if (!article) {
      // Fallback metadata if article not found
      return genMeta({
        title: "文章 - 龍匯天下",
        description: "探索澳門旅遊、訂房、包車、桑拿等相關文章",
        path: `/Article/${slug}`,
        image: "https://long-huei.vercel.app/Images/logo-m.png",
      });
    }

    // Use article image, fallback to mobile image, then logo
    // Convert relative paths to absolute URLs for Open Graph
    let articleImage =
      article.image || article.imageMobile || "/Images/logo-m.png";
    if (articleImage.startsWith("/")) {
      articleImage = `https://long-huei.vercel.app${articleImage}`;
    } else if (!articleImage.startsWith("http")) {
      articleImage = `https://long-huei.vercel.app/${articleImage}`;
    }

    return genMeta({
      title: article.title,
      description: article.description,
      path: article.link,
      image: articleImage,
    });
  } catch (error) {
    console.error("Error generating metadata:", error);
    // Fallback on error
    return genMeta({
      title: "文章 - 龍匯天下",
      description: "探索澳門旅遊、訂房、包車、桑拿等相關文章",
      path: `/Article/${slug}`,
      image: "https://long-huei.vercel.app/Images/logo-m.png",
    });
  }
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
