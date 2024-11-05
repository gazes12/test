import React from 'react';
import { Logo } from './logo';
import { Contacts } from './contacts';
import { Container } from './container';
import { cn } from '@/lib/utils';

type FooterProps = {
    className?: string,
}

export const Footer = ({ className }: FooterProps) => (
    <Container>
        <footer className={cn(className, 'py-10 footer flex flex-col items-start')}>
            <Logo />
            <Contacts className="footer__contacts" />
        </footer>
    </Container>
);