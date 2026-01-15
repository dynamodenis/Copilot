import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { SectionBlockProps, GenUIComponentDef } from '../types';
import styles from '../GenUI.module.scss';

interface SectionBlockRendererProps extends SectionBlockProps {
  renderComponent: (def: GenUIComponentDef) => React.ReactNode;
}

export const SectionBlock: React.FC<SectionBlockRendererProps> = ({
  isFoldable = true,
  sections,
  renderComponent,
}) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    // If not foldable, expand all sections by default
    new Set(isFoldable ? [] : sections.map(s => s.value))
  );

  const toggleSection = (value: string) => {
    if (!isFoldable) return;
    
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(value)) {
        newSet.delete(value);
      } else {
        newSet.add(value);
      }
      return newSet;
    });
  };

  return (
    <div className={styles.sectionBlock}>
      {sections.map((section) => {
        const isExpanded = expandedSections.has(section.value);
        
        return (
          <div 
            key={section.value} 
            className={`${styles.section} ${isExpanded ? styles.expanded : ''}`}
          >
            <button
              className={styles.sectionTrigger}
              onClick={() => toggleSection(section.value)}
              type="button"
            >
              <span>{section.trigger}</span>
              {isFoldable && (
                <span className={`${styles.triggerIcon} ${isExpanded ? styles.rotated : ''}`}>
                  <ChevronDown size={16} />
                </span>
              )}
            </button>
            {(isExpanded || !isFoldable) && (
              <div className={styles.sectionContent}>
                {section.content.map((child, index) => (
                  <React.Fragment key={index}>
                    {renderComponent(child)}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

