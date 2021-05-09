import React,{useState} from 'react'
import {navLink, navLinkMobile} from '../constants/constants'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { RiMoonFill } from 'react-icons/ri';
import { BiBrightness } from 'react-icons/bi';




export default function Navbar() {
    const data = useStaticQuery(graphql`
        query SiteInfo {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)


    const [show, setShow] = useState(false)

    const showNav = () => {
        setShow(!show)
    }

    const {title} = data.site.siteMetadata
    return (
        <header>
            <div className="wrap">

                <h1 className="nav-title">
                    <StaticImage 
                        className="" 
                        loading="eager"  
                        src="../images/isaac-logo.png" alt="isaac-logo" 
                    />
                    <Link to="/">
                        {title}
                    </Link>
                </h1>
                

                <ThemeToggler>
                    {({ theme, toggleTheme }) => (
                        <i  
                            tabIndex={0} 
                            role="button" 
                            aria-label="toggle theme" 
                            onKeyDown={() => {
                                const nextTheme = theme === 'light' ? 'dark' : 'light'
                                toggleTheme(nextTheme)
                            }} 
                            className="toggletheme"
                            onClick={() => {
                                const nextTheme = theme === 'light' ? 'dark' : 'light'
                                toggleTheme(nextTheme)
                            }}
                        >
                            {theme === "light" ? <RiMoonFill/> : <BiBrightness/>}   
                        </i>
                    )}
                </ThemeToggler>

                <span 
                    tabIndex={0} 
                    role="button" 
                    aria-label="toggle nav menu" 
                    onKeyDown={showNav} 
                    onClick={showNav} 
                    className={show ? "burger" : ''}
                ></span>

                <nav>                    
                    <div className={"links" + (show ? " showNav" : '')}>
                        {navLink.map((navLink, idx) => (
                            <Link 
                                to={navLink.path} 
                                key={idx}
                                activeClassName="active"
                                onClick={showNav} 
                            >
                            {navLink.title}
                            </Link>
                        ))}
                    </div>

                    <div className="links-bottom">
                        {navLinkMobile.map((navLinkMobile, idx) => (
                            <Link 
                                to={navLinkMobile.path} 
                                key={idx}
                                activeClassName="active-links-bottom" 
                            >
                                {navLinkMobile.icon}{navLinkMobile.title}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    )
}
