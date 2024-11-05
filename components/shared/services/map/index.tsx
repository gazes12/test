import React, { useState } from "react";

import { TextTruncate } from "../../includes/textTruncate";
import { Button } from "../button";

import { Container } from "../../container";
import { Characteristics } from "../characteristics";

import { IService } from "../../includes/types";
import Link from "next/link";
import { Gallery } from "../gallery";

import styles from './style.module.scss';
import { cn } from "@/lib/utils";

export default function ServicesMap({ name, link, price, description, gallery, characteristics }: IService) {
    const [demoImage, setDemoImage] = useState(
        gallery.map(({ src }) => src)
        [Math.floor(Math.random() * gallery.length)]
    );


    return (
        <div
            className={styles.wrapper}
            style={{ backgroundImage: `url(${demoImage})` }}
        >
            <Container>
                <div className="flex justify-between flex-col lg:flex-row">
                    <div className="lg:w-1/2 w-full">
                        <div className="service__content flex flex-col items-start">
                            <Link href={link}>
                                <h2 className={cn('text-4xl font-bold', styles.name)}>{name}</h2>
                            </Link>

                            <span className={cn('text-3xl px-2.5 leading-7 min-h-[20%]', styles.price)}>
                                {price}
                            </span>

                            <TextTruncate className="service__description" maxLength={300} content={description} />

                            {
                                characteristics &&
                                <Characteristics {...characteristics} />
                            }
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <Gallery className="service__gallery" setDemoImageservice={setDemoImage} galleryName={name} items={gallery} />
                    </div>
                </div>

                <Button className="service__btn" url={link} content="Подробнее" />
            </Container>
        </div>
    )
}
