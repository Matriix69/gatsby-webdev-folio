import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Projects({ projects }) {
    return (
        <article>
            <Link
                className="post"
                to={"/projects/" + projects.frontmatter.slug}
                key={projects.id}
            >
                <GatsbyImage
                    className="img"
                    image={
                        projects.frontmatter.thumb.childImageSharp
                            .gatsbyImageData
                    }
                    alt={projects.frontmatter.title}
                />

                <div className="post__content">
                    <div>
                        <p className="post__subtitle">
                            {projects.frontmatter.stack
                                .split(",")
                                .map((stack, i) => (
                                    <span key={i}>{stack}</span>
                                ))}
                        </p>
                        <h2 className="post__title">
                            {projects.frontmatter.title}
                        </h2>
                        <p className="post__description">
                            {projects.frontmatter.description}
                        </p>
                    </div>
                </div>
            </Link>
        </article>
    )
}
