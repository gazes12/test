import { cn } from '@/lib/utils';
import Image from 'next/image';
import * as React from 'react';

interface IGalleryItem {
    src: string,
    title: string,
    alt: string,
}

interface IGallery {
    items: IGalleryItem[],
    setDemoImageCard: Dispatch<SetStateAction<string>>,
    galleryName: string,
    className?: string,
}

export function Gallery({ items, galleryName, setDemoImageCard, className }: IGallery) {
    const data = items.map(({ src, title, alt }, key) => {
        const isVisible = key < 4;
        if (isVisible) {
            return (
                <div
                    key={key} className='sm:w-1/2 w-full'
                    onMouseEnter={() => setDemoImageCard(src)}
                >
                    <a
                        className='gallery__image media-container flare-wrapper'
                        data-fancybox={'gallery-' + galleryName}
                        data-src={src} data-caption={title}
                    >


                        <Image
                            title={title} src={src} alt={alt}
                        />
                        <span className="flare"></span>
                    </a>
                </div >
            )
        } else {
            return (
                <a
                    style={{ display: 'none' }}
                    data-fancybox={'gallery-' + galleryName}
                    data-src={src}
                    data-caption={title}
                >

                    <img title={title} src={src} alt={alt} />
                    <span className="flare"></span>


                </a>
            )
        }
    })

    return (
        <div className={cn('gallery flex flex-wrap', className)}>
            {data}
        </div>
    )
}
