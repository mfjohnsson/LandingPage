import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';

import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Martin Johansson || Developer',
  description: 'En portfolio för några av mina projekt',
  icons: {
    icon: [
      { url: '/favicon.ico?v=1' }, 
    ],
    apple: [{ url: '/apple-touch-icon.png?v=1' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning className='h-full'>
      <body className='antialiased bg-background text-foreground min-h-full'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className='h-full w-full'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
