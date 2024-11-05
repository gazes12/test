import { ApiRoutes } from '../api/constants';
import { headers } from "next/headers";


export async function fetchMetaData (slug: string) {
  slug = slug !== '' ? slug : 'main';

  try {
    const response = await fetch(process.env.API_URL + ApiRoutes.META_OPTIONS + '/' + slug); 
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching basic options:', error);
    // Handle error appropriately, maybe return a default value or throw
    return { title: 'Default Title', description: 'Default Description', keywords: '' };
  }
}
