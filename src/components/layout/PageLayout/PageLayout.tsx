import { ReactNode } from 'react';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import GoToTop from '@/components/layout/GoToTop/GoToTop';
import BottomNav from '@/components/layout/BottomNav/BottomNav';

interface PageLayoutProps {
  children: ReactNode;
  mainClassName?: string;
  contentClassName?: string;
  containerWidth?: 'full' | '70%' | '80%' | '90%';
  outerContainerClassName?: string;
}

export default function PageLayout({
  children,
  mainClassName = '',
  contentClassName = '',
  containerWidth = '90%',
  outerContainerClassName = '',
}: PageLayoutProps) {
  const containerWidthClass = 
    containerWidth === '70%' ? 'w-full md:w-[70%]' :
    containerWidth === '80%' ? 'w-full md:w-[80%]' :
    containerWidth === '90%' ? 'w-[90%]' :
    'w-full';

  return (
    <div className={`relative w-full min-h-screen bg-black flex justify-center items-center ${outerContainerClassName}`}>
      <Navbar />

      <main className={`inner-page w-full mx-auto flex flex-col justify-center items-center ${mainClassName}`}>
        <div className={`${containerWidthClass} mx-auto inner-page ${contentClassName}`}>
          {children}
        </div>
        <Footer />
      </main>

      <GoToTop />
      <BottomNav />
    </div>
  );
}

