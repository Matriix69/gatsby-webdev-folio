import React, { useState } from "react"
import * as styles from "../styles/contact.module.scss"
import { Form, Field } from "react-final-form"
import emailjs from "emailjs-com"
import Seo from "../components/Seo"
import { socialLinks } from "../constants/constants"
import { ModalError, ModalSuccess } from "../components/MsgModal"

export default function Contact() {
    const [emailSent, setEmailSent] = useState(false)
    const [emailFailed, setEmailFailed] = useState(false)

    const handleCloseSuccess = () => {
        setEmailSent(!emailSent)
    }
    const handleCloseFailed = () => {
        setEmailFailed(!emailFailed)
    }

    const onSubmit = async (values, form) => {
        let tempParams = {
            name: values.name,
            email: values.email,
            message: values.message,
        }
        await emailjs
            .send(
                "service_uijhw6c",
                "template_8w4m6gp",
                tempParams,
                "user_PxSsadZgFpBu2FGtHlaxw"
            )
            .then(
                result => {
                    setEmailSent(true)
                    console.log(result.text)
                    Object.keys(values).forEach(key => {
                        form.change(key, undefined)
                        form.resetFieldState(key)
                    })
                },
                error => {
                    setEmailFailed(true)
                    console.log(error.text)
                }
            )
    }

    return (
        <>
            <Seo
                pageTitle="Contact | Isaac Chukwuka"
                pageUrl="contact"
                pageImage={"og/contact.png"}
            />
            <section>
                <div className={styles.content}>
                    <div className={"intro"}>
                        <h1>
                            Let's Connect!{" "}
                            <span role="img" aria-label="smile-emoji">
                                😊
                            </span>
                        </h1>
                    </div>
                    <div className={styles.intro}>
                        <p>
                            Please reach out for anything. I’m always interested
                            in hearing about new <strong>projects</strong> and{" "}
                            <strong>opportunities</strong> or even Just a
                            connection from one developer to{" "}
                            <strong>developer</strong>, I got you!
                        </p>
                    </div>

                    <div className={styles.contact_wrapper}>
                        <Form
                            onSubmit={onSubmit}
                            validate={values => {
                                const errors = {}
                                let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

                                if (
                                    !values.name ||
                                    (values.name && values.name.length < 2)
                                ) {
                                    errors.name = "Name is too short"
                                }
                                if (
                                    !values.email ||
                                    (values.email && !regex.test(values.email))
                                ) {
                                    errors.email = "Invalid Email"
                                }
                                if (
                                    !values.message ||
                                    values.message.length < 30
                                ) {
                                    errors.message = "Please be more elaborate"
                                }
                                return errors
                            }}
                            render={({
                                handleSubmit,
                                form,
                                reset,
                                submitting,
                                pristine,
                                values,
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <Field name="name">
                                        {({ input, meta }) => (
                                            <div className={styles.form_group}>
                                                {/* <label htmlFor="name">
                                                            My name is
                                                        </label> */}
                                                <input
                                                    {...input}
                                                    type="text"
                                                    placeholder="name"
                                                />
                                                {meta.error && meta.touched && (
                                                    <span
                                                        className={
                                                            styles.errorText
                                                        }
                                                    >
                                                        {meta.error}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="email">
                                        {({ input, meta }) => (
                                            <div className={styles.form_group}>
                                                {/* <label htmlFor="email">
                                                            My email address is
                                                        </label> */}
                                                <input
                                                    {...input}
                                                    type="email"
                                                    placeholder="Email"
                                                />
                                                {meta.error && meta.touched && (
                                                    <span
                                                        className={
                                                            styles.errorText
                                                        }
                                                    >
                                                        {meta.error}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="message">
                                        {({ input, meta }) => (
                                            <div className={styles.form_group}>
                                                {/* <label htmlFor="email">
                                                        Message
                                                    </label> */}
                                                <textarea
                                                    {...input}
                                                    type="password"
                                                    placeholder="Message"
                                                />
                                                {meta.error && meta.touched && (
                                                    <span
                                                        className={
                                                            styles.errorText
                                                        }
                                                    >
                                                        {meta.error}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </Field>

                                    <div
                                        className={
                                            "button_wrapper " + styles.button
                                        }
                                    >
                                        <button
                                            className="btn"
                                            type="submit"
                                            disabled={submitting}
                                        >
                                            {submitting ? (
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        marginRight: "2rem",
                                                    }}
                                                >
                                                    Sending...{" "}
                                                    <div className="spinner"></div>
                                                </div>
                                            ) : (
                                                "Say Hi"
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        />
                    </div>

                    <div className={styles.socialMediaPresence_mobile}>
                        <p style={{ textAlign: "center" }}>
                            Feel free to check out my{" "}
                            <strong>social media</strong> presence below to get
                            to know me better.
                        </p>

                        <div
                            className="headerSocial"
                            style={{ marginBottom: "20px" }}
                        >
                            {socialLinks.map((socialLinks, idx) => (
                                <a
                                    href={socialLinks.link}
                                    key={idx}
                                    title={socialLinks.title}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={socialLinks.title}
                                >
                                    {socialLinks.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className={styles.socialMediaPresence_desktop}>
                        <p style={{ textAlign: "center" }}>
                            Feel free to check out my{" "}
                            <strong>social media</strong> presence below
                            (footer) to get to know me better.
                        </p>
                    </div>
                </div>
            </section>

            {emailSent && (
                <ModalSuccess handleCloseSuccess={handleCloseSuccess} />
            )}
            {emailFailed && (
                <ModalError handleCloseFailed={handleCloseFailed} />
            )}
        </>
    )
}
