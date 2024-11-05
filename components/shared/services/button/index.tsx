import { cn } from '@/lib/utils';
import Link from 'next/link';
import * as React from 'react';
import './style.scss';

export interface IButton {
    url: string,
    className: string,
    content: string,
}

export function Button({ url, className, content }: IButton) {
    return (
        <Link href={url} className={cn('btn', className)}>
            {content}
        </Link>

    )
}
