import React from "react"
import { socialLinks } from "../constants/constants"
import Heart from "../assets/heart.svg"
import HeartBG from "../assets/bg-heart.svg"

import { FaCode } from "react-icons/fa"

export default function Footer() {
    return (
        <footer>
            <div className="wrap">
                <div className="logo-email">
                    <div className="headerSocial">
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
                </div>

                <div className="copyright">
                    <p>
                        Made with
                        <span>
                            <HeartBG />
                            <Heart />
                        </span>
                        by
                        <code className="hi_gradient">Isaac Chukwuka</code>
                        {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    )
}
