import React,{useState} from 'react'
import {navLink} from '../constants/constants'
import { Link, graphql, useStaticQuery } from 'gatsby'



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
                <Link to="/">
                    <h1>{title}</h1>
                </Link>
                <nav>
                    <span 
                        tabIndex={0} 
                        role="button" 
                        aria-label="toggle nav menu" 
                        onKeyDown={showNav} 
                        onClick={showNav} 
                        className={show ? "burger" : ''}
                    ></span>
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
                    
                </nav>
            </div>
        </header>
    )
}
