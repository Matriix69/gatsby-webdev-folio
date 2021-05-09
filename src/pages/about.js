import React from 'react'
import Hero from '../components/Hero'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from '../styles/about.module.scss'
import Seo from '../components/Seo'

import { FaUserTie } from 'react-icons/fa';
import { RiMovie2Line } from 'react-icons/ri';
import { BiMicrochip, BiCodeAlt  } from 'react-icons/bi';
import { IoBarbellOutline  } from 'react-icons/io5';

export default function About() {
    const skills = ['JavaScript', 'React(Gatsby)', 'Firebase', 'Aws', 'Node.js'];
    return (
        <>
            <Seo 
                pageTitle="iMatrix | Full-Stack Web Developer | About"
                pageUrl="about"
                pageDescription="Personal is the perfect theme for developers, designers and other creatives."
            />
            <Hero
                title={'About'}
                description={'A self-taught developer'}
                image={
                    <StaticImage 
                        className="hero__image" 
                        loading="eager"  
                        src="../images/about.jpg" alt="home hero" 
                    />
                }
            />
            <section className='wrap wrapper'>
                <div className={styles.content}>

                    
                    <h2 className={styles.heading}>Changelog 1.0</h2>
                    <div className={styles.about_img}>
                        <StaticImage 
                            className={styles.img}
                            loading="eager"  
                            src="../images/isaac-logo.png" alt="about" 
                        />
                        <p>Hi! <strong>i'm isaac chukwuka (also known as matrix)</strong>, i'm a <strong>self-taught Fullstack developer</strong> 💻, single, 20-something-year-old, with a strong educational background in <strong>Computer engineering</strong>. 
                            I do freelance work <span role="img" aria-label="smile-emoji"> 🚀 </span> based in Nigeria, but I do work remotely for international clients.
                        </p>
                    </div>
                    
                    <p>I started a noob coder, moving onto 
                     Front-End Website development. Through the years I trained myself into <strong>Html Css </strong> and <strong>Javascript</strong> and 
                     moved onto <strong>NodeJS</strong> as a <strong>Fullstack developer.</strong></p>

                    <p>Fast-forward to today, and I've had the privilege to make design and develop nice responsive 
                    web app for few start up companies. My main focus these days is building accessible, inclusive 
                    products and digital experiences for a variety of clients and keep developing myself! the 
                    learning never stops.<span role="img" aria-label="smile-emoji">🙂</span></p>

                    <p>Here are a few technologies I've been working with recently:</p>

                    <ul className={styles.skills_list}>
                        {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                    
                    <h2 className={styles.heading}>Interests 1.0</h2>

                    <h2 className={styles.heading}>Job <FaUserTie/></h2>
                    <p>
                        If you want to hire me, I'm interested to work in companies that offer
                        <strong> modern technologies such as Node.js, React.js, Gatsby.js, Firebase / Aws</strong> etc. 
                        I am looking for a role that challenges me and where I can help
                        designing solutions.
                    </p>

                    <h2 className={styles.heading}> Technology <BiMicrochip/></h2>
                    <p>
                        I'm fascinated by technological advances which companies such as Google, Apple, Tesla,
                        SpaceX make. also i make tech videos and review gadgets <a  rel="noreferrer" href="https://www.youtube.com/channel/UC3uDI7f7hAWRoOLtXAKKt4Q" target="_blank"><b>@AllRound-Rivew</b></a>
                    </p>

                    <h2 className={styles.heading}>Coding <BiCodeAlt/></h2>
                    <p>
                        Whenever i have a free time, I'm coding, reading up documentations or leaning something new!
                    </p>

                    <h2 className={styles.heading}>Workout <IoBarbellOutline/></h2>
                    <p>
                        I need to exercise within the morning before my brain figures out what I‘m doing. 
                        <em> never forget to compare yourself only against yourself</em>
                    </p>

                    <h2 className={styles.heading}>Favorite Movies <RiMovie2Line/></h2>
                    <p >
                        Fantastic mr fox, 
                        Ratatouille, 
                        Zootopia,
                        Spider man: into the spider verse,
                        Coco,
                        Up,
                        The Incredibles,
                        Monters,
                        Big hero 6,
                        How to train your dragon,
                        Puss in boots,
                        Despicable me,
                        Kung Fu panda,
                        Cars,
                        Rio,
                        i'm sorry i love animations! <span role="img" aria-label="smile-emoji">🤓</span>
                    </p>

                </div>

            </section>
        </>
    )
}