import React from 'react'
import {socialLinks} from '../constants/constants'
import { graphql, useStaticQuery} from "gatsby";

import { FaCode  } from 'react-icons/fa';
import { RiGatsbyLine  } from 'react-icons/ri';


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
                    <div className="headerSocial">
                        {socialLinks.map((socialLinks, idx) => (
                            <a href={socialLinks.link} key={idx} target="_blank" rel="noreferrer">
                                {socialLinks.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="copyright">
                    <p ><FaCode/> &nbsp; with &nbsp;<g-emoji class="g-emoji" alias="heart" >❤</g-emoji> &nbsp; by Isaac Chukwuka © 2021</p>
                    <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Created with&nbsp;<RiGatsbyLine style={{height: '18px', width: 'auto' }}/></a>

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

