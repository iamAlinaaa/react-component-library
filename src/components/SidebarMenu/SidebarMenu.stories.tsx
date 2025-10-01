import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SidebarMenu } from './SidebarMenu';
import { useState, useCallback } from 'react';
import { menuItems, nestedMenuItems } from './sidebarMenu.data';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Navigation/SidebarMenu',
  component: SidebarMenu,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `

A sliding sidebar navigation menu with support for nested submenus. The sidebar slides in from the right and includes a backdrop overlay for better user experience.

## When to Use
- Navigation menus
- Secondary navigation panels
- Settings or configuration menus
- Anywhere you need a slide-out panel with navigation items

## Features
- ✅ Smooth slide-in/slide-out animations
- ✅ Backdrop overlay for better focus
- ✅ Nested menu items with expandable submenus
- ✅ Keyboard accessible (ESC to close)
- ✅ Responsive design
- ✅ Customizable title and menu items

## Interaction
- Click outside the sidebar or on the backdrop to close
- Click the X button in the header to close
- Click menu items with children to expand/collapse submenus
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      description: 'Controls whether the sidebar is visible or hidden',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    title: {
      description: 'The title displayed in the sidebar header',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Menu' },
      },
    },
    items: {
      description:
        'Array of menu items to display. Items can have nested children for submenus.',
      table: {
        type: { summary: 'MenuItem[]' },
      },
    },
    onClose: {
      description:
        'Callback function called when the sidebar is closed (via backdrop, close button, or ESC key)',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

// Common props
const commonProps = {
  title: 'Main Menu' as const,
  onClose: () => console.log('Close clicked'),
};

// Wrapper component to demonstrate interactivity
const SidebarMenuWithState = (
  props: Omit<React.ComponentProps<typeof SidebarMenu>, 'isOpen' | 'onClose'>,
) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = useCallback(() => {
    console.log('Sidebar closed');
    setIsOpen(false);
  }, []);

  const handleOpen = () => {
    console.log('Opening sidebar');
    setIsOpen(true);
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        style={{
          margin: '20px',
          padding: '10px 20px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Open Sidebar
      </button>
      <SidebarMenu {...props} isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

// Main stories
export const Default: Story = {
  render: args => <SidebarMenuWithState {...args} />,
  args: {
    ...commonProps,
    items: menuItems,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Standard sidebar with common navigation items. Includes Dashboard, Users, Projects, and Settings.',
      },
    },
  },
};

export const Closed: Story = {
  args: {
    ...commonProps,
    isOpen: false,
    items: menuItems,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Sidebar in closed state. The sidebar is hidden but ready to slide in when triggered.',
      },
    },
  },
};

export const WithNestedItems: Story = {
  name: 'With Nested Menus',
  render: args => <SidebarMenuWithState {...args} />,
  args: {
    ...commonProps,
    items: nestedMenuItems,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Sidebar with multi-level nested menus. Click on 'Projects' to see expandable submenus with Web Development and Mobile Apps categories.",
      },
    },
  },
};

export const CustomTitle: Story = {
  render: args => <SidebarMenuWithState {...args} />,
  args: {
    ...commonProps,
    items: menuItems,
    title: 'Admin Panel',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Sidebar with custom title. Useful for different sections of your application like Admin Panel, User Settings, or Main Navigation.',
      },
    },
  },
};
