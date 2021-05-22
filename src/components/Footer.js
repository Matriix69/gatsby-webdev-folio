import React from 'react'
import {socialLinks} from '../constants/constants'
import { graphql, useStaticQuery} from "gatsby";
import Gatsby from '../assets/gatsby.svg'



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
                    <h1>Isaac chukwuka</h1>
                    <a href={`mailto:${contact}`}><p>hello@isaacchukwuka.com</p></a>
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

                <div className="copyright">
                    <p >Made with <g-emoji class="g-emoji" alias="heart" >❤</g-emoji> by Isaac Chukwuka © 2021</p>
                    <p>Created with&nbsp;<Gatsby style={{height: '20px', width: 'auto' }}/></p>

                    <hr/>

                    <p >
                        <b>
                            <q>There are 2 ways to write error-free program. Only the third one works.</q><br/>
                            <b>-- Alan Perlis --</b>
                        </b>
                    </p>
                </div>
            </div>
            
		</footer>
    )
}

