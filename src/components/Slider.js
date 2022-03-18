import React, { useEffect, useState, useRef } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../styles/project-details.module.scss"
import { useSwipeable } from "react-swipeable"

export default function ProjectDetails({ slides, title }) {
    //images for slide show

    const [index, setIndex] = useState(0)
    const timeoutRef = useRef(null)
    const delay = 6000
    const prevSlide = index === 0 ? slides.length - 1 : index - 1
    const nextSlide = index === slides.length - 1 ? 0 : index + 1

    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(
            () =>
                setIndex(prevIndex =>
                    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        )
        return () => {
            resetTimeout()
        }
    }, [index, slides.length])

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    //swipable props
    const handlers = useSwipeable({
        onSwipedLeft: eventData => setIndex(nextSlide),
        onSwipedRight: eventData => setIndex(prevSlide),
        onSwipedUp: eventData => setIndex(nextSlide),
        onSwipedDown: eventData => setIndex(prevSlide),
    })

    return (
        <>
            <div className={styles.slideshow}>
                <div className={styles.slideshowSlider} {...handlers}>
                    {slides.map((slides, idx) => (
                        <div
                            className={
                                styles.slide +
                                " " +
                                (idx === index ? styles.show : null)
                            }
                            key={idx}
                        >
                            <GatsbyImage
                                image={slides.img}
                                alt={title}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className={styles.slideshowDots}>
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
            </div> */}
        </>
    )
}
