import "./globals.css";
import { Open_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { client } from "@/lib/requestClient";
import { GetBasicOptionsDocument } from "@/generates/gql/graphql";

const OpenSans = Open_Sans({
  subsets: ['cyrillic'],
  variable: '--font-open-sans',
  weight: ['400', '500', '600', '700', '800'],
});

async function getBasicOptions() {
  const { basicOptions } = await client.request(GetBasicOptionsDocument);
  return basicOptions;
}

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
