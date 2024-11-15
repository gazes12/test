import * as React from 'react';
import type { IOwlCarousel } from '@/types/owlcarousel.types';
import { cn } from '@/lib/utils';
import { OwlCarousel_ } from '@/components/helpers/owlcarousel';
import './style.scss';

export function Backshowslides({ options, items, className }: IOwlCarousel) {
    if (items) {
        return (
            <div className="backshow-carousel">
                <OwlCarousel_ options={options} className='owl-theme' >
                    {items.map(({ src }, index) => (
                        <div key={index} className={cn('slide', className || '')} style={{ backgroundImage: `url(${src})` }}></div>))}
                </OwlCarousel_ >

                <div className="cover"></div>
            </div >
        );
    }
}
