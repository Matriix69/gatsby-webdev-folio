import React from "react"

//gatsby component import
import { graphql, Link } from "gatsby"

//styles
import "../styles/global.scss"
import * as styles from "../styles/home.module.scss"

//iocns
import { FaReact, FaNodeJs, FaCode } from "react-icons/fa"
import { BiCode } from "react-icons/bi"
import { IoLogoFirebase } from "react-icons/io5"

//my components
import Seo from "../components/Seo"
import Projects from "../components/Projects"
import Svg from "../assets/isaac.svg"

export default function Home({ data }) {
    const projects = data.projects.nodes

    return (
        <>
            <Seo
                pageTitle="Isaac Chukwuka | Software Engineer"
                description="I'm a software engineer with hands-on experience developing Fullstack, high-performance applications using cutting-edge technologies"
            />

            <section className={styles.home}>
                <div className={styles.introd}>
                    <h1>Hey, I'm</h1>
                    <h2>Isaac Chukwuka</h2>
                    <p>
                        I'm a designer, content creator, and a software
                        tinkerer. I spend my days tapping on keyboards and
                        Googling stuff ;)
                    </p>
                </div>
                <div className={styles.introd_icon}>
                    <Svg />
                </div>
            </section>

            <section className="listing">
                <div className="info-list">
                    <div className="info-list-icon">
                        <FaCode />
                    </div>
                    <div className="info-list-paragraph">
                        <p>
                            I am a <strong>full-stack Software Engineer</strong>
                            , Co-founder{" "}
                            <a
                                className="ar"
                                href="https://allroundreview.com/"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                            >
                                AllRoundReview.
                            </a>{" "}
                            I freelance and do remote jobs.
                        </p>
                        <Link className="setUp" to="/contact">
                            Set up a meeting
                        </Link>
                    </div>
                </div>

                <div className="info-list">
                    <div className="info-list-icon">
                        <FaReact />
                    </div>
                    <div className="info-list-paragraph">
                        <p>
                            For frontend design, I'm personally a huge fan of
                            <b> React.js</b> and it's ecosystem (e.g.{" "}
                            <b> Next.js & Gatsby.js</b>).
                        </p>
                    </div>
                </div>

                <div className="info-list">
                    <div className="info-list-icon">
                        <FaNodeJs />
                    </div>
                    <div className="info-list-paragraph">
                        <p>
                            For backend work, my go-to tool is <b>Node.js</b>,
                            very efficient and overall developer productive. I
                            have also worked with PHP in the past
                        </p>
                    </div>
                </div>

                <div className="info-list">
                    <div className="info-list-icon">
                        <IoLogoFirebase />
                    </div>
                    <div className="info-list-paragraph">
                        <p>
                            For my serverless and cloud computing, my go-to tool
                            is <b>Firebase</b>, which is part of{" "}
                            <b>Googles cloud platform</b> (gcp), also{" "}
                            <b>Amazon web services</b>(aws) as my alternative.
                        </p>
                    </div>
                </div>

                <hr />
            </section>

            <section className={styles.built}>
                <h2 className="post-heading">Some Things I’ve Built</h2>

                <div className="works">
                    {projects.slice(0, 2).map((projects, index) => {
                        return <Projects projects={projects} key={index} />
                    })}
                </div>
            </section>
        </>
    )
}

export const query = graphql`
    query MyWork {
        projects: allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
        ) {
            nodes {
                frontmatter {
                    slug
                    stack
                    title
                    description
                    thumb {
                        childImageSharp {
                            gatsbyImageData(layout: CONSTRAINED, formats: WEBP)
                        }
                    }
                }
                id
            }
        }
    }
`
