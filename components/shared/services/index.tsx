'use client'

import * as React from 'react';


export function Services({ items }) {
    return (
        <div className="services">
            {items.map(({ title }, index) => (
                <div key={index} className="service">
                    <h1>{title}</h1>
                </div>
            ))}
        </div>
    );
}
