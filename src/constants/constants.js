import React from "react"
import { FaTwitter, FaLinkedinIn, FaGithub, FaYoutube  } from 'react-icons/fa';
import { RiHomeSmileLine  } from 'react-icons/ri';
import { BsCardText, BsInfoCircle  } from 'react-icons/bs';
import { SiMailDotRu  } from 'react-icons/si';

export const Info = {
    header1 : "<h1>Hey there, I'm Isaac <span aria-hidden='true' class='wave'>👋</span></h1>",
    subHeader1 : "<p>Nice to meet you!.</p>",
}

export const style = {
    fontSize: "19px",
    background: "rgba(255,255,255,0)",
    color: "var(--bg-alt-color)",
    overflow: "hidden"
}

export const navLink = [
  {
    path: '/blog',
    title: 'Blog',
    icon: <BsCardText/>
  },
  {
    path: '/about',
    title: 'About',
    icon: <BsInfoCircle/>
  },
  {
    path: '/contact',
    title: 'Get in touch',
    icon: <SiMailDotRu/>
  }
]

export const navLinkMobile = [
  {
    path: '/',
    title: 'Home',
    icon: <RiHomeSmileLine/>
  },
  {
    path: '/blog',
    title: 'Blog',
    icon: <BsCardText/>
  },
  {
    path: '/about',
    title: 'About',
    icon: <BsInfoCircle/>
  },
  {
    path: '/contact',
    title: 'Contact',
    icon: <SiMailDotRu/>
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
    icon: <FaLinkedinIn style={style}/>,
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
  }
]
