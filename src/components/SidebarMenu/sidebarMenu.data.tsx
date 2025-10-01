import { MenuItem } from './types';
import {
  HomeIcon,
  SettingsIcon,
  UsersIcon,
  FolderIcon,
  FileTextIcon,
} from '../Icons';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    label: 'Dashboard',
    icon: <HomeIcon size={20} />,
  },
  {
    id: '2',
    label: 'Users',
    icon: <UsersIcon size={20} />,
  },
  {
    id: '3',
    label: 'Projects',
    icon: <FolderIcon size={20} />,
    children: [
      {
        id: '3-1',
        label: 'All Projects',
        icon: <FolderIcon size={16} />,
      },
      {
        id: '3-2',
        label: 'Active',
        icon: <FileTextIcon size={16} />,
      },
    ],
  },
  {
    id: '4',
    label: 'Settings',
    icon: <SettingsIcon size={20} />,
  },
];

export const nestedMenuItems: MenuItem[] = [
  {
    id: '1',
    label: 'Dashboard',
    icon: <HomeIcon size={20} />,
  },
  {
    id: '2',
    label: 'Users',
    icon: <UsersIcon size={20} />,
  },
  {
    id: '3',
    label: 'Projects',
    icon: <FolderIcon size={20} />,
    children: [
      {
        id: '3-1',
        label: 'Web Development',
        icon: <FolderIcon size={16} />,
        children: [
          {
            id: '3-1-1',
            label: 'Frontend',
            icon: <FileTextIcon size={14} />,
          },
          {
            id: '3-1-2',
            label: 'Backend',
            icon: <FileTextIcon size={14} />,
          },
        ],
      },
      {
        id: '3-2',
        label: 'Mobile Apps',
        icon: <FolderIcon size={16} />,
        children: [
          {
            id: '3-2-1',
            label: 'iOS',
            icon: <FileTextIcon size={14} />,
          },
        ],
      },
    ],
  },
  {
    id: '4',
    label: 'Settings',
    icon: <SettingsIcon size={20} />,
  },
];
