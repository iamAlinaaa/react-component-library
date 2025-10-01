import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Toast Component

A notification component that displays temporary messages to users. Toasts automatically disappear after a specified time and can display different types of messages with appropriate styling.

## When to Use
- Display success messages after form submissions
- Show error notifications for failed operations
- Provide warning messages for important actions
- Give general information to users

## Features
- ✅ Auto-dismiss after specified duration
- ✅ Four message types: success, error, warning, info
- ✅ Optional close button
- ✅ Smooth animations
- ✅ Accessible with ARIA labels

## Preview
The toast will appear in the bottom-right corner of the screen. Try different variants below to see how they look and behave.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'Determines the color and icon of the toast message',
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      table: {
        type: { summary: 'ToastType' },
        defaultValue: { summary: 'info' },
      },
    },
    message: {
      description: 'The text content to display in the toast',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    duration: {
      description:
        'Time in milliseconds before the toast automatically closes. Set to 0 to disable auto-close.',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '3000' },
      },
    },
    showCloseButton: {
      description: 'Whether to show the close (X) button for manual dismissal',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    onClose: {
      description:
        'Callback function called when toast is closed (either by timer, close button, or user action)',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Your changes have been saved successfully!',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use for positive confirmations like successful form submissions, saved changes, or completed actions.\n\n**Preview:** Green toast with checkmark icon, perfect for success notifications.',
      },
    },
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: 'An error occurred while processing your request.',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use for error messages when operations fail, validations errors, or system issues.\n\n**Preview:** Red toast with error icon, ideal for critical alerts.',
      },
    },
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    message: 'Please review your information before proceeding.',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use for warnings about potential issues, required confirmations, or important notices.\n\n**Preview:** Orange toast with warning icon, great for cautionary messages.',
      },
    },
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    message: 'New features are available. Check them out!',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use for general information, updates, or neutral notifications.\n\n**Preview:** Blue toast with info icon, suitable for general announcements.',
      },
    },
  },
};

export const ShortDuration: Story = {
  name: '2 Second Auto-Close',
  args: {
    type: 'success',
    message: 'This toast will auto-dismiss in 2 seconds',
    duration: 2000,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Short duration (2 seconds) for quick, non-critical messages that don't require much reading time.\n\n**Preview:** Success toast that disappears quickly - watch it vanish!",
      },
    },
  },
};

export const LongDuration: Story = {
  name: '5 Second Auto-Close',
  args: {
    type: 'info',
    message: 'This toast will auto-dismiss in 5 seconds',
    duration: 5000,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Longer duration (5 seconds) for important messages that users may need more time to read.\n\n**Preview:** Info toast that stays visible longer for important information.',
      },
    },
  },
};

export const WithoutCloseButton: Story = {
  args: {
    type: 'info',
    message: 'This toast has no close button',
    showCloseButton: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Toast without close button - user must wait for auto-dismissal. Use for very brief, non-critical messages.\n\n**Preview:** Notice the missing X button - this toast can only be closed automatically.',
      },
    },
  },
};

export const WithAction: Story = {
  name: 'Toast with Action Button',
  args: {
    type: 'success',
    message: 'File uploaded successfully',
    duration: 5000,
    showCloseButton: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Example of how to extend the toast with custom actions. You can add buttons for undo, view details, or other interactions.\n\n**Preview:** Success toast demonstrating how action buttons could be added for enhanced functionality.',
      },
    },
  },
};
