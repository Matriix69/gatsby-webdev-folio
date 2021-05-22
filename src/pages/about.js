import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import * as styles from '../styles/about.module.scss'
import Seo from '../components/Seo'

import { FaUserTie, FaTools } from 'react-icons/fa';
import { RiMovie2Line } from 'react-icons/ri';
import { BiMicrochip, BiCodeAlt  } from 'react-icons/bi';
import { IoBarbellOutline  } from 'react-icons/io5';
import { CgGames  } from 'react-icons/cg';

import Robo from '../assets/robot.svg'
import Javascript2 from '../assets/javaScript.svg'
import Html from '../assets/HTML.svg'
import Css from '../assets/CSS.svg'
import Sass from '../assets/sass-1.svg'
import ReactIcon from '../assets/react-2.svg'
import Redux from '../assets/redux.svg'
import Gatsby from '../assets/gatsby.svg'
import Node from '../assets/node.js.svg'
import Express from '../assets/express.js.svg'
import Firebass from '../assets/firebase-1.svg'
import Aws from '../assets/aws-2.svg'
import Mysql from '../assets/MySQL.svg'
import Jquery from '../assets/JQuery.svg'


export default function About() {
    return (
        <>
            <Seo 
                pageTitle="Isaac Chukwuka | Full-Stack Web Developer | About"
                pageUrl="about"
                pageDescription="Personal is the perfect theme for developers, designers and other creatives."
            />

            <section>
                <div className={styles.content}>

                    <div className={styles.about_img}>

                        <div className={styles.about_img_container}>
                            <StaticImage 
                                className={styles.img}
                                loading="eager"  
                                src="../images/isaac-logo.png" alt="about" 
                            />
                        </div>

                        <div className={styles.about_context}>
                            <div className={styles.about_hello} >
                                <h1 >Hello </h1>
                                <Robo className={styles.bounce}/>
                            </div>
                            
                            <p>
                                Hi, <strong>I'm Isaac Chukwuka (aka Matrix)</strong>, I'm a <strong>self-taught Fullstack developer</strong> 💻, single, 20-something-year-old, with a strong educational background in <strong>Computer engineering</strong>. 
                                I do freelance work <span role="img" aria-label="smile-emoji"> 🚀 </span> based in Nigeria, but I do work remotely for international clients.
                            </p>
                        </div>

                    </div>

                    <p>
                        I started a noob coder, moving onto 
                        Front-End Website development. Through the years I trained myself in <strong>Html, CSS </strong> and <strong>Javascript</strong> and 
                        moved onto <strong>NodeJS</strong> as a <strong>Fullstack developer.</strong>
                    </p>

                    <p>
                        Fast-forward to today, and I've had the privilege to make design and develop nice responsive 
                        web app for a few start-up companies. My main focus these days is building accessible, inclusive 
                        products and digital experiences for a variety of clients, and keep developing myself! the 
                        learning never stops.<span role="img" aria-label="smile-emoji">🙂</span>
                    </p>

                    <hr/>

                    <h2 className={styles.heading}>Tech skills 1.0 <FaTools/></h2>
                    <p>Here are a few technologies I've been working with recently</p>

                    <div className={styles.skills}>
                        <div className={styles.skills_icon}>
                            <Javascript2/>
                        </div>
                        <div className={styles.skills_icon}>
                            <Html/>
                        </div>
                        <div className={styles.skills_icon}>
                            <Css/>
                        </div>
                        <div className={styles.skills_icon}>
                            <Sass/>
                        </div>
                        <div className={styles.skills_icon}>
                            <ReactIcon/>
                        </div>
                        <div className={styles.skills_icon}>
                            <Redux/>
                        </div>
                        <div className={styles.skills_icon}>
                            <Gatsby/>
                        </div>
                        <div className={styles.skills_icon}>
                            <Node/>
                        </div>
                        <div className={styles.skills_icon}>
                            <Express/>
                        </div>
                        <div className={styles.skills_icon}>
                            <Firebass/>
                        </div>
                        <div className={styles.skills_icon}>
                            <Aws/>
                        </div>
                        <div className={styles.skills_icon}>
                            <Mysql/>
                        </div>
                        <div className={styles.skills_icon}>
                            <Jquery/>
                        </div>
                    </div>

                    <hr/>
                    
                    <h2 className={styles.heading}>Interests 1.0</h2>

                    <h2 className={styles.heading}>Job <FaUserTie/></h2>
                    <p>
                        If you want to hire me, I'm interested to work in companies that offer
                        <strong> modern technologies such as Node.js, React.js, Gatsby.js, Firebase / Aws</strong>, etc. 
                        I'm looking for a role that challenges me and where I can help
                        design solutions.
                    </p>

                    <h2 className={styles.heading}> Technology <BiMicrochip/></h2>
                    <p>
                        I'm fascinated by technological advances which companies such as Google, Apple, Tesla,
                        SpaceX make. also, I make tech videos and review gadgets <a  rel="noreferrer" href="https://www.youtube.com/channel/UC3uDI7f7hAWRoOLtXAKKt4Q" target="_blank"><b>@AllRound-Rivew</b></a>
                    </p>

                    <h2 className={styles.heading}>Coding <BiCodeAlt/></h2>
                    <p>
                        Whenever I have free time, I'm coding, reading up documentation, or learning something new!
                    </p>

                    <h2 className={styles.heading}>Gaming <CgGames/></h2>
                    <p>
                        I enjoy playing a lot of video games with my favorites at the moment been Call of duty(Cod) and PlayerUnknown's Battlegrounds(pubg)
                    </p>

                    <h2 className={styles.heading}>Workout <IoBarbellOutline/></h2>
                    <p>
                        I need to exercise within the morning before my brain figures out what I‘m doing. 
                        <em> never forget to compare yourself only against yourself</em>
                    </p>

                    <h2 className={styles.heading}>Favorite Movies <RiMovie2Line/></h2>
                    <p >
                        I love almost any kind of movie, but I'm more of an animation person, 
                        I find them entertaining and very easy to watch, some of my favorites 
                        are Fantastic Mr. Fox, Ratatouille, Zootopia, Spider-man: Into the spider-verse, 
                        Coco, Up, and The Incredibles. As for dramas I enjoyed: Money heist, GoT and maybe 
                        Braking bad. <span role="img" aria-label="smile-emoji">🤓</span>
                    </p>

                </div>

            </section>
        </>
    )
}