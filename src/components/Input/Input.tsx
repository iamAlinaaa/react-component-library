import React, { useState, InputHTMLAttributes } from 'react';
import { EyeIcon, EyeClosedIcon, CloseIcon } from '../Icons';
import { useInput } from '../../hooks/useInput';
import { buildValidationRules } from '@/utils/validation';
import styles from './Input.module.scss';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  clearable?: boolean;
  label?: string;
  error?: string;
  helperText?: string;
  name?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  validate?: (value: string) => string | boolean;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  clearable = false,
  label,
  error,
  helperText,
  value,
  onChange,
  className = '',
  disabled = false,
  name,
  required = false,
  minLength,
  maxLength,
  pattern,
  validate,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [internalValue, setInternalValue] = useState(value || '');

  // Consistent naming for RHF
  const { register: rhfRegister, error: rhfError } = useInput(
    name,
    buildValidationRules({ required, minLength, maxLength, pattern, validate }),
  );

  const currentValue = value ?? internalValue;
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;
  const validationError = error || rhfError;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e);
  };

  const handleClear = () => {
    setInternalValue('');
    onChange?.({
      target: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const showClearButton = clearable && currentValue && !disabled;
  const showPasswordToggle = isPassword && !disabled;

  const inputClasses = [
    styles.input,
    validationError && styles.hasError,
    (showClearButton || showPasswordToggle) && styles.withButtons,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const inputProps = name
    ? { ...rhfRegister, ...props }
    : { value: currentValue, onChange: handleChange, ...props };

  const descriptionIds = [
    validationError && `${name}-error`,
    helperText && `${name}-helper`,
  ].filter(Boolean);

  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={styles.inputWrapper}>
        <input
          id={name}
          type={inputType}
          disabled={disabled}
          className={inputClasses}
          aria-invalid={!!validationError}
          aria-describedby={
            descriptionIds.length ? descriptionIds.join(' ') : undefined
          }
          {...inputProps}
        />
        <div className={styles.buttonContainer}>
          {showClearButton && (
            <button
              type="button"
              onClick={handleClear}
              className={styles.iconButton}
              aria-label="Clear input"
            >
              <CloseIcon size={16} />
            </button>
          )}
          {showPasswordToggle && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={styles.iconButton}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <EyeClosedIcon size={18} />
              ) : (
                <EyeIcon size={18} />
              )}
            </button>
          )}
        </div>
      </div>
      {validationError && (
        <p id={`${name}-error`} className={styles.errorText}>
          {validationError}
        </p>
      )}
      {helperText && !validationError && (
        <p id={`${name}-helper`} className={styles.helperText}>
          {helperText}
        </p>
      )}
    </div>
  );
};
