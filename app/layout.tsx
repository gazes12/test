import "./globals.css";
import { Open_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';

const OpenSans = Open_Sans({
  subsets: ['cyrillic'],
  variable: '--font-open-sans',
  weight: ['400', '500', '600', '700', '800'],
});


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(OpenSans.className, 'light')}
      >
        <header>ШАПКА</header>
        {children}
      </body>
    </html>
  );
}
