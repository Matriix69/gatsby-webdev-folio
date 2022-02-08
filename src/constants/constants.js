import React from "react"
import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaTelegramPlane,
    FaSpotify,
} from "react-icons/fa"
import { IoLogoYoutube } from "react-icons/io"
import Leaf from "../assets/leaf.svg"
import At from "../assets/at.svg"
import About from "../assets/about.svg"
import Home from "../assets/home.svg"

export const Info = {
    header1: "<h1>Hey there, <span class='accent'>I'm Isaac</span>",
    subHeader1: "<p>Nice to meet you!</p>",
}

export const style = {
    fontSize: "24px",
    background: "rgba(255,255,255,0)",
    color: "var(--text-color)",
    overflow: "hidden",
}
export const style2 = {
    fontSize: "38px",
    background: "rgba(255,255,255,0)",
    color: "var(--text-color)",
    overflow: "hidden",
    marginLeft: "3px",
}

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

export const socialLinks = [
    {
        title: "Twitter",
        link: "https://twitter.com/isaacchukwuka_",
        icon: <FaTwitter style={style} />,
    },
    {
        title: "Telegram",
        link: "https://t.me/Mvtrixx",
        icon: <FaTelegramPlane style={style} />,
    },
    {
        title: "Linkedin",
        link: "https://www.linkedin.com/in/isaac-chukwuka-2208a1209/",
        icon: <FaLinkedin style={style} />,
    },
    {
        title: "Github",
        link: "https://github.com/Matriix69",
        icon: <FaGithub style={style} />,
    },
    {
        title: "Youtube",
        link: "https://www.youtube.com/channel/UC3uDI7f7hAWRoOLtXAKKt4Q",
        icon: <IoLogoYoutube style={style} />,
    },
    {
        title: "Spotify",
        link: "https://open.spotify.com/user/0wulflt56xnyk51zubhmbmc8n",
        icon: <FaSpotify style={style} />,
    },
]

export const socialLinksContact = [
    {
        title: "Twitter",
        link: "https://twitter.com/isaacchukwuka_",
        icon: <FaTwitter style={style} />,
    },
    {
        title: "Telegram",
        link: "https://t.me/Mvtrixx",
        icon: <FaTelegramPlane style={style} />,
    },
    {
        title: "Linkedin",
        link: "https://www.linkedin.com/in/isaac-chukwuka-2208a1209/",
        icon: <FaLinkedin style={style} />,
    },
    {
        title: "Github",
        link: "https://github.com/Matriix69",
        icon: <FaGithub style={style} />,
    },
    {
        title: "Youtube",
        link: "https://www.youtube.com/channel/UC3uDI7f7hAWRoOLtXAKKt4Q",
        icon: <IoLogoYoutube style={style} />,
    },
    {
        title: "Spotify",
        link: "https://open.spotify.com/user/0wulflt56xnyk51zubhmbmc8n",
        icon: <FaSpotify style={style} />,
    },
]
// export const socialLinksContact = [
//     {
//         title: "Twitter",
//         link: "https://twitter.com/isaacchukwuka_",
//         icon: <Twitter style={style2} />,
//     },
//     {
//         title: "Linkedin",
//         link: "https://www.linkedin.com/in/isaac-chukwuka-2208a1209/",
//         icon: <Linkedin style={style2} />,
//     },
//     {
//         title: "Github",
//         link: "https://github.com/Matriix69",
//         icon: <Github style={style2} />,
//     },
//     {
//         title: "Youtube",
//         link: "https://www.youtube.com/channel/UC3uDI7f7hAWRoOLtXAKKt4Q",
//         icon: <Youtube style={style2} />,
//     },
// ]
