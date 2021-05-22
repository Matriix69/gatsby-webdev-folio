import React from 'react'
import * as styles from '../styles/project-details.module.scss'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'
import Slide from '../components/Slider'

export default function ProjectDetails({data}) {

    //destructure grahpql data
    const {html} = data.markdownRemark
    const {title, stack, slug, description, carousel1, carousel2, carousel3} = data.markdownRemark.frontmatter
    
    //images for slide show
    const slides = [
        {
            img: carousel1.childImageSharp.gatsbyImageData
        },
        {
            img: carousel2.childImageSharp.gatsbyImageData
        },
        {
            img: carousel3.childImageSharp.gatsbyImageData
        }
    ]

    

    return (
        <>
            <Seo 
                pageTitle={`${title} | ${data.site.siteMetadata.title}`}
                pageUrl={`projects/${slug}`}
                pageDescription={description}
            />
            <section>
                <div className={styles.project_content}>
                    <div className={styles.heading}>
                        <h1>{title}</h1>
                        <h6>{stack}</h6>
                    </div>
                   

                    <Slide slides={slides} title={title}/>

                    <div dangerouslySetInnerHTML={{__html: html}} />
                </div>
            </section>
        </>
    )
}

export const query = graphql`
    query Projectpage($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                stack
                title
                slug
                description
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
