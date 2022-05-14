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
import { experience, stack, Interests } from "../constants/constants"

const WorkExperience = ({ current, title, company, date }) => {
    return (
        <section className={styles.work_container}>
            <span className={styles.span}>
                {current ? (
                    <>
                        <span className={styles.ping}></span>
                        <span className={styles.notping}></span>
                    </>
                ) : (
                    <span className={styles.notping}></span>
                )}
            </span>
            <div>
                <span>{date}</span>
                <h1>{title}</h1>
                <h2>{company}</h2>
            </div>
        </section>
    )
}

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
                        <div>
                            <div className={styles.about_hello}>
                                <h1>Your Host </h1>
                                <Robo className={styles.bounce} />
                            </div>

                            <p className="pd">
                                Hi,{" "}
                                <code className={"hi_gradient"}>I'm Isaac</code>
                                , a <strong>Software Engineer </strong> with
                                hands on experience developing Fullstack web
                                applications and APIs 💻, I do freelance jobs
                                with a strong educational background in{" "}
                                <strong>Computer engineering</strong> and full
                                understanding of data structures, algorithms and
                                system design.
                            </p>

                            <p className="pd">
                                I like working with <strong>Javascript</strong>,{" "}
                                <strong>React.js</strong> and{" "}
                                <strong>NodeJS</strong> Among other things, and
                                I'll be sharing my learnings and experience
                                here, welcome!
                                <span role="img" aria-label="smile-emoji">
                                    🙂
                                </span>
                            </p>
                        </div>
                    </div>

                    <h2 className={styles.heading}>
                        Work experience <FaCode />
                    </h2>
                    <div className={styles.work}>
                        {experience.map(e => (
                            <WorkExperience
                                current={e.current}
                                date={e.date}
                                title={e.title}
                                company={e.company}
                            />
                        ))}
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
                        {stack.map(s => (
                            <div title={s.title} className={styles.skills_icon}>
                                {s.icon}
                            </div>
                        ))}
                    </div>

                    <hr />

                    <h2 className={styles.heading}>Interests 1.0</h2>

                    <h3 className={styles.sub_heading}>
                        Job <FaUserTie />
                    </h3>
                    <p className="pd">
                        If you want to hire me, I'm interested to work in
                        companies that offer
                        <strong>
                            modern technologies such as Node.js, React.js,
                            Gatsby.js, Firebase / Aws
                        </strong>
                        , etc. I'm looking for a role that challenges me and
                        where I can help design solutions.
                    </p>

                    <h3 className={styles.sub_heading}>
                        Technology <BiMicrochip />
                    </h3>
                    <p className="pd">
                        I'm fascinated by technological advances which companies
                        such as Google, Apple, Tesla, SpaceX make. also, I make
                        tech videos and review gadgets{" "}
                        <a
                            rel="noreferrer"
                            href="https://www.youtube.com/channel/UC3uDI7f7hAWRoOLtXAKKt4Q"
                            target="_blank"
                        >
                            <b>@All Round Rivew</b>
                        </a>
                    </p>

                    <h3 className={styles.sub_heading}>
                        Coding <BiCodeAlt />
                    </h3>
                    <p className="pd">
                        Whenever I have free time, I'm coding, reading up
                        documentation, or learning something new!
                    </p>

                    <h3 className={styles.sub_heading}>
                        Gaming <CgGames />
                    </h3>
                    <p>
                        I enjoy playing a lot of video games with my favorites
                        at the moment been Call of duty(Cod) and PlayerUnknown's
                        Battlegrounds(pubg)
                    </p>

                    <h3 className={styles.sub_heading}>
                        Workout <IoBarbellOutline />
                    </h3>
                    <p className="pd">
                        I need to exercise within the morning before my brain
                        figures out what I‘m doing.
                        <em>
                            {" "}
                            never forget to compare yourself only against
                            yourself
                        </em>
                    </p>

                    <h3 className={styles.sub_heading}>
                        Favorite Movies <CgLaptop />
                    </h3>
                    <p className="pd">
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
