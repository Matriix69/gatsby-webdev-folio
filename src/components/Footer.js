import React from "react"
import { socialLinks } from "../constants/constants"
import Heart from "../assets/heart.svg"
import HeartBG from "../assets/bg-heart.svg"

import { FaCode } from "react-icons/fa"

export default function Footer() {
    return (
        <footer>
            <div className="wrap">
                <div className="headerSocial_footer">
                    {socialLinks.map((socialLinks, idx) => (
                        <a
                            href={socialLinks.link}
                            key={idx}
                            title={socialLinks.title}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {socialLinks.icon}
                        </a>
                    ))}
                </div>

                <div className="copyright">
                    <p>
                        Designed and Made with
                        <span>
                            <HeartBG />
                            <Heart />
                        </span>
                        by Isaac Chukwuka {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    )
}
