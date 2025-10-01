'use client';

import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Input, Toast, SidebarMenu } from '@/components';
import { HomeIcon, ShoppingCartIcon, SettingsIcon } from '@/components/Icons';
import styles from './page.module.css';

export default function Home() {
  const [showToast, setShowToast] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const methods = useForm({
    mode: 'onChange',
  });

  return (
    <FormProvider {...methods}>
      <div className={styles.container}>
        <h1>Component Library Demo</h1>

        <section className={styles.section}>
          <h2>Input</h2>

          <div className={styles.inputsGrid}>
            <Input
              name="username"
              label="Username"
              placeholder="Enter your username"
              minLength={3}
              maxLength={20}
              helperText="3-20 characters"
              clearable={true}
            />

            <Input
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              helperText="Enter valid email address"
              clearable={true}
            />

            <Input
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              minLength={6}
              helperText="Minimum 6 characters"
              clearable
            />

            <Input
              name="phone"
              type="tel"
              label="Phone Number"
              placeholder="Enter your phone"
              pattern="[0-9+\\-\\s()]+"
              helperText="Optional phone number"
            />
          </div>
        </section>

        {/* Toast demo */}
        <section className={styles.section}>
          <h2>Toast Component</h2>
          <button onClick={() => setShowToast(true)} className={styles.button}>
            Show Toast
          </button>
          {showToast && (
            <Toast
              type="success"
              message="Operation completed successfully!"
              duration={3000}
              onClose={() => setShowToast(false)}
            />
          )}
        </section>

        {/* Sidebar demo */}
        <section className={styles.section}>
          <h2>Sidebar Menu</h2>
          <button onClick={() => setIsMenuOpen(true)} className={styles.button}>
            Open Menu
          </button>
          <SidebarMenu
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            title="Main Menu"
            items={[
              {
                id: '1',
                label: 'Home',
                icon: <HomeIcon size={20} />,
              },
              {
                id: '2',
                label: 'Products',
                icon: <ShoppingCartIcon size={20} />,
              },
              {
                id: '3',
                label: 'Settings',
                icon: <SettingsIcon size={20} />,
              },
            ]}
          />
        </section>
      </div>
    </FormProvider>
  );
}
