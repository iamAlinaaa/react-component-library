import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from './Input';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Input Component

A versatile and accessible input field with built-in validation, clear functionality, and password visibility toggle.

## When to Use
- Form fields in login/registration forms
- Search inputs with clear functionality
- Password fields with visibility toggle

## Features
- ✅ Multiple input types: text, password, email, number, tel, url
- ✅ Clear button (X) for easy input clearing
- ✅ Password visibility toggle (eye icon)
- ✅ Built-in validation states with error messages
- ✅ Helper text for additional instructions
- ✅ Support for React Hook Form integration
- ✅ Disabled state styling
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      description:
        'HTML input type that determines the input behavior and validation',
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
      table: {
        type: { summary: 'InputType' },
        defaultValue: { summary: 'text' },
      },
    },
    clearable: {
      description: 'Show a clear (X) button when the input has content',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Disable the input field and prevent user interaction',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: function Render(args) {
    const [value, setValue] = useState('');
    return (
      <Input {...args} value={value} onChange={e => setValue(e.target.value)} />
    );
  },
  args: {
    type: 'text',
    placeholder: 'Enter text...',
    label: 'Text Input',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Standard text input with label and placeholder. Use for general text input like names, descriptions, or search terms.',
      },
    },
  },
};

export const Password: Story = {
  render: function Render(args) {
    const [value, setValue] = useState('SecretPassword123');
    return (
      <Input {...args} value={value} onChange={e => setValue(e.target.value)} />
    );
  },
  args: {
    type: 'password',
    placeholder: 'Enter password...',
    label: 'Password',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Password input with visibility toggle. Click the eye icon to show/hide the password text. Passwords are masked by default for security.',
      },
    },
  },
};

export const Email: Story = {
  render: function Render(args) {
    const [value, setValue] = useState('');
    return (
      <Input {...args} value={value} onChange={e => setValue(e.target.value)} />
    );
  },
  args: {
    type: 'email',
    placeholder: 'Enter email...',
    label: 'Email Address',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Email input with built-in browser validation. Shows appropriate keyboard on mobile devices and validates email format.',
      },
    },
  },
};

export const Number: Story = {
  render: function Render(args) {
    const [value, setValue] = useState('');
    return (
      <Input {...args} value={value} onChange={e => setValue(e.target.value)} />
    );
  },
  args: {
    type: 'number',
    placeholder: 'Enter number...',
    label: 'Number Input',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Number input for numeric values. Shows number keyboard on mobile devices and prevents non-numeric input.',
      },
    },
  },
};

export const Clearable: Story = {
  render: function Render(args) {
    const [value, setValue] = useState('Clear me!');
    return (
      <Input {...args} value={value} onChange={e => setValue(e.target.value)} />
    );
  },
  args: {
    type: 'text',
    placeholder: 'Enter text...',
    label: 'Clearable Input',
    clearable: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Text input with clear functionality. The X button appears when there's content - click it to instantly clear the field. Perfect for search inputs or when users need to quickly reset the field.",
      },
    },
  },
};

export const ClearablePassword: Story = {
  render: function Render(args) {
    const [value, setValue] = useState('SecretPassword123');
    return (
      <Input {...args} value={value} onChange={e => setValue(e.target.value)} />
    );
  },
  args: {
    type: 'password',
    placeholder: 'Enter password...',
    label: 'Clearable Password',
    clearable: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Password input with both visibility toggle and clear functionality. Use when users might need to completely clear a password field and start over.',
      },
    },
  },
};

export const WithError: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
    label: 'Input with Error',
    value: 'invalid@',
    error: 'This field contains invalid characters',
  },
  parameters: {
    docs: {
      description: {
        story:
          "Input in error state with validation message. The input border turns red and an error message appears below. Use for form validation feedback when user input doesn't meet requirements.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
    label: 'Disabled Input',
    value: 'Cannot edit this',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Disabled input field. The input is grayed out and cannot be edited. Use for read-only data or when certain fields should be temporarily unavailable.',
      },
    },
  },
};
