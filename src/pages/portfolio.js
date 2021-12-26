import React from "react"
import * as styles from "../styles/portfolio.module.scss"
import Seo from "../components/Seo"
import { graphql } from "gatsby"
import Projects from "../components/Projects"

export default function portfolio({ data }) {
    console.log(data)
    const projects = data.projects.nodes

    return (
        <>
            <Seo
                pageTitle="Web Development Blog | Isaac Chukwuka | JavaScript, React.js, Gatsby.js, Node.js, Firebase, Aws"
                pageUrl="portfolio"
                pageDescription="Web Development portfolio by Isaac Chukwuka | JavaScript, React.js, Gatsby.js, Node.js, Firebase, Aws, Interests, hobbies, tutorials and more"
            />
            <div className={styles.container}>
                <div className={styles.intro}>
                    <h1>Recent works</h1>
                    <p>Portfolio showcase of some of my work.</p>
                </div>

                <section>
                    {projects.map((projects, index) => {
                        return <Projects projects={projects} key={index} />
                    })}
                </section>
            </div>
        </>
    )
}

export const projectsQuery = graphql`
    query projectsQuery {
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
