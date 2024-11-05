import * as React from 'react';
import type { IOwlCarousel } from '@/types/owlcarousel.types';
import { cn } from '@/lib/utils';
import { OwlCarousel_ } from '@/components/helpers/owlcarousel';
import './style.scss';

export function Backshowslides({ options, items, className }: IOwlCarousel) {
    const [key, setKey] = React.useState(0);
    React.useEffect(() => {
        setKey(key + 1);
    }, [items, key]);

    var modify_options = { ...options, key: key + 1 };


    if (items) {
        return (
            <div className="backshow-carousel">
                <OwlCarousel_ options={modify_options} className='owl-theme' >
                    {items.map(({ src }, index) => (
                        <div key={index} className={cn('slide', className || '')} style={{ backgroundImage: `url(${src})` }}></div>))}
                </OwlCarousel_ >

                <div className="cover"></div>
            </div>
        );
    }
}
