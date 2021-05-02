import React from 'react'
import {socialLinks} from '../constants/constants'
import { graphql, useStaticQuery} from "gatsby";

export default function Footer() {

    const data = useStaticQuery(graphql`
        query SiteContact {
            site {
                siteMetadata {
                    contact
                }
            }
        }
    `)
    const {contact} = data.site.siteMetadata

    return (
        <footer>
            <div  className="wrap">
                <div className="logo-email">
                    <b>Matrix</b>
                    <a href={`mailto:${contact}`}>{contact}</a>
                    <div className="headerSocial">
                        <ul className="socials">
                            {socialLinks.map((socialLinks, idx) => (
                                <li className={"socials__item"} key={idx}>
                                    <a href={socialLinks.link} target="_blank" rel="noreferrer">
                                        {socialLinks.icon}
                                    </a>   
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <p className="copyright">
                    copyright © developed by matrix 2021. All rights reserved.<br/>
                    <b>
                        <q>There are 2 ways to write error-free program. Only the third one works.</q><br/>
                        <b>-- Alan Perlis --</b>
                    </b>
                </p>
            </div>
            
		</footer>
    )
}

