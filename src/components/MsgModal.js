import { BsCheckCircle, BsXCircle } from "react-icons/bs"
import React from "react"
import * as styles from "../styles/contact.module.scss"

export const ModalSuccess = ({ handleCloseSuccess }) => {
    return (
        <div className={styles.model}>
            <div className={styles.modal_wrapper}>
                <div className={styles.modal_header}>
                    <p className="text text-title">Yaay!</p>
                </div>
                <div className={styles.modal_content}>
                    <div className={styles.modal_body}>
                        <BsCheckCircle
                            style={{ fontSize: "45px", color: "#66cc66" }}
                        />
                        <p>
                            Your message has been sent! I will be in touch as
                            soon as possible
                        </p>
                    </div>
                </div>
                <div className={styles.modal_footer}>
                    <button onClick={handleCloseSuccess}>close</button>
                </div>
            </div>
        </div>
    )
}

export const ModalError = ({ handleCloseFailed }) => {
    return (
        <div className={styles.model}>
            <div className={styles.modal_wrapper}>
                <div className={styles.modal_header}>
                    <p className="text text-title">An error occured</p>
                </div>
                <div className={styles.modal_content}>
                    <div className={styles.modal_body}>
                        <BsXCircle
                            style={{
                                fontSize: "45px",
                                color: "rgba(255, 38, 38, 0.726)",
                            }}
                        />
                        <p>
                            Something went wrong, this could be a network error,
                            please try again because I will love to hear from
                            you!
                        </p>
                    </div>
                </div>
                <div className={styles.modal_footer}>
                    <button onClick={handleCloseFailed}>close</button>
                </div>
            </div>
        </div>
    )
}
