declare module '@splidejs/react-splide' {
  import { ComponentType, ReactNode } from 'react';
  
  export interface SplideOptions {
    type?: string;
    autoplay?: boolean | string;
    focus?: string;
    padding?: string | { left?: string; right?: string };
    pagination?: boolean;
    arrows?: boolean;
    perPage?: number;
    gap?: string;
    trimSpace?: boolean;
    breakpoints?: {
      [key: number]: Partial<SplideOptions>;
    };
  }

  export interface SplideProps {
    options?: SplideOptions;
    'aria-label'?: string;
    children?: ReactNode;
  }

  export interface SplideSlideProps {
    children?: ReactNode;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
}

