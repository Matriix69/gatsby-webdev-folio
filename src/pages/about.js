import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/about.module.scss"
import Seo from "../components/Seo"

import { FaUserTie, FaTools, FaCode } from "react-icons/fa"
import { BiMicrochip, BiCodeAlt } from "react-icons/bi"
import { IoBarbellOutline } from "react-icons/io5"
import { CgGames, CgLaptop } from "react-icons/cg"
import { AiOutlineSmile } from "react-icons/ai"

import Robo from "../assets/robot.svg"
import Javascript2 from "../assets/javaScript.svg"
import Typescript from "../assets/Typescript.svg"
import Html from "../assets/HTML.svg"
import Css from "../assets/CSS.svg"
import Sass from "../assets/sass-1.svg"
import ReactIcon from "../assets/react-2.svg"
import Redux from "../assets/redux.svg"
import Next from "../assets/nextjs.svg"
import Gatsby from "../assets/gatsby.svg"
import Node from "../assets/node.js.svg"
import Express from "../assets/express.js.svg"
import Firebass from "../assets/firebase-1.svg"
import Aws from "../assets/aws-2.svg"
import Mongodb from "../assets/mongodb.svg"
import Mysql from "../assets/MySQL.svg"

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
                                src="../assets/isaac_chukwuka.jpg"
                                alt="about"
                            />
                        </div>

                        <div className={styles.about_hello}>
                            <h1>Hello </h1>
                            <Robo className={styles.bounce} />
                        </div>

                        <p>
                            Hi, <strong>I'm Isaac</strong>, a{" "}
                            <strong>
                                Software Engineer with hands on experience
                                developing Fullstack web applications and APIs
                            </strong>{" "}
                            💻, I do freelance jobs with a strong educational
                            background in{" "}
                            <strong>
                                Computer engineering and full understanding of
                                data structures, algorithms and system design.
                            </strong>
                        </p>

                        <p>
                            I like working with <strong>Javascript</strong>,{" "}
                            <strong>React.js</strong> and{" "}
                            <strong>NodeJS</strong> Among other things, and I'll
                            be sharing my learnings and experience here,
                            welcome!
                            <span role="img" aria-label="smile-emoji">
                                🙂
                            </span>
                        </p>
                    </div>

                    <h2 className={styles.heading}>
                        Work experience <FaCode />
                    </h2>
                    <div className={styles.work}>
                        <section className={styles.work_container}>
                            <span className={styles.span}>
                                <span className={styles.ping}></span>
                                <span className={styles.notping}></span>
                            </span>
                            <div>
                                <span class="text-light-secondary dark:text-dark-secondary">
                                    November 2019 - Current · NG
                                </span>
                                <h1 class="text-lg font-bold text-light-primary dark:text-dark-primary">
                                    Freelancing full-stack web developer
                                </h1>
                                <h2>Matrix Web Consulting</h2>
                            </div>
                        </section>
                        <section className={styles.work_container}>
                            <span className={styles.span}>
                                <span className={styles.notping}></span>
                            </span>
                            <div>
                                <span class="text-light-secondary dark:text-dark-secondary">
                                    May 2021 - August 2021 · Lagos NG
                                </span>
                                <h1 class="text-lg font-bold text-light-primary dark:text-dark-primary">
                                    Front-end engineer
                                </h1>
                                <h2>Apex application Limited</h2>
                            </div>
                        </section>
                    </div>

                    <hr />

                    <h2 className={styles.heading}>
                        Tech stack 1.0 <FaTools />
                    </h2>
                    <p>
                        Here are a few technologies I've been working with
                        recently
                    </p>

                    <div className={styles.skills}>
                        <div className={styles.skills_icon}>
                            <Javascript2 />
                        </div>
                        <div className={styles.skills_icon}>
                            <Typescript />
                        </div>
                        <div className={styles.skills_icon}>
                            <Html />
                        </div>
                        <div className={styles.skills_icon}>
                            <Css />
                        </div>
                        <div className={styles.skills_icon}>
                            <Sass />
                        </div>
                        <div className={styles.skills_icon}>
                            <ReactIcon />
                        </div>
                        <div className={styles.skills_icon}>
                            <Redux />
                        </div>
                        <div className={styles.skills_icon}>
                            <Next />
                        </div>
                        <div className={styles.skills_icon}>
                            <Gatsby />
                        </div>
                        <div className={styles.skills_icon}>
                            <Node />
                        </div>
                        <div className={styles.skills_icon}>
                            <Express />
                        </div>
                        <div className={styles.skills_icon}>
                            <Firebass />
                        </div>
                        <div className={styles.skills_icon}>
                            <Aws />
                        </div>
                        <div className={styles.skills_icon}>
                            <Mongodb />
                        </div>
                        <div className={styles.skills_icon}>
                            <Mysql />
                        </div>
                    </div>

                    <hr />

                    <h2 className={styles.heading}>
                        Interests 1.0 <AiOutlineSmile />
                    </h2>

                    <h2 className={styles.heading}>
                        Job <FaUserTie />
                    </h2>
                    <p>
                        If you want to hire me, I'm interested to work in
                        companies that offer
                        <strong>
                            {" "}
                            modern technologies such as Node.js, React.js,
                            Gatsby.js, Firebase / Aws
                        </strong>
                        , etc. I'm looking for a role that challenges me and
                        where I can help design solutions.
                    </p>

                    <h2 className={styles.heading}>
                        {" "}
                        Technology <BiMicrochip />
                    </h2>
                    <p>
                        I'm fascinated by technological advances which companies
                        such as Google, Apple, Tesla, SpaceX make. also, I make
                        tech videos and review gadgets{" "}
                        <a
                            rel="noreferrer"
                            href="https://www.youtube.com/channel/UC3uDI7f7hAWRoOLtXAKKt4Q"
                            target="_blank"
                        >
                            <b>@AllRound-Rivew</b>
                        </a>
                    </p>

                    <h2 className={styles.heading}>
                        Coding <BiCodeAlt />
                    </h2>
                    <p>
                        Whenever I have free time, I'm coding, reading up
                        documentation, or learning something new!
                    </p>

                    <h2 className={styles.heading}>
                        Gaming <CgGames />
                    </h2>
                    <p>
                        I enjoy playing a lot of video games with my favorites
                        at the moment been Call of duty(Cod) and PlayerUnknown's
                        Battlegrounds(pubg)
                    </p>

                    <h2 className={styles.heading}>
                        Workout <IoBarbellOutline />
                    </h2>
                    <p>
                        I need to exercise within the morning before my brain
                        figures out what I‘m doing.
                        <em>
                            {" "}
                            never forget to compare yourself only against
                            yourself
                        </em>
                    </p>

                    <h2 className={styles.heading}>
                        Favorite Movies <CgLaptop />
                    </h2>
                    <p>
                        I love almost any kind of movie, but I'm more of an
                        animation person, I find them entertaining and very easy
                        to watch, some of my favorites are Fantastic Mr. Fox,
                        Ratatouille, Zootopia, Spider-man: Into the
                        spider-verse, Coco, Up, and The Incredibles. As for
                        dramas I enjoyed: Money heist, GoT and maybe Braking
                        bad.{" "}
                        <span role="img" aria-label="smile-emoji">
                            🤓
                        </span>
                    </p>
                </div>
            </section>
        </>
    )
}
