import React from 'react'
import Particles from "react-tsparticles";

import {particlesOptions} from '../constants/constants' 


export default function hero({title, description, image}) {
    return (
        <section className={"hero_pages"}>
            <Particles
                id="tsparticles"
                options={particlesOptions}
            />
            {image}

            <div className="hero__overlay"></div>

            <div className={'wrap hero_pages_mainpage'}>
                <div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>

        </section>
    )
}
