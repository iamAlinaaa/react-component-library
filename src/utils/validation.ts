import { InputProps } from '../components/Input/Input';

// Helper function for validation rules
export function buildValidationRules({
  required,
  minLength,
  maxLength,
  pattern,
  validate,
}: Pick<
  InputProps,
  'required' | 'minLength' | 'maxLength' | 'pattern' | 'validate'
>) {
  return {
    ...(required && { required: 'This field is required' }),
    ...(minLength && {
      minLength: {
        value: minLength,
        message: `Minimum ${minLength} characters`,
      },
    }),
    ...(maxLength && {
      maxLength: {
        value: maxLength,
        message: `Maximum ${maxLength} characters`,
      },
    }),
    ...(pattern && {
      pattern: { value: new RegExp(pattern), message: 'Invalid format' },
    }),
    validate,
  };
}
