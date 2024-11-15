import { Services } from '@/components/shared/services';
import { GetServicesDocument } from '@/generates/gql/graphql';
import { client } from '@/lib/requestClient';
import { unstable_cache } from 'next/cache';
import * as React from 'react';


const getPosts = unstable_cache(
    async () => {
        return await client.request(GetServicesDocument);
    },
    ['posts'],
    { revalidate: 10, tags: ['posts'] }
)

export default async function ServicesPage() {
    const res = await getPosts();
    return <Services items={res.services?.nodes} />;
}
