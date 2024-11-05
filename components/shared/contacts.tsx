import Link from 'next/link';
import React from 'react';
import { useStore } from '../../store/store';
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from '@/lib/utils';

type ContactsProps = {
    className?: string,
}

export function Contacts({ className }: ContactsProps) {
    const { contacts } = useStore((state) => state);

    if (contacts) {
        const { modify_tel, clear_tel, address } = contacts;

        return (
            <div className={cn(className, 'contacts')}>
                <Link className='mb-2 text-2xl' dangerouslySetInnerHTML={{ __html: modify_tel }} href={'tel: ' + clear_tel}></Link>
                <address className='text-lg mt-5'>{address}</address>
            </div>
        )
    } else {
        return (
            <div className={cn(className, 'contacts')}>
                <Skeleton className="mb-2 w-[300px] h-[20px] rounded-full" />
                <Skeleton className="w-[400px] h-[20px] rounded-full" />
            </div>
        )
    }
} 