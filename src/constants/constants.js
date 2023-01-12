import React from "react"
import {
    FiTwitter,
    FiLinkedin,
    FiGithub,
    // FaTelegramPlane,
    // FaSpotify,
} from "react-icons/fi"
import { IoLogoYoutube } from "react-icons/io"
import Leaf from "../assets/leaf.svg"
import At from "../assets/at.svg"
import About from "../assets/about.svg"
import Home from "../assets/home.svg"

import Javascript2 from "../assets/javaScript.svg"
import Typescript from "../assets/Typescript.svg"
import Html from "../assets/HTML.svg"
import Css from "../assets/CSS.svg"
import Sass from "../assets/sass-1.svg"
import ReactIcon from "../assets/react-2.svg"
import Redux from "../assets/redux.svg"
import Next from "../assets/nextjs.svg"
import Gatsby from "../assets/gatsby.svg"
import Node from "../assets/node.js.svg"
import Express from "../assets/express.js.svg"
import Firebass from "../assets/firebase-1.svg"
import Aws from "../assets/aws-2.svg"
import Mongodb from "../assets/mongodb.svg"

export const navLink = [
    {
        path: "/about/",
        title: "About",
    },
    {
        path: "/portfolio/",
        title: "Portfolio",
    },
    {
        path: "/contact/",
        title: "Get in touch",
    },
]

export const navLinkMobile = [
    {
        path: "/",
        title: "Home",
        icon: <Home />,
    },
    {
        path: "/about/",
        title: "About",
        icon: <About />,
    },

    {
        path: "/portfolio/",
        title: "Portfolio",
        icon: <Leaf />,
    },
    {
        path: "/contact/",
        title: "Contact",
        icon: <At />,
    },
]

const style = {
    fontSize: "24px",
    background: "rgba(255,255,255,0)",
    color: "var(--text-color)",
    overflow: "hidden",
}

export const socialLinks = [
    {
        title: "Twitter",
        link: "https://twitter.com/isaacchukwuka_",
        icon: <FiTwitter style={style} />,
    },
    {
        title: "Github",
        link: "https://github.com/Matriix69",
        icon: <FiGithub style={style} />,
    },
    // {
    //     title: "Telegram",
    //     link: "https://t.me/Mvtrixx",
    //     icon: <FaTelegramPlane style={style} />,
    // },
    {
        title: "Linkedin",
        link: "https://www.linkedin.com/in/isaac-chukwuka-2208a1209/",
        icon: <FiLinkedin style={style} />,
    },

    // {
    //     title: "Youtube",
    //     link: "https://www.youtube.com/channel/UC3uDI7f7hAWRoOLtXAKKt4Q",
    //     icon: <IoLogoYoutube style={style} />,
    // },
    // {
    //     title: "Spotify",
    //     link: "https://open.spotify.com/user/0wulflt56xnyk51zubhmbmc8n",
    //     icon: <FaSpotify style={style} />,
    // },
]

export const experience = [
    {
        title: "Freelancing full-stack developer",
        company: "Matrix Software Labs",
        date: "August 2019 - Current · NG",
        current: true,
    },
    {
        title: "Full-Stack Engineer",
        company: "Kobobid",
        date: "September 2022 - Current · Lagos NG",
        current: true,
    },
    {
        title: "Front-End Engineer",
        company: "Apex application Limited",
        date: "November 2019 - December 2021 · Lagos NG",
        current: false,
    },
]

export const stack = [
    {
        title: "JavaScript",
        icon: <Javascript2 />,
    },
    {
        title: "Typescipt",
        icon: <Typescript />,
    },
    {
        title: "Html",
        icon: <Html />,
    },
    {
        title: "Css",
        icon: <Css />,
    },
    {
        title: "Sass",
        icon: <Sass />,
    },
    {
        title: "React",
        icon: <ReactIcon />,
    },
    {
        title: "Redux",
        icon: <Redux />,
    },
    {
        title: "Next.js",
        icon: <Next />,
    },
    {
        title: "Gatsby.js",
        icon: <Gatsby />,
    },
    {
        title: "Node.js",
        icon: <Node />,
    },
    {
        title: "Express.js",
        icon: <Express />,
    },
    {
        title: "Firebase",
        icon: <Firebass />,
    },
    {
        title: "Aws",
        icon: <Aws />,
    },
    {
        title: "MongoDB",
        icon: <Mongodb />,
    },
]

export const Interests = [
    {
        titlt: "Job <FaUserTie />",
        details:
            "If you want to hire me, I'm interested to work in companies that offer <strong> modern technologies such as Node.js, React.js, Gatsby.js, Firebase / Aws </strong> , etc. I'm looking for a role that challenges me and where I can help design solutions.",
    },
]
