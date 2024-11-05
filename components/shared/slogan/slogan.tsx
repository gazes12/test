'use client'

import React from 'react';
import { useStore } from '../../../store/store';
import './style.scss';
import { Skeleton } from "@/components/ui/skeleton"


export const Slogan = () => {
    const slug = useStore((state) => state.currentSlug);
    const data = useStore((state) => state.optionsPage).find(o => o.id === slug);

    return (
        <div className='pt-40'>
            {
                data?.slogan ?
                    <h1 className='text-center slogan' dangerouslySetInnerHTML={{ __html: data?.slogan }}></h1>
                    :
                    <>
                        <Skeleton className="mx-auto mb-5 w-[80%] h-[40px] rounded-full" />
                        <Skeleton className="mx-auto mb-5 w-[60%] h-[40px] rounded-full" />
                        <Skeleton className="mx-auto w-[40%] h-[40px] rounded-full" />
                    </>

            }
        </div>
    );
}

