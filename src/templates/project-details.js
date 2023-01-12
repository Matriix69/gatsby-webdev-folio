import React from "react"
import * as styles from "../styles/project-details.module.scss"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import Slide from "../components/Slider"
import { FiGithub } from "react-icons/fi"
import { MdOpenInNew } from "react-icons/md"

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
        preview,
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
                pageImage={preview}
            />
            <section className={styles.top_project_content}>
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
                <div className={styles.project_content}>
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
                                <MdOpenInNew />
                                View live
                            </a>

                            {github && github !== "none" ? (
                                <a
                                    href={github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.project_github}
                                >
                                    <FiGithub />
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
                preview
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
