import React from "react"
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaTelegramPlane  } from 'react-icons/fa';
import Leaf from '../assets/leaf.svg';
import At from '../assets/at.svg';
import About from '../assets/about.svg';
import Home from '../assets/home.svg';

export const Info = {
    header1 : "<h1>Hey there, I'm Isaac <span aria-hidden='true' class='wave'>👋</span></h1>",
    subHeader1 : "<p>Nice to meet you!.</p>",
}

export const style = {
    fontSize: "23px",
    background: "rgba(255,255,255,0)",
    color: "var(--text-color)",
    overflow: "hidden"
}
export const style2 = {
    fontSize: "38px",
    background: "rgba(255,255,255,0)",
    color: "var(--text-color)",
    overflow: "hidden",
    marginLeft: "3px"
}

export const navLink = [
  {
    path: '/blog',
    title: 'Blog'
  },
  {
    path: '/about',
    title: 'About'
  },
  {
    path: '/contact',
    title: 'Get in touch'
  }
]

export const navLinkMobile = [
  {
    path: '/',
    title: 'Home',
    icon: <Home/>
  },
  {
    path: '/blog',
    title: 'Blog',
    icon: <Leaf/>
  },
  {
    path: '/about',
    title: 'About',
    icon: <About/>
  },
  {
    path: '/contact',
    title: 'Contact',
    icon: <At/>
  }
]

export const socialLinks = [
  {
    title: "Twitter",
    link: 'https://twitter.com/isaacchukwuka_',
    icon: <FaTwitter style={style}/>
  },
  {
    title: "Linkedin",
    link: 'https://www.linkedin.com/in/isaac-chukwuka-2208a1209/',
    icon: <FaLinkedin style={style}/>,
  },
  {
    title: "Github",
    link: 'https://github.com/Matriix69',
    icon: <FaGithub style={style}/>
  },
  {
    title: "Youtube",
    link: 'https://www.youtube.com/channel/UC3uDI7f7hAWRoOLtXAKKt4Q',
    icon: <FaYoutube style={style}/>
  },
  {
    title: "telegram",
    link: 'https://t.me/Mvtrixx',
    icon: <FaTelegramPlane style={style}/>
  }
]

export const socialLinksContact = [
  {
    title: "Twitter",
    link: 'https://twitter.com/isaacchukwuka_',
    icon: <FaTwitter style={style2}/>
  },
  {
    title: "Linkedin",
    link: 'https://www.linkedin.com/in/isaac-chukwuka-2208a1209/',
    icon: <FaLinkedin style={style2}/>,
  },
  {
    title: "Github",
    link: 'https://github.com/Matriix69',
    icon: <FaGithub style={style2}/>
  },
  {
    title: "Youtube",
    link: 'https://www.youtube.com/channel/UC3uDI7f7hAWRoOLtXAKKt4Q',
    icon: <FaYoutube style={style2}/>
  },
]
