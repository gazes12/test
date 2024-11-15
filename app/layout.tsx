import "./globals.css";
import { Open_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { client } from "@/lib/requestClient";
import { GetBasicOptionsDocument, GetMetaPageDocument, GetPageOptionsDocument } from "@/generates/gql/graphql";
import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";
import { LayoutComponent } from "@/components/screens/layout";
const OpenSans = Open_Sans({
  subsets: ['cyrillic'],
  variable: '--font-open-sans',
  weight: ['400', '500', '600', '700', '800'],
});

/* async function getSlug(): Promise<string | null> { 
  const headersList = await headers();
  const slug = await headersList.get('x-slug');
  return slug;
}
 */
async function fetchMain() {
/*   const slug = await getSlug();
 */  const { basicOptions } = await client.request(GetBasicOptionsDocument);
/*   const { optionsPage } = await client.request(GetPageOptionsDocument, { slug });
 */  return {
    basicOptions,
/*     optionsPage
 */  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const data = await fetchMain();
  return (
    <html lang="en">
      <body
        className={cn(OpenSans.className, 'light')}
      >
        <LayoutComponent data={data} children={children} />

      </body>
    </html>
  );
}
