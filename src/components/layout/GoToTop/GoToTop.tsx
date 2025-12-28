"use client";

import { useScrollToTop } from "@/hooks";

export default function GoToTop() {
  const { isVisible, scrollToTop } = useScrollToTop();

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-4 lg:bottom-8 lg:right-8 w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-[#E29D34] rounded-full shadow-lg flex items-center justify-center hover:bg-[#CD861A] transition-colors z-50"
      aria-label="Go to top"
    >
      <i className="fas fa-chevron-up text-white text-base lg:text-xl" />
    </button>
  );
}
