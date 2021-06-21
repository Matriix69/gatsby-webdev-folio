import React from "react"

//gatsby component import
import { graphql, Link } from "gatsby";

//contants file
import { Info} from '../constants/constants'

//styles
import '../styles/global.scss'
import * as styles from '../styles/home.module.scss'

//paticles and typewritter effect
import Typewriter from 'typewriter-effect';

//iocns
import { FaReact, FaNodeJs, FaCode  } from 'react-icons/fa';
import { IoLogoFirebase  } from 'react-icons/io5';

//my components
import Seo from '../components/Seo'
import Projects from '../components/Projects'
import Svg from '../assets/isaac.svg'


const typingSpeed = 10;
const deleteSpeed = 1;


export default function Home({data}) {
  
  const projects = data.projects.nodes

  return (
    <>

      <Seo
        pageTitle="Isaac Chukwuka | Full-Stack Web Developer | JavaScript, React.js, Gatsby.js, Node.js, Web, Ui, Firebase, Aws"
      />

      <section className={styles.home}>
        <div className={styles.listing}>
          <div className={styles.type_container}>
            <div className={styles.type_flow}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(typingSpeed)
                    .changeDeleteSpeed(deleteSpeed)
                    .typeString(Info.header1)
                    .pauseFor(600)
                    .typeString(Info.subHeader1)
                    .start();
                }}
              />
            </div>
            
          </div>

          <div>
              <Svg/>
          </div>
        </div>
          
      </section>


      
      <div className="listing" >
        <div className="wrap">

          <div className="info-list" >
              <div className="info-list-icon" >
                  <FaCode/>
              </div> 
              <div className="info-list-paragraph">
                  <p >
                      I am a <strong>full-stack web developer</strong> /
                      <strong> Content creator</strong> based in Nigeria, right in the
                      heart of Africa. I freelance and do remote jobs for any place in the world.
                  </p> 
                  <Link to="/contact" >
                      Set up a meeting
                  </Link>
              </div>
          </div>

          <div className="info-list" >
              <div className="info-list-icon" >
                  <FaReact/>
              </div> 
              <div className="info-list-paragraph">
                  <p >
                      For <em>frontend</em> design, I'm personally a huge fan of
                      <b>  React.js</b> and it's ecosystem
                      (e.g. <b> Gatsby.js & Next.js</b>).
                  </p> 
              </div>
          </div>

          <div className="info-list" >
              <div className="info-list-icon" >
                  <FaNodeJs/>
              </div> 
              <div className="info-list-paragraph">
                  <p >
                      For <em>backend</em> work, my go-to tool is <b>Node.js</b>, very efficient and overall developer productive. 
                      I have also worked with PHP in the past
                  </p> 
              </div>
          </div>

          <div className="info-list" >
              <div className="info-list-icon" >
                  <IoLogoFirebase/>
              </div> 
              <div className="info-list-paragraph">
                  <p >
                    For my <em>serverless and cloud computing</em>, my go-to tool is <b>Firebase</b>, 
                    which is part of <b>Googles cloud platform</b> <em>(gcp)</em>, also <b>Amazon web services</b> <em>(aws)</em> as my alternative.
                  </p> 
              </div>
          </div>

          <hr />
              
          <h1 className="post-heading">My recent Works <FaCode/></h1>
          
          <section className="works">
            {projects.map((projects, index) => {
                return <Projects projects={projects} key={index} />       
            })} 
          </section>

        </div>
      </div>
    </>
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