import * as React from 'react';
/* import jQuery from 'jquery'; */
import dynamic from "next/dynamic";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { cn } from '@/lib/utils';

export interface IOwlCarousel_Props {
    className?: String,
    children: React.ReactNode
    options: {},
}

export function OwlCarousel_({ className, children, options }: IOwlCarousel_Props) {
    if (typeof window !== "undefined") {
        window.$ = window.jQuery = require("jquery");
    }

    const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
        ssr: false,
    });

    /*     const [key, setKey] = React.useState(0);
        React.useEffect(() => {
            setKey(key + 1);
        }, []);
     */

    return (
        <div className={cn('owl-carousel', className || '')}>
            <OwlCarousel  {...options}>
                {children}
            </OwlCarousel>
        </div>
    )
}

