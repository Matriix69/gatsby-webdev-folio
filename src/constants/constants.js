import React from "react"
import { FiTwitter, FiLinkedin, FiGithub  } from 'react-icons/fi';
import { RiHomeSmileLine  } from 'react-icons/ri';
import { BsCardText, BsInfoCircle  } from 'react-icons/bs';
import { SiMailDotRu  } from 'react-icons/si';

export const particlesOptions={
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 100,
        enable: true,
        opacity: 0.5,
        width: .5,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value:100,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 3,
      },
    },
    detectRetina: true,
}

export const Info = {
    header1 : "Hey there, I'm Matrix <span aria-hidden='true' class='wave'>👋</span>",
    header2 : "I'm a software developer.",
    header3 : "maker.",
    header4 : " build cool things for the web",
    header5 : "Check out my work below.",

    subHeader1 : "Nice to meet you!.",
    subHeader2 : "Javascript, NodeJS, Firebase, Aws, HTML, CSS.",
    subHeader3 : "illustrator, Content creator",
    subHeader4 : "Learning new things everyday",
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
    title: 'Porfolio',
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
    link: 'https://twitter.com/Mvtrixx',
    icon: <FiTwitter style={style}/>
  },
  {
    title: "Linkedin",
    link: 'https://www.linkedin.com/in/isaac-chukwuka-2208a1209/',
    icon: <FiLinkedin style={style}/>,
  },
  {
    title: "Github",
    link: 'https://github.com/Matriix69',
    icon: <FiGithub style={style}/>
  }
]
