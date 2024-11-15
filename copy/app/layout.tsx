import "./globals.css";
import { Open_Sans } from 'next/font/google';
import { LayoutComponent } from "@/components/screens/layout";
import { cn } from '@/lib/utils';
import { client } from '@/lib/requestClient';
import { GetMetaPageDocument, GetPageOptionsDocument, GetBasicOptionsDocument } from '@/generates/gql/graphql';
import { headers } from 'next/headers';

const OpenSans = Open_Sans({
  subsets: ['cyrillic'],
  variable: '--font-open-sans',
  weight: ['400', '500', '600', '700', '800'],
});

async function getSlug(): Promise<string | null> { // Изменили тип возвращаемого значения
  const headersList = await headers();
  const slug = await headersList.get('x-slug');
  return slug;
}

async function fetchMeta() {
  const slug = await getSlug();
  const res = await client.request(GetMetaPageDocument, { slug });
  return res.metaPage;
}


export async function generateMetadata() {
  return await fetchMeta();
}

declare global {
  interface Window {
    $: any;
    jQuery: any;
  }
}

async function fetchMain() {
  const slug = await getSlug();

  const { basicOptions } = await client.request(GetBasicOptionsDocument);
  const { optionsPage } = await client.request(GetPageOptionsDocument, { slug });

  return {
    basicOptions,
    optionsPage
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /*   const data = await fetchMain();
   */
  return (
    <html lang="en">
      <body
        className={cn(OpenSans.className, 'light')}
      >

        <LayoutComponent /* data={data} */ children={children} />

      </body>
    </html>
  );
}
