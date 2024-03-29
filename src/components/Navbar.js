import React, { useState, useEffect } from "react"
import { navLink, navLinkMobile } from "../constants/constants"
import { Link, graphql, useStaticQuery } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import Logo from "../assets/isaac_chukwuka_logo.svg"
import Sun from "../assets/sun.svg"
import Moon from "../assets/moon.svg"
// import Logo from "../assets/logo.svg"
import { RiMoonFill } from "react-icons/ri"
import { BiBrightness } from "react-icons/bi"

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

    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 20) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const { title } = data.site.siteMetadata
    return (
        <>
            <header className={scroll ? "nav-scroll" : ""}>
                <div className="wrap">
                    <h1 className="nav-title">
                        <Link to="/">
                            <Logo />
                            {/* <span>Isaac chukwuka</span> */}
                        </Link>
                    </h1>

                    <ThemeToggler>
                        {({ theme, toggleTheme }) => (
                            <i
                                tabIndex={0}
                                role="button"
                                aria-label="toggle theme"
                                onKeyDown={() => {
                                    const nextTheme =
                                        theme === "light" ? "dark" : "light"
                                    toggleTheme(nextTheme)
                                }}
                                className="toggletheme"
                                onClick={() => {
                                    const nextTheme =
                                        theme === "light" ? "dark" : "light"
                                    toggleTheme(nextTheme)
                                }}
                            >
                                {theme === "light" ? <Moon /> : <Sun />}
                            </i>
                        )}
                    </ThemeToggler>

                    <nav>
                        <div className={"links"}>
                            {navLink.map((navLink, idx) => (
                                <Link
                                    to={navLink.path}
                                    key={idx}
                                    activeClassName="active"
                                >
                                    {navLink.title}
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>
            </header>
            <nav>
                <div className="nav-bottom"></div>
                <div className="links-bottom">
                    {navLinkMobile.map((navLinkMobile, idx) => (
                        <Link
                            to={navLinkMobile.path}
                            key={idx}
                            activeClassName="active-links-bottom"
                        >
                            {navLinkMobile.icon}
                            <span>{navLinkMobile.title}</span>
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    )
}
