import React, { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon } from '../../../Icons';
import { MenuItemProps } from '../../types';
import styles from './MenuItem.module.scss';

export const MenuItem: React.FC<MenuItemProps> = ({ item, level }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const paddingLeft = `${(level + 1) * 1}rem`;

  const buttonClasses = [styles.menuItem, !hasChildren ? styles.noChildren : '']
    .filter(Boolean)
    .join(' ');

  return (
    <div>
      <button
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
        className={buttonClasses}
        style={{ paddingLeft }}
      >
        <div className={styles.itemContent}>
          {item.icon && <span className={styles.itemIcon}>{item.icon}</span>}
          <span className={styles.itemLabel}>{item.label}</span>
        </div>
        {hasChildren && (
          <span className={styles.chevron}>
            {isExpanded ? (
              <ChevronDownIcon size={16} />
            ) : (
              <ChevronRightIcon size={16} />
            )}
          </span>
        )}
      </button>
      {hasChildren && isExpanded && (
        <div className={styles.submenu}>
          {item.children!.map(child => (
            <MenuItem key={child.id} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};
