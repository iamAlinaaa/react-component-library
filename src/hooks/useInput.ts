import { useFormContext, RegisterOptions } from 'react-hook-form';

export const useInput = (name?: string, validationRules?: RegisterOptions) => {
  const formContext = useFormContext();

  if (!formContext || !name) {
    return {
      register: {},
      error: undefined,
    };
  }

  const {
    register,
    formState: { errors },
  } = formContext;

  const error = errors[name]?.message as string;

  return {
    register: validationRules
      ? register(name, validationRules)
      : register(name),
    error,
  };
};
