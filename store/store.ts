import { GetBasicOptionsDocument, GetPageOptionsDocument } from '@/generates/gql/graphql';
import { client } from '@/lib/requestClient';
import { headers } from 'next/headers';
import { usePathname } from 'next/navigation';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  (set, get) => ({
    optionsPage: [],
    logo: null,
    contacts: null,
    /*     currentSlug: null, */


    setBasicOptions: async ({ logo, contacts }) => {
      set((state) => ({ logo, contacts }));
    },

    setPageOptions: async (data) => {
      set((state) => ({
        optionsPage: [
          ...state.optionsPage,
          { ...data/* , id: slug */ },
        ]
      }));
    }



    /*     fetchBasicOptions: async () => {
          const { basicOptions } = await client.request(GetBasicOptionsDocument);
          set({ logo: basicOptions.logo, contacts: basicOptions.contacts });
        },
    
        fetchPageOptions: async (slug) => {
          set((state) => (
            {
              currentSlug: slug,
            }
          ))
    
          const { optionsPage } = get();
    
          if (optionsPage.length > 0 && optionsPage.find((o) => o.id === slug)) {
            return;
          }
    
          const response = await client.request(GetPageOptionsDocument, { slug: slug });
    
          set((state) => ({
            optionsPage: [
              ...state.optionsPage,
              { ...response.optionsPage, id: slug },
            ]
          }));
        }, */


  })
);

