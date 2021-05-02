import React from "react"
import { FiTwitter, FiLinkedin, FiGithub  } from 'react-icons/fi';

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
    header1 : "Hey there, I'm Matrix.",
    header2 : "I'm a software developer.",
    header3 : "maker.",
    header4 : " build cool things for the web",
    header5 : "Check out my work below.",

    subHeader1 : "Nice to meet you.",
    subHeader2 : "Javascript, NodeJS, Firebase, Aws, HTML, CSS.",
    subHeader3 : "illustrator, Content creator",
    subHeader4 : "Learning new things everyday",
}

export const style = {
    fontSize: "19px",
    background: "rgba(255,255,255,0)",
    color: "#132930",
    overflow: "hidden"
}

export const navLink = [
  {
    path: '/',
    title: 'Porfolio'
  },
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
    title: 'Contact'
  }
]

export const socialLinks = [
  {
    link: 'https://twitter.com/Mvtrixx',
    icon: <FiTwitter style={style}/>
  },
  {
    link: 'https://www.linkedin.com/in/isaac-chukwuka-2208a1209/',
    icon: <FiLinkedin style={style}/>,
  },
  {
    link: 'https://github.com/Matriix69',
    icon: <FiGithub style={style}/>
  }
]
