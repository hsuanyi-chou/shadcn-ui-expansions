import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ui/theme-provider';

import './globals.css';
import Navbar from '@/app/(docs)/layout-parts/navbar/navbar';
import Script from 'next/script';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'shadcn/ui expansions',
  description:
    'shadcn/ui expansions collect lots of useful components which shadcn/ui does not have out of box. All the components are base on shadcn/ui. Just copy and paste. The component is yours.',
  twitter: {
    card: 'summary_large_image',
    title: 'shadcn/ui expansions',
    description:
      'shadcn/ui expansions collect lots of useful components which shadcn/ui does not have out of box. All the components are base on shadcn/ui. Just copy and paste. The component is yours.',
    creator: 'HsuanYi Chou',
  },
  openGraph: {
    title: 'shadcn/ui expansions',
    description:
      'shadcn/ui expansions collect lots of useful components which shadcn/ui does not have out of box. All the components are base on shadcn/ui. Just copy and paste. The component is yours.',
  },
  other: {
    'google-site-verification': 'q2TjtYRJbnG5q8Am34DYea1AL_VmYHOUOLlKQGgamGQ',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MNNJR7PT89"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">{`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-MNNJR7PT89');
                `}</Script>
      <body
        className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <section className="container">{children}</section>
        </ThemeProvider>
      </body>
    </html>
  );
}
