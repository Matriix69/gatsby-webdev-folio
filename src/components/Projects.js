import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage} from "gatsby-plugin-image"

export default function Projects({projects}) {
    return (
        <Link className="post" to={'/projects/' + projects.frontmatter.slug } key={projects.id}>
            <div className="post__image-wrap">
                <GatsbyImage className="img" image={projects.frontmatter.thumb.childImageSharp.gatsbyImageData} alt={projects.frontmatter.title}/>
            </div>

            <div className="post__content-wrap">
            <div className="post__content">
                <div>
                    <p className="post__subtitle">{projects.frontmatter.stack}</p>
                    <h2 className="post__title">{projects.frontmatter.title}</h2>
                    <p className="post__description">{projects.frontmatter.description}</p>
                </div>
                <div className="see-more">
                    <p>See more</p>
                </div>
            </div>
            </div>
        </Link>        
    )
}
