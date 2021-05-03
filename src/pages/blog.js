import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from '../styles/contact.module.scss'
import Seo from '../components/Seo'

export default function blog() {
    return (
        <Layout>
            <Seo 
                pageTitle="Blog"
                pageUrl="blog"
                pageDescription="Interests, hobbies, tutorials, coding and more"
            />
            <Hero
                title={"What's on my mind"}
                description={"Interests, hobbies, tutorials, coding and more."}
                image={
                    <StaticImage 
                        className="hero__image" 
                        loading="eager"  
                        src="../images/blogHeader.jpg" alt="blog Header" 
                    />
                }
            />
            <section className='wrap wrapper'>
                <div className={styles.content}>
                    <h2 id="changelog-10">Post 1.0</h2>
                    <p>nothing here yet</p>
                    <p>stay around for when i make a new post</p>
                    <p>nice to see u around</p>
                </div>
            </section>
        </Layout>
    )
}
