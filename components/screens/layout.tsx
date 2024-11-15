'use client'

import React, { ReactNode } from 'react';

import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header/header";
import { useEffect } from "react";


import { useStore } from '../../store/store';




type LayoutComponentProps = {
    children: ReactNode,
    data: {},
}


export function LayoutComponent({ children, data }: LayoutComponentProps) {
    /*     const store = useStore((state) => state);
        const fetchBasicOptions = store.fetchBasicOptions;
        const fetchPageOptions = store.fetchPageOptions;
    
        const pathname = usePathname();
        const url = pathname === '/' ? '' : pathname;
        const slugs = url.split('/');
        const slug = slugs[slugs.length - 1];
    
    
        useEffect(() => {
            fetchBasicOptions();
            fetchPageOptions(slug);
        }, [pathname]); */



    /*     const store = useStore((state) => state);
        const setBasicOptions = store.setBasicOptions;
        const setPageOptions = store.setPageOptions; */

    /*     useEffect(() => {
            setBasicOptions(data.basicOptions);
            setPageOptions(data.optionsPage);
        }, [data.basicOptions, data.optionsPage]);
     */

    return (
        <>
            <Header />

            <main className="main min-h-screen flex flex-col">
                {children}
            </main>

            <Footer className="mt-auto" />
        </>
    )
};