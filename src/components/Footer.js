import React from "react"
import { socialLinks } from "../constants/constants"

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
                        <FaCode /> &nbsp; with &nbsp;
                        <g-emoji class="g-emoji" alias="heart">
                            ❤
                        </g-emoji>{" "}
                        &nbsp; by{"  "} &nbsp;
                        <code className="hi_gradient">
                            {" "}
                            Isaac Chukwuka{" "}
                        </code>{" "}
                        &nbsp; &copy; {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    )
}
