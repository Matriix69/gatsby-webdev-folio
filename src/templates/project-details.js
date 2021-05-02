import React,{useEffect, useState, useRef} from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from '../styles/project-details.module.scss'
import { graphql } from 'gatsby'
import { useSwipeable } from 'react-swipeable'

export default function ProjectDetails({data}) {

    //destructure grahpql data
    const {html} = data.markdownRemark
    const {title, stack, featuredImg, carousel1, carousel2, carousel3} = data.markdownRemark.frontmatter

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

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 6000;
    const prevSlide = index === 0 ? slides.length - 1 : index - 1 
    const nextSlide = index === slides.length - 1 ? 0 : index + 1

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
        return () => {
            resetTimeout();
        };
    }, [index, slides.length]);

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
    }

    //swipable props
    const handlers = useSwipeable({
        onSwipedLeft: (eventData) => setIndex(nextSlide),   
        onSwipedRight: (eventData) => setIndex(prevSlide),  
        onSwipedUp: (eventData) => setIndex(nextSlide),     
        onSwipedDown: (eventData) => setIndex(prevSlide),
    });

    

    return (
        <Layout>
            <Hero
                title={title}
                description={stack}
                image={
                    <GatsbyImage className="hero__image"  image={featuredImg.childImageSharp.gatsbyImageData} alt={title}  />
                }
            />
            <section className='wrap wrapper'>
                <div className={styles.content}>

                    <div className={styles.slideshow}>
                        <div className={styles.slideshowSlider} {...handlers}>
                            {slides.map((slides, idx) => (
                                <div className={styles.slide  + " " + (idx === index ? styles.show : null)}  key={idx}>
                                    <GatsbyImage  image={slides.img} alt={title}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.slideshowDots}>
                        {slides.map((_, idx) => (
                            <div 
                                key={idx} 
                                className={styles.slideshowDot + " " + (index === idx ? styles.btnActive : null)}
                                onClick={() => { setIndex(idx); }}
                                onKeyDown={() => { setIndex(idx); }} 
                                role="button" 
                                aria-label="slide carousel"
                                tabIndex={0} 
                            ></div>
                        ))}
                    </div>
                    
                    <h2>{title}</h2>
                    <h3>{stack}</h3>
                    <div dangerouslySetInnerHTML={{__html: html}} />
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query Projectpage($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
            stack
            title
            featuredImg {
                childImageSharp {
                    gatsbyImageData
                }
            }
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
}
`
