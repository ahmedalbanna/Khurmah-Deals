import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'خرمة ديلز | Khurmah Deals',
  description: 'أفضل الصفقات والعروض المحلية في الخرمة.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased flex min-h-screen flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
