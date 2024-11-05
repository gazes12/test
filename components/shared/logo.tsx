import Image from 'next/image';
import React from 'react';
import { useStore } from '../../store/store';
import { Skeleton } from "@/components/ui/skeleton"
import Link from 'next/link';
import { cn } from '@/lib/utils';



type LogoProps = {
    className: string,
}


export function Logo({ className }: LogoProps) {
    const { logo } = useStore((state) => state);

    if (logo) {

        return (
            <Link href="/" className={cn('logo flex items-center gap-3 mb-5', className)}>
                <Image className='mb-4' src={logo.src} alt={logo.title} width={90} height={90} />
                <span className='text-2xl' dangerouslySetInnerHTML={{ __html: logo.title }}></span>
            </Link>
        )
    } else {
        return (
            <Link href="/" className={cn('logo flex items-center gap-3 mb-5', className)}>
                <Skeleton className="mb-4 w-[100px] h-[100px] rounded-full" />
                <Skeleton className="w-[200px] h-[20px] rounded-full" />
            </Link>
        )
    }
} 