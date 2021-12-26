import React from "react"
import Navbar from "../components/Navbar"
import "../styles/global.scss"
import Footer from "../components/Footer"
import { AnimatePresence, motion } from "framer-motion"

const duration = 0.3

const variants = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {
            duration: duration,
            delay: duration,
            when: "beforeChildren",
        },
    },
    exit: {
        opacity: 0,
        transition: { duration: duration },
    },
}

export default function Layout({ children, location }) {
    return (
        <div className="layout">
            <Navbar />

            <AnimatePresence exitBeforeEnter>
                <motion.main
                    key={location.pathname}
                    variants={variants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                >
                    <div className="layout-content">{children}</div>
                </motion.main>
            </AnimatePresence>

            <Footer />
        </div>
    )
}
