import React, { useEffect, useState } from 'react';
import { CheckIcon, AlertIcon, InfoIcon, CloseIcon } from '../Icons';
import { toastColors } from '@/styles/toast-colors';
import styles from './Toast.module.scss';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  type?: ToastType;
  message: string;
  duration?: number;
  onClose?: () => void;
  showCloseButton?: boolean;
}

const toastConfig = {
  success: {
    icon: () => <CheckIcon size={20} color={toastColors.success} />,
  },
  error: {
    icon: () => <AlertIcon size={20} color={toastColors.error} />,
  },
  warning: {
    icon: () => <AlertIcon size={20} color={toastColors.warning} />,
  },
  info: {
    icon: () => <InfoIcon size={20} color={toastColors.info} />,
  },
};

export const Toast: React.FC<ToastProps> = ({
  type = 'info',
  message,
  duration = 3000,
  onClose,
  showCloseButton = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = React.useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onClose) {
        onClose();
      }
    }, 300);
  }, [onClose]);

  useEffect(() => {
    setIsVisible(true);

    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, handleClose]);

  if (!isVisible && isExiting) {
    return null;
  }

  const config = toastConfig[type];
  const Icon = config.icon;

  const toastClasses = [
    styles.toast,
    styles[type],
    isVisible && !isExiting ? styles.visible : styles.exiting,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={toastClasses}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <p className={styles.message}>{message}</p>
      {showCloseButton && (
        <button
          onClick={handleClose}
          className={styles.closeButton}
          aria-label="Close notification"
        >
          <CloseIcon size={16} color={toastColors.close} />
        </button>
      )}
    </div>
  );
};
