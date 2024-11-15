import { cn } from '@/lib/utils';
import React from 'react';
import { Logo } from '../logo';
import { Contacts } from '../contacts';
import { Container } from '../container';
import { Breadcrumbs } from '../breadcrumbs';
import { Slogan } from '../slogan/slogan';
import { Backshowslides } from '../backshowslides/backshowslides';
import { useStore } from '@/store/store';


type HeaderProps = {
    className?: string;
}

export function Header({ className }: HeaderProps) {
    const slug = useStore((state) => state.currentSlug);
    const backshow_slides = useStore((state) => state.optionsPage).find(o => o.id === slug)?.backshow_slides;


    return (
        <Container className='min-h-screen flex flex-col'>
            <header className={cn(className, 'py-10 header')}>
                <div className="header-top flex items-center justify-between">
                    <Logo />
                    <Contacts className='text-end header__contacts' />
                </div>

                <Breadcrumbs />

                {/*                 <Slogan />
 */}

                {/*                 <Backshowslides
                    items={backshow_slides}
                    options={{ autoplay: true, autoplayTimeout: 2000, autoplaySpeed: 1000, dots: false, loop: true, nav: false, items: 1, margin: 10 }}
                    className='header-carousel__slide' /> */}
            </header>
        </Container>
    )
}