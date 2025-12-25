'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArticleContentBlock, ArticleContent } from '@/types/articleContent';

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
              index={0}
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
              fontSize: textStyle.fontSize || '1.125rem',
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
            index={index}
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
            }}
            className="section-group"
          >
            {/* Section Title */}
            {block.title && (() => {
              const HeadingTag = `h${block.titleLevel || 2}` as keyof React.JSX.IntrinsicElements;
              return (
                <HeadingTag
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
                }}
                className="w-full"
              >
                <Image
                  src={block.image.src}
                  alt={block.image.alt}
                  width={block.image.width || 800}
                  height={block.image.height || 450}
                  style={{
                    borderRadius: '12px',
                    maxWidth: '100%',
                  }}
                  className="w-full h-auto"
                />
                {block.image.caption && (
                  <p className="text-white/70 text-sm mt-2 text-center">{block.image.caption}</p>
                )}
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

  return (
    <div className="article-content">
      {blocks.map((block, index) => renderBlock(block, index))}
    </div>
  );
}

// Table of Contents Component
function TableOfContentsComponent({ block, index }: { block: ArticleContentBlock; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  
  if (block.type !== 'tableOfContents') return null;

  const baseStyle = block.style || {};
  const buttonText = block.buttonText || '文章目錄';
  const buttonIcon = block.buttonIcon || '☰';

  const handleTOCClick = (e: React.MouseEvent<HTMLAnchorElement>, itemId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Find the target element
    const targetElement = document.getElementById(itemId);
    if (targetElement) {
      // Calculate offset to account for fixed navbar
      const navbarHeight = 100; // Adjust based on your navbar height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      // Smooth scroll to the element
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      style={{
        marginTop: baseStyle.marginTop || '0',
        marginBottom: baseStyle.marginBottom || '0',
        width: '100%',
      }}
    >
      {/* TOC Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
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
        }}
        className="hover:opacity-90"
      >
        <span style={{ fontSize: '16px' }}>{buttonIcon}</span>
        <span>{buttonText}</span>
      </button>

      {/* TOC Panel - Inline, expands/collapses in document flow */}
      <div
        style={{
          backgroundColor: '#F5F5F5',
          borderRadius: '12px',
          padding: isOpen ? '20px' : '0',
          width: '100%',
          boxShadow: isOpen ? '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 165, 0, 0.3)' : 'none',
          marginTop: '10px',
          marginBottom: isOpen ? '20px' : '0',
          maxHeight: isOpen ? '1000px' : '0',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.6s ease-in-out, opacity 0.6s ease-in-out, padding 0.6s ease-in-out, margin-bottom 0.6s ease-in-out',
        }}
        className="toc-panel"
      >
        <ul
              style={{
                listStyle: 'none',
                padding: '0',
                margin: '0',
                color: '#000000',
              }}
            >
              {(() => {
                // Calculate hierarchical numbering (1, 1.1, 1.2, 2, 3, 3.1, 3.2)
                const getNumber = (items: typeof block.items, currentIndex: number): string => {
                  const currentItem = items[currentIndex];
                  if (currentItem.level === 1) {
                    // Count level 1 items before this one
                    let count = 1;
                    for (let i = 0; i < currentIndex; i++) {
                      if (items[i].level === 1) count++;
                    }
                    return count.toString();
                  } else {
                    // Find parent level 1 item
                    let parentIndex = -1;
                    for (let i = currentIndex - 1; i >= 0; i--) {
                      if (items[i].level === 1) {
                        parentIndex = i;
                        break;
                      }
                    }
                    if (parentIndex === -1) return '';
                    
                    // Count level 2 items under this parent
                    let subCount = 1;
                    for (let i = parentIndex + 1; i < currentIndex; i++) {
                      if (items[i].level === 2) subCount++;
                    }
                    
                    // Get parent number
                    let parentCount = 1;
                    for (let i = 0; i < parentIndex; i++) {
                      if (items[i].level === 1) parentCount++;
                    }
                    
                    return `${parentCount}.${subCount}`;
                  }
                };

                return block.items.map((item, itemIndex) => {
                  const number = getNumber(block.items, itemIndex);
                  return (
                    <li
                      key={itemIndex}
                      style={{
                        paddingLeft: item.level === 1 ? '0' : '24px',
                        marginBottom: '12px',
                        fontSize: item.level === 1 ? '16px' : '14px',
                        fontWeight: item.level === 1 ? '600' : '400',
                        lineHeight: '1.6',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <span
                        style={{
                          marginRight: '8px',
                          color: '#000000',
                          fontWeight: item.level === 1 ? '600' : '400',
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
                          }}
                          className="hover:text-[#CD861A]"
                        >
                          {item.text}
                        </span>
                      )}
                    </li>
                  );
                });
              })()}
        </ul>
      </div>
    </div>
  );
}

