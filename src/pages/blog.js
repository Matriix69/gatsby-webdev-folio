import React from 'react'
import * as styles from '../styles/blog.module.scss'
import Seo from '../components/Seo'

export default function blog() {
    return (
        <>
            <Seo 
                pageTitle="Web Development Blog | Isaac Chukwuka | JavaScript, React.js, Gatsby.js, Node.js, Firebase, Aws"
                pageUrl="blog"
                pageDescription="Web Development Blog by Isaac Chukwuka | JavaScript, React.js, Gatsby.js, Node.js, Firebase, Aws, Interests, hobbies, tutorials and more"
            />
            <section>
                <div className={styles.content}>
                    <h2>Post 1.0</h2>
                    <p>nothing here yet </p>
                    <p>stay around for when i make a new post!</p>
                </div>
            </section>
        </>
    )
}
