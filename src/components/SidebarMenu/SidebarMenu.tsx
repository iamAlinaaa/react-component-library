import React from 'react';
import { MenuItem } from './components/MenuItem/MenuItem';
import { SidebarMenuProps } from './types';
import { CloseIcon } from '../Icons';
import styles from './SidebarMenu.module.scss';

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isOpen,
  onClose,
  items,
  title = 'Menu',
}) => {
  const backdropClasses = [
    styles.backdrop,
    isOpen ? styles.visible : styles.hidden,
  ]
    .filter(Boolean)
    .join(' ');

  const sidebarClasses = [styles.sidebar, isOpen ? styles.open : '']
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <div className={backdropClasses} onClick={onClose} />
      <div className={sidebarClasses}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <button
              onClick={onClose}
              className={styles.closeButton}
              aria-label="Close menu"
            >
              <CloseIcon size={20} />
            </button>
          </div>
          <div className={styles.menuList}>
            {items.map(item => (
              <MenuItem key={item.id} item={item} level={0} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
