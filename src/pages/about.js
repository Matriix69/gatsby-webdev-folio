import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from '../styles/about.module.scss'
import { Link } from 'gatsby'
import Seo from '../components/Seo'

export default function About() {
    const skills = ['JavaScript', 'React(Gatsby)', 'Firebase', 'Aws', 'Node.js'];
    return (
        <Layout>
            <Seo 
                pageTitle="About"
                pageUrl="about"
                pageDescription="Personal is the perfect theme for developers, designers and other creatives."
            />
            <Hero
                title={'About'}
                description={'A self-taught developer from nigeria'}
                image={
                    <StaticImage 
                        className="hero__image" 
                        loading="eager"  
                        src="../images/about.jpg" alt="home hero" 
                    />
                }
            />
            <section className='wrap wrapper'>
                <div className={styles.content}>
                    <h2 id="changelog-10">Changelog 1.0</h2>
                    <p><b>Hello! My name is isaac chukwuka, i'm a self-taught designer and developer, Learning to make cool
                     things for the web, I’ve been developing software for 2 years.</b></p>
                     
                    <p>I started a noob coder, moving onto 
                     Front-End Website development. Through the years I trained myself into Html Css and Javascript and 
                     moved onto NodeJS as a Fullstack developer.</p>

                    <p>Fast-forward to today, and I've had the privilege to make design and develop nice responsive 
                    web app for few start up companies. My main focus these days is building accessible, inclusive 
                    products and digital experiences for a variety of clients and keep developing myself! the 
                    learning never stops.</p>

                    <p>Here are a few technologies I've been working with recently:</p>

                    <ul className={styles.skills_list}>
                        {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>

                    <p>If you’d like to get in contact with me you can do so via my contact form or my social channels located in the footer.</p>
                    
                    <Link  className={styles.button_wrapper}  to="/contact">
                        <div className={styles.btn}>
                            contact me
                        </div>
                    </Link>
                    
                </div>
            </section>
        </Layout>
    )
}