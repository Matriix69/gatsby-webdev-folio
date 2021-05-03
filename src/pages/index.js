import React, {useState} from "react"
import '../styles/global.scss'
import Particles from "react-tsparticles";
import Layout from '../components/Layout';
import * as styles from '../styles/home.module.scss'
import Typewriter from 'typewriter-effect';

import {particlesOptions, Info, socialLinks} from '../constants/constants'
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage} from "gatsby-plugin-image"
import { graphql, Link } from "gatsby";

import Seo from '../components/Seo'


const typingSpeed = 10;
const deleteSpeed = 1;
const pauseDelay = 3000;


export default function Home({data}) {
  const [hide, setHide] = useState(false)

  const projects = data.projects.nodes

  return (
    <Layout>
      <Seo 
        pageTitle="porfolio"
      />
      <section className={styles.hero}>

        <Particles
          id="tsparticles"
          options={particlesOptions}
        />
        <StaticImage 
          className="hero__image" 
          loading="eager"  
          src="../images/home.jpg" alt="home hero" 
        />

        <div className="hero__overlay"></div>

        <div className={'wrap wrap_padding mainpage'}>
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(typingSpeed)
                  .changeDeleteSpeed(deleteSpeed)
                  .typeString(Info.header1)
                  .pauseFor(pauseDelay)
                  .deleteChars(22)
                  .typeString(Info.header2)
                  .pauseFor(pauseDelay)
                  .deleteChars(19)
                  .typeString(Info.header3)
                  .pauseFor(pauseDelay)
                  .deleteChars(11)
                  .typeString(Info.header4)
                  .pauseFor(pauseDelay)
                  .deleteAll(1)
                  .typeString(Info.header5)
                  .callFunction(() => {
                    console.log('All strings were deleted');
                  })
                  .start();
              }}
            />
          </h1>

          <div className={styles.subheader + (hide ? " hide" : '')}>
            <Typewriter 
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(typingSpeed)
                  .changeDeleteSpeed(deleteSpeed)
                  .pauseFor(600)
                  .typeString(Info.subHeader1)
                  .pauseFor(pauseDelay)
                  .deleteAll(1)
                  .typeString(Info.subHeader2)
                  .pauseFor(pauseDelay)
                  .deleteAll(1)
                  .typeString(Info.subHeader3)
                  .pauseFor(1500)
                  .deleteAll(1)
                  .typeString(Info.subHeader4)
                  .pauseFor(4000)
                  .deleteAll(1)
                  .callFunction(() => {
                    setHide(true)
                  })
                  .start();
              }}
            />
          </div>

        </div>

        <div className={"headerSocial" + (!hide ? ' hide' : '')}>
          <ul className={"socials"}>	
            {socialLinks.map((socialLinks, idx) => (
              <li className={"socials__item"} key={idx}>
                <a href={socialLinks.link} target="_blank" rel="noreferrer">
                  {socialLinks.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </section>
      
      <section className="listing" >
        <div className="wrap">
          {projects.map(projects => (
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
          ))} 
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
    query MyWork {
        projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        nodes{
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