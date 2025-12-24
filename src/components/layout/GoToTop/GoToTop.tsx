'use client';

import { useScrollToTop } from '@/hooks';

export default function GoToTop() {
  const { isVisible, scrollToTop } = useScrollToTop();

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-[50px] h-[50px] bg-[#E29D34] rounded-full shadow-lg flex items-center justify-center hover:bg-[#CD861A] transition-colors z-50"
      aria-label="Go to top"
    >
      <i className="fas fa-chevron-up text-white text-xl" />
    </button>
  );
}
