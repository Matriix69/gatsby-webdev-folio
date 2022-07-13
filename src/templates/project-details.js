import React from "react"
import * as styles from "../styles/project-details.module.scss"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import Slide from "../components/Slider"
import { FaGithub } from "react-icons/fa"
import { MdLiveTv } from "react-icons/md"

export default function ProjectDetails({ data }) {
    //destructure grahpql data
    const { html } = data.markdownRemark
    const {
        title,
        stack,
        slug,
        description,
        carousel1,
        carousel2,
        carousel3,
        url,
        github,
    } = data.markdownRemark.frontmatter

    //images for slide show
    const slides = [
        {
            img: carousel1.childImageSharp.gatsbyImageData,
        },
        {
            img: carousel2.childImageSharp.gatsbyImageData,
        },
        {
            img: carousel3.childImageSharp.gatsbyImageData,
        },
    ]

    return (
        <>
            <Seo
                pageTitle={`${title} | ${data.site.siteMetadata.title}`}
                pageUrl={`projects/${slug}`}
                pageDescription={description}
                // pageImage={thumb}
            />
            <section className={styles.top_project_content}>
                <div className={styles.project_content}>
                    <div className={styles.heading}>
                        <h1>{title}</h1>
                        <div className="post__subtitle">
                            Built with{" "}
                            {stack
                                .split(",")
                                .map((stack, i) => stack)
                                .join(", ")}
                        </div>
                    </div>

                    <div className={styles.slideWrapper}>
                        <Slide slides={slides} title={title} />
                    </div>

                    <div className={styles.project_details}>
                        <div
                            className="pd"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />

                        <div className={styles.project_actions}>
                            <a
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.project_live}
                            >
                                <MdLiveTv />
                                View live
                            </a>

                            {github && github !== "none" ? (
                                <a
                                    href={github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.project_github}
                                >
                                    <FaGithub />
                                    See repo on github
                                </a>
                            ) : null}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export const query = graphql`
    query Projectpage($slug: String) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                stack
                title
                slug
                description
                url
                github
                carousel1 {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                carousel2 {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                carousel3 {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`
