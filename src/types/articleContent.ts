// Article Content Block Types
export type ContentBlockType = 
  | 'text' 
  | 'heading' 
  | 'image' 
  | 'button' 
  | 'list' 
  | 'table' 
  | 'divider'
  | 'link'
  | 'quote'
  | 'tableOfContents'
  | 'section';

// Base interface for all content blocks
export interface BaseContentBlock {
  type: ContentBlockType;
  id?: string;
}

// Text block
export interface TextBlock extends BaseContentBlock {
  type: 'text';
  content: string;
  style?: {
    fontSize?: string;
    fontWeight?: string;
    color?: string;
    textAlign?: 'left' | 'center' | 'right' | 'justify';
    marginTop?: string;
    marginBottom?: string;
    lineHeight?: string;
  };
}

// Heading block
export interface HeadingBlock extends BaseContentBlock {
  type: 'heading';
  level: 1 | 2 | 3 | 4 | 5 | 6;
  content: string;
  id?: string; // For anchor links
  borderTop?: 'on' | 'off'; // Add border-top when value is 'on'
  style?: {
    color?: string;
    marginTop?: string;
    marginBottom?: string;
    fontSize?: string;
    borderRadius?: string;
    border?: string;
    backgroundColor?: string;
    backdropFilter?: string;
    padding?: string;
    display?: string;
  };
}

// Image block
export interface ImageBlock extends BaseContentBlock {
  type: 'image';
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  style?: {
    borderRadius?: string;
    marginTop?: string;
    marginBottom?: string;
    maxWidth?: string;
  };
}

// Button block
export interface ButtonBlock extends BaseContentBlock {
  type: 'button';
  text: string;
  href?: string;
  onClick?: string; // Event handler name
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  style?: {
    backgroundColor?: string;
    color?: string;
    borderRadius?: string;
    padding?: string;
    marginTop?: string;
    marginBottom?: string;
  };
}

// List block
export interface ListBlock extends BaseContentBlock {
  type: 'list';
  items: string[];
  ordered?: boolean; // true for ordered list, false for unordered
  style?: {
    marginTop?: string;
    marginBottom?: string;
    fontSize?: string;
    fontFamily?: string;
    fontWeight?: string;
    lineHeight?: string;
    paddingLeft?: string;
    gap?: string;
  };
}

// Table block
export interface TableBlock extends BaseContentBlock {
  type: 'table';
  headers?: string[];
  rows: string[][];
  showBorders?: boolean; // Enable/disable table borders
  mobileAsText?: boolean; // Convert table to text on mobile (default: true)
  style?: {
    marginTop?: string;
    marginBottom?: string;
    paddingTop?: string;
  };
}

// Divider block
export interface DividerBlock extends BaseContentBlock {
  type: 'divider';
  style?: {
    color?: string;
    height?: string;
    marginTop?: string;
    marginBottom?: string;
  };
}

// Link block
export interface LinkBlock extends BaseContentBlock {
  type: 'link';
  text: string;
  href: string;
  target?: '_blank' | '_self';
  style?: {
    color?: string;
    textDecoration?: string;
    marginTop?: string;
    marginBottom?: string;
  };
}

// Quote block
export interface QuoteBlock extends BaseContentBlock {
  type: 'quote';
  content: string;
  author?: string;
  style?: {
    borderLeftColor?: string;
    paddingLeft?: string;
    marginTop?: string;
    marginBottom?: string;
  };
}

// Table of Contents block
export interface TableOfContentsBlock extends BaseContentBlock {
  type: 'tableOfContents';
  items: Array<{
    level: number;
    text: string;
    id?: string; // For anchor links
  }>;
  buttonText?: string;
  buttonIcon?: string;
  enabled?: boolean; // Control visibility - if false, table of contents won't be rendered
  style?: {
    backgroundColor?: string;
    borderRadius?: string;
    padding?: string;
    marginTop?: string;
    marginBottom?: string;
    boxShadow?: string;
    border?: string;
    backdropFilter?: string;
    color?: string;
  };
}

// Section block - groups title, image, and description together
export interface SectionBlock extends BaseContentBlock {
  type: 'section';
  title: string;
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    caption?: string;
  };
  description?: string;
  content?: ArticleContentBlock[]; // Nested content blocks
  borderTop?: 'on' | 'off'; // Add border-top when value is 'on'
  style?: {
    marginTop?: string;
    marginBottom?: string;
    padding?: string;
    backgroundColor?: string;
    borderRadius?: string;
  };
}

// Union type for all content blocks
export type ArticleContentBlock = 
  | TextBlock
  | HeadingBlock
  | ImageBlock
  | ButtonBlock
  | ListBlock
  | TableBlock
  | DividerBlock
  | LinkBlock
  | QuoteBlock
  | TableOfContentsBlock
  | SectionBlock;

// Article content structure
export interface ArticleContent {
  // Article description/intro text
  description?: ArticleContentBlock[];
  // Table of contents
  tableOfContents?: TableOfContentsBlock;
  // Array of sections (each with title, image, description)
  sections?: SectionBlock[];
  // Legacy: flat blocks array (for backward compatibility)
  blocks?: ArticleContentBlock[];
}

