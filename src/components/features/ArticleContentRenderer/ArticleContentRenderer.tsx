'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArticleContentBlock, ArticleContent, LinkBlock, TextBlock } from '@/types/articleContent';

interface ArticleContentRendererProps {
  blocks?: ArticleContentBlock[];
  content?: ArticleContent; // New structured content format
}

export default function ArticleContentRenderer({ blocks, content }: ArticleContentRendererProps) {
  // If new structured format is provided, use it
  if (content) {
    return (
      <div className="article-content-structured">
        {/* Article Description */}
        {content.description && content.description.length > 0 && (
          <div className="article-description">
            <ArticleContentRenderer blocks={content.description} />
          </div>
        )}
        
        {/* Table of Contents */}
        {content.tableOfContents && (
          <div className="article-toc">
            <TableOfContentsComponent
              block={content.tableOfContents}
            />
          </div>
        )}
        
        {/* Sections Array */}
        {content.sections && content.sections.length > 0 && (
          <div className="article-sections">
            {content.sections.map((section, index) => (
              <ArticleContentRenderer 
                key={section.id || index} 
                blocks={[section]} 
              />
            ))}
          </div>
        )}
      </div>
    );
  }
  
  // Fallback to legacy blocks format
  if (!blocks || blocks.length === 0) return null;
  
  const renderBlock = (block: ArticleContentBlock, index: number) => {
    switch (block.type) {
      case 'text': {
        const textStyle = block.style || {};
        return (
          <p
            key={block.id || index}
            style={{
              fontSize: textStyle.fontSize || '2rem',
              fontWeight: textStyle.fontWeight || 'normal',
              color: textStyle.color || '#FFFFFF',
              textAlign: textStyle.textAlign || 'left',
              marginTop: textStyle.marginTop || '0',
              marginBottom: textStyle.marginBottom || '0',
              lineHeight: '1.8',
              whiteSpace: 'pre-line',
            }}
            className="text-white"
          >
            {block.content}
          </p>
        );
      }

      case 'heading': {
        const headingStyle = block.style || {};
        const HeadingTag = `h${block.level}` as keyof React.JSX.IntrinsicElements;
        // Default font sizes for different heading levels if not specified
        const defaultFontSizes: Record<number, string> = {
          1: '2rem',
          2: '1.5rem',
          3: '1.25rem',
          4: '1.125rem',
          5: '1rem',
          6: '0.875rem',
        };
        return (
          <HeadingTag
            key={block.id || index}
            id={block.id}
            style={{
              color: headingStyle.color || '#FFFFFF',
              marginTop: headingStyle.marginTop || '0',
              marginBottom: headingStyle.marginBottom || '0',
              fontWeight: 'bold',
              fontSize: headingStyle.fontSize || defaultFontSizes[block.level],
              borderRadius: headingStyle.borderRadius,
              border: headingStyle.border,
              backgroundColor: headingStyle.backgroundColor,
              backdropFilter: headingStyle.backdropFilter,
              padding: headingStyle.padding,
              display: headingStyle.display,
              scrollMarginTop: '120px', // Add scroll margin for better navigation
            }}
            className="text-white"
          >
            {block.content}
          </HeadingTag>
        );
      }

      case 'image': {
        const imageStyle = block.style || {};
        return (
          <div
            key={block.id || index}
            style={{
              marginTop: imageStyle.marginTop || '0',
              marginBottom: imageStyle.marginBottom || '0',
            }}
            className="w-full"
          >
            <Image
              src={block.src}
              alt={block.alt}
              width={block.width || 800}
              height={block.height || 450}
              style={{
                borderRadius: imageStyle.borderRadius || '0',
                maxWidth: imageStyle.maxWidth || '100%',
              }}
              className="w-full h-auto"
            />
            {block.caption && (
              <p className="text-white/70 text-sm mt-2 text-center">{block.caption}</p>
            )}
          </div>
        );
      }

      case 'button': {
        const buttonStyle = block.style || {};
        const buttonStyles = {
          backgroundColor: buttonStyle.backgroundColor || '#CD861A',
          color: buttonStyle.color || '#FFFFFF',
          borderRadius: buttonStyle.borderRadius || '50px',
          padding: buttonStyle.padding || '12px 24px',
          marginTop: buttonStyle.marginTop || '0',
          marginBottom: buttonStyle.marginBottom || '0',
          border: 'none',
          cursor: 'pointer',
          display: 'inline-block',
          textDecoration: 'none',
          transition: 'opacity 0.2s',
        };

        if (block.href) {
          return (
            <Link
              key={block.id || index}
              href={block.href}
              style={buttonStyles}
              className="hover:opacity-80"
            >
              {block.text}
            </Link>
          );
        }

        return (
          <button
            key={block.id || index}
            style={buttonStyles}
            className="hover:opacity-80"
            onClick={() => {
              if (block.onClick) {
                // Handle custom onClick events
                console.log('Button clicked:', block.onClick);
              }
            }}
          >
            {block.text}
          </button>
        );
      }

      case 'list': {
        const listStyle = block.style || {};
        const ListTag = block.ordered ? 'ol' : 'ul';
        return (
          <ListTag
            key={block.id || index}
            style={{
              marginTop: listStyle.marginTop || '0',
              marginBottom: listStyle.marginBottom || '0',
              paddingLeft: '20px',
              color: '#FFFFFF',
              fontSize: listStyle.fontSize || '1rem',
              fontFamily: listStyle.fontFamily,
              fontWeight: listStyle.fontWeight,
              lineHeight: listStyle.lineHeight,
            }}
            className="text-white"
          >
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex} style={{ marginBottom: '8px', whiteSpace: 'pre-line' }}>
                {item}
              </li>
            ))}
          </ListTag>
        );
      }

      case 'table': {
        const tableStyle = block.style || {};
        return (
          <div
            key={block.id || index}
            style={{
              marginTop: tableStyle.marginTop || '0',
              marginBottom: tableStyle.marginBottom || '0',
              overflowX: 'auto',
            }}
            className="w-full"
          >
            <table className="w-full border-collapse text-white">
              {block.headers && block.headers.length > 0 && (
                <thead>
                  <tr>
                    {block.headers.map((header, headerIndex) => (
                      <th
                        key={headerIndex}
                        className="border border-white/20 p-2 bg-white/10"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="border border-white/20 p-2"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }

      case 'divider': {
        const dividerStyle = block.style || {};
        return (
          <hr
            key={block.id || index}
            style={{
              borderTop: `1px solid ${dividerStyle.color || 'rgba(255, 255, 255, 0.2)'}`,
              marginTop: dividerStyle.marginTop || '20px',
              marginBottom: dividerStyle.marginBottom || '20px',
              border: 'none',
            }}
          />
        );
      }

      case 'link': {
        const linkStyle = block.style || {};
        return (
          <Link
            key={block.id || index}
            href={block.href}
            target={block.target || '_self'}
            style={{
              color: linkStyle.color || '#FFCD83',
              textDecoration: linkStyle.textDecoration || 'underline',
              marginTop: linkStyle.marginTop || '0',
              marginBottom: linkStyle.marginBottom || '0',
            }}
            className="hover:text-[#FFCD83]"
          >
            {block.text}
          </Link>
        );
      }

      case 'quote': {
        const quoteStyle = block.style || {};
        return (
          <blockquote
            key={block.id || index}
            style={{
              borderLeft: `4px solid ${quoteStyle.borderLeftColor || '#CD861A'}`,
              paddingLeft: quoteStyle.paddingLeft || '20px',
              marginTop: quoteStyle.marginTop || '0',
              marginBottom: quoteStyle.marginBottom || '0',
              color: '#FFFFFF',
              fontStyle: 'italic',
            }}
            className="text-white"
          >
            <p>{block.content}</p>
            {block.author && (
              <cite className="text-white/70 text-sm mt-2 block">— {block.author}</cite>
            )}
          </blockquote>
        );
      }

      case 'tableOfContents':
        return (
          <TableOfContentsComponent
            key={block.id || index}
            block={block}
          />
        );

      case 'section': {
        const sectionStyle = block.style || {};
        return (
          <div
            key={block.id || index}
            style={{
              marginTop: sectionStyle.marginTop || '40px',
              marginBottom: sectionStyle.marginBottom || '40px',
              padding: sectionStyle.padding || '0',
              backgroundColor: sectionStyle.backgroundColor,
              borderRadius: sectionStyle.borderRadius,
              ...(block.borderTop === 'on' && { borderTop: '1px solid #808080' }),
            }}
            className="section-group"
          >
            {/* Section Title */}
            {block.title && (() => {
              const HeadingTag = `h${block.titleLevel || 2}` as keyof React.JSX.IntrinsicElements;
              return (
                <HeadingTag
                  id={block.id}
                  style={{
                    marginTop: '0',
                    marginBottom: '20px',
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                  }}
                  className="text-white"
                >
                  {block.title}
                </HeadingTag>
              );
            })()}
            
            {/* Section Image */}
            {block.image && (
              <div
                style={{
                  marginTop: '0',
                  marginBottom: '30px',
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'start',
                }}
                className="w-auto flex justify-start"
              >
                <Image
                  src={block.image.src}
                  alt={block.image.alt}
                  width={block.image.width || 800}
                  height={block.image.height || 450}
                  style={{
                    borderRadius: '0px',
                  }}
                  className="w-auto h-auto md:max-w-[300px] md:max-h-[450px] object-contain"
                />
               
              </div>
            )}
              {/* Section Description */}
              {block.description && (
              <p
                style={{
                  marginTop: '0',
                  marginBottom: '20px',
                  fontSize: '1rem',
                  lineHeight: '1.8',
                }}
                className="text-white whitespace-pre-line"
              >
                {block.description}
              </p>
            )}
            
            
         
            
            {/* Section Content (nested blocks) */}
            {block.content && block.content.length > 0 && (
              <div className="section-content">
                <ArticleContentRenderer blocks={block.content} />
              </div>
            )}
          </div>
        );
      }

      default:
        return null;
    }
  };

  // Group text and link blocks together for inline rendering
  const renderBlocks = () => {
    const elements: React.ReactNode[] = [];
    let i = 0;
    
    while (i < blocks.length) {
      const currentBlock = blocks[i];
      
      // Check if current block is text and next block is link
      if (currentBlock.type === 'text' && i + 1 < blocks.length && blocks[i + 1].type === 'link') {
        const textBlock = currentBlock;
        const linkBlock = blocks[i + 1] as LinkBlock;
        const textStyle = textBlock.style || {};
        const linkStyle = linkBlock.style || {};
        
        // Check if there's a text block after the link
        const nextTextBlock = i + 2 < blocks.length && blocks[i + 2].type === 'text' ? (blocks[i + 2] as TextBlock) : null;
        const nextTextStyle = nextTextBlock?.style || {};
        
        // Use the style from the first text block, but merge marginBottom from the last block
        const mergedStyle = {
          fontSize: textStyle.fontSize || '1.125rem',
          fontWeight: textStyle.fontWeight || 'normal',
          color: textStyle.color || '#FFFFFF',
          textAlign: textStyle.textAlign || 'left',
          marginTop: textStyle.marginTop || '0',
          marginBottom: nextTextBlock ? (nextTextStyle.marginBottom || textStyle.marginBottom || '0') : (textStyle.marginBottom || '0'),
          lineHeight: '1.8',
          whiteSpace: 'pre-line',
        };
        
        elements.push(
          <p
            key={textBlock.id || i}
            style={mergedStyle}
            className="text-white"
          >
            {textBlock.content}{' '}
            <Link
              href={linkBlock.href}
              target={linkBlock.target || '_self'}
              style={{
                color: linkStyle.color || '#FFCD83',
                textDecoration: linkStyle.textDecoration || 'underline',
                display: 'inline',
              }}
              className="hover:text-[#FFCD83]"
            >
              {linkBlock.text}
            </Link>
            {nextTextBlock && (
              <>
                {' '}
                {nextTextBlock.content}
              </>
            )}
          </p>
        );
        
        // Skip the link block and next text block if it exists
        if (nextTextBlock) {
          i += 3;
        } else {
          i += 2;
        }
      } else {
        elements.push(renderBlock(currentBlock, i));
        i++;
      }
    }
    
    return elements;
  };

  return (
    <div className="article-content">
      {renderBlocks()}
    </div>
  );
}

// Table of Contents Component
function TableOfContentsComponent({ block }: { block: ArticleContentBlock }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !buttonRef.current) return;

      // Find the article content container (parent element with article content)
      const articleContentContainer = containerRef.current.closest('.article-content-structured') || 
                                      containerRef.current.closest('.article-content') ||
                                      containerRef.current.closest('.prose');
      
      // If no article container found, use the TOC container itself
      const contentContainer = articleContentContainer || containerRef.current;
      const contentRect = contentContainer.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const fixedButtonTop = 120; // Position where fixed button appears
      
      // Check if the article content's bottom has scrolled past the fixed button position
      // If so, return to normal positioning (content has ended)
      if (contentRect.bottom <= fixedButtonTop + 100) {
        setIsFixed(false);
        return;
      }
      
      // When the TOC container's top has scrolled past the top threshold
      // Switch to fixed positioning
      if (containerRect.top <= fixedButtonTop) {
        setIsFixed(true);
      } else {
        // Scrolling back up - return to normal position
        setIsFixed(false);
      }
    };

    if (block.type === 'tableOfContents') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Check initial position
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [block.type]);

  // Detect mobile vs desktop
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize(); // Check initial size
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);
  
  if (block.type !== 'tableOfContents') return null;

  const baseStyle = block.style || {};
  const buttonText = block.buttonText || '文章目錄';
  const buttonIcon = block.buttonIcon || '☰';

  const handleTOCClick = (e: React.MouseEvent<HTMLAnchorElement>, itemId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Use setTimeout to ensure DOM is updated after state change
    setTimeout(() => {
      // Find the target element - try multiple methods
      let targetElement = document.getElementById(itemId);
      
      // If not found, try querySelector
      if (!targetElement) {
        targetElement = document.querySelector(`[id="${itemId}"]`) as HTMLElement;
      }
      
      // If still not found, try finding by heading text (fallback)
      if (!targetElement) {
        const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        for (const heading of allHeadings) {
          if (heading.id === itemId) {
            targetElement = heading as HTMLElement;
            break;
          }
        }
      }
      
      if (targetElement) {
        // Calculate offset to account for fixed navbar
        const navbarHeight = 100; // Adjust based on your navbar height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        // Use scrollIntoView with offset calculation
        // First scroll to position, then fine-tune
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      } else {
        console.warn(`Element with id "${itemId}" not found`);
      }
    }, 200);
  };

  return (
    <div
      ref={containerRef}
      style={{
        marginTop: baseStyle.marginTop || '0',
        marginBottom: baseStyle.marginBottom || '0',
        width: '100%',
      }}
    >
      {/* TOC Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: isFixed ? 'fixed' : 'relative',
          top: isFixed ? '120px' : 'auto',
          left: isFixed ? (isMobile ? '40px' : '350px') : 'auto',
          zIndex: isFixed ? 1 : 'auto',
          backgroundColor: '#CD861A',
          padding: '5px 10px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '14px',
          fontWeight: '500',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
          marginBottom: isOpen ? '10px' : '0',
          borderRadius: '30px',
          color: '#d18411',
          border: '1px solid #d18411',
          backdropFilter: 'blur(10px)',
          background: 'rgba(83, 52, 4, 0.842)',
          opacity: isFixed ? 1 : 1,
        }}
        className="hover:opacity-90"
      >
        <span style={{ fontSize: '16px' }}>{buttonIcon}</span>
        <span>{buttonText}</span>
        <i className="bi bi-chevron-expand" style={{ fontSize: '7px' }}></i>
      </button>

      {/* TOC Panel - Positioned relative to button, fixed when button is fixed */}
      <div
        style={{
          position: isFixed ? 'fixed' : 'relative',
          top: isFixed && isOpen ? '180px' : isFixed ? '120px' : 'auto',
          left: isFixed ? (isMobile ? '40px' : '350px') : 'auto',
          zIndex: isFixed ? 999 : 'auto',
          backgroundColor: '#F5F5F5',
          borderRadius: '12px',
          padding: isOpen ? '20px' : '0',
          width: isOpen ? (isFixed ? '300px' : '100%') : '0',
          maxWidth: isFixed ? '90vw' : '100%',
          boxShadow: isOpen ? '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 165, 0, 0.3)' : 'none',
          maxHeight: isOpen ? (isFixed ? '70vh' : '1000px') : '0',
          opacity: isOpen ? 1 : 0,
          overflow: isOpen ? 'auto' : 'hidden',
          transition: 'max-height 0.6s ease-in-out, opacity 0.6s ease-in-out, padding 0.6s ease-in-out, width 0.6s ease-in-out, top 0.6s ease-in-out',
          marginTop: !isFixed && isOpen ? '10px' : '0',
        }}
        className="toc-panel"
      >
        {(() => {
          // Build nested structure from flat items array
          interface TOCItem {
            level: number;
            text: string;
            id?: string;
            children?: TOCItem[];
          }

          const buildNestedStructure = (items: typeof block.items): TOCItem[] => {
            const result: TOCItem[] = [];
            const stack: TOCItem[] = [];

            items.forEach((item) => {
              // Skip level 3 items - hide them from TOC but keep in data
              if (item.level === 3) {
                return;
              }

              const tocItem: TOCItem = {
                level: item.level,
                text: item.text,
                id: item.id,
                children: [],
              };

              // Remove items from stack that are at same or higher level
              while (stack.length > 0 && stack[stack.length - 1].level >= item.level) {
                stack.pop();
              }

              if (stack.length === 0) {
                // Top level item
                result.push(tocItem);
                stack.push(tocItem);
              } else {
                // Child item - add to parent's children
                const parent = stack[stack.length - 1];
                if (!parent.children) parent.children = [];
                parent.children.push(tocItem);
                stack.push(tocItem);
              }
            });

            return result;
          };

          const renderNestedList = (items: TOCItem[], isRoot: boolean = false, parentNumbers: string[] = []): React.ReactNode => {
            const listStyle = isRoot 
              ? { listStyle: 'none', padding: '0', margin: '0', color: '#000000' }
              : { listStyle: 'none', padding: '0', margin: '0', color: '#000000' };
            
            return (
              <ol 
                className={isRoot ? "article-menu-box-list" : ""} 
                style={listStyle}
              >
                {items.map((item, index) => {
                  // Calculate numbering recursively (only level 1 and 2, level 3 is hidden)
                  let number = '';
                  if (item.level === 1) {
                    // For root level, count level 1 items in the entire structure
                    if (isRoot) {
                      const allLevel1 = buildNestedStructure(block.items).filter(i => i.level === 1);
                      const currentPos = allLevel1.findIndex(i => i.text === item.text);
                      number = (currentPos + 1).toString();
                    } else {
                      // Should not happen, but fallback
                      number = (index + 1).toString();
                    }
                  } else if (item.level === 2) {
                    // Parent is level 1 - use the parent number from parentNumbers
                    const parentNumber = parentNumbers[0] || '1';
                    // Count level 2 siblings at same level before this one in current array
                    const siblings = items.filter((_, i) => i < index && items[i].level === 2);
                    number = `${parentNumber}.${siblings.length + 1}`;
                  }
                  // Level 3 items are filtered out, so no need to handle them here

                  const paddingLeft = item.level === 1 ? '0' : '24px';
                  const fontSize = item.level === 1 ? '16px' : '14px';
                  const fontWeight = item.level === 1 ? '600' : '500';

                  return (
                    <li
                      key={`${item.level}-${index}`}
                      className="js-content-click"
                      style={{
                        marginBottom: '12px',
                        lineHeight: '1.6',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', paddingLeft }}>
                        <span
                          style={{
                            marginRight: '8px',
                            color: '#000000',
                            fontWeight: fontWeight,
                            fontSize: fontSize,
                          }}
                        >
                          {number}
                        </span>
                        {item.id ? (
                          <a
                            href={`#${item.id}`}
                            onClick={(e) => handleTOCClick(e, item.id!)}
                            style={{
                              color: '#000000',
                              textDecoration: 'none',
                              display: 'block',
                              cursor: 'pointer',
                              transition: 'color 0.2s ease',
                              flex: 1,
                              fontSize: fontSize,
                              fontWeight: fontWeight,
                            }}
                            className="hover:text-[#CD861A]"
                          >
                            {item.text}
                          </a>
                        ) : (
                          <span
                            style={{
                              color: '#000000',
                              display: 'block',
                              transition: 'color 0.2s ease',
                              flex: 1,
                              fontSize: fontSize,
                              fontWeight: fontWeight,
                            }}
                            className="hover:text-[#CD861A]"
                          >
                            {item.text}
                          </span>
                        )}
                      </div>
                      {item.children && item.children.length > 0 && (
                        <div>
                          {renderNestedList(item.children, false, [...parentNumbers, number])}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ol>
            );
          };

          const nestedItems = buildNestedStructure(block.items);
          return renderNestedList(nestedItems, true);
        })()}
      </div>
    </div>
  );
}

