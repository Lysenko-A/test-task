import React from 'react';
import type { Metadata } from 'next';
import { PT_Serif, Cabin } from 'next/font/google';
import { MantineProvider, ColorSchemeScript, Box } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import { theme } from '@/theme';

import './globals.css';

const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pt-serif',
});

const cabin = Cabin({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cabin',
});

export const metadata: Metadata = {
  title: 'Test task',
  description: 'Test task for Seedium ',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout(props: RootLayoutProps) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
        <link rel='shortcut icon' href='/favicon.svg' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
        />
      </head>
      <body className={`${ptSerif.variable} ${cabin.variable}`}>
        <MantineProvider theme={theme}>
          <Box
            p='15px'
            ta='center'
            fz='34px'
            lh='51px'
            fw={400}
            className='font-pr-serif'
            bg='white'
          >
            AI Ignition
          </Box>

          {props.children}
        </MantineProvider>
      </body>
    </html>
  );
}
