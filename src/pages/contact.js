import React,{useState} from 'react'
import * as styles from '../styles/contact.module.scss'
import { Form, Field } from 'react-final-form'
import { BsCheckCircle, BsXCircle  } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import Seo from '../components/Seo'
import { socialLinks } from '../constants/constants'
import Contact2 from '../assets/contact.svg'

export default function Contact() {

    const [emailSent, setEmailSent] = useState(false)
    const [emailFailed, setEmailFailed] = useState(false)

    const handleCloseSuccess = () => {
        setEmailSent(!emailSent);
    }
    const handleCloseFailed = () => {
        setEmailFailed(!emailFailed);
    }

    const onSubmit = async (values, form) => {
        let tempParams = {
            name: values.name,
            email: values.email,
            message: values.message
        };
        await emailjs.send('service_uijhw6c', 'template_8w4m6gp', tempParams, 'user_PxSsadZgFpBu2FGtHlaxw' )
        .then((result) => {
            setEmailSent(true)
            console.log(result.text);
            Object.keys(values).forEach(key => {
                form.change(key, undefined);
                form.resetFieldState(key);
            });
        }, (error) => {
            setEmailFailed(true)
            console.log(error.text);
        });
    }

    return (
        <>
            <Seo 
                pageTitle="Isaac Chukwuka | Full-Stack Web Developer | Contact"
                pageUrl="contact"
            />
            <section>
                <div className={styles.content}>
                    <h1>Let's Talk <span role="img" aria-label="smile-emoji">😊</span></h1>
                    <p>
                        Whether you are interested to do business with me, want to chat about some of 
                        my content, just want to hang out, <strong> 
                        or Just a connection from one developer to developer</strong>.
                        Feel free to reach out anytime, I got you!
                    </p>

                    <div className={styles.contact_wrapper}>
                        <Contact2/>
                        
                        <div>
                            
                            <Form
                                onSubmit={onSubmit}
                                validate={values => {
                                    const errors = {}
                                    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
                                    if (!values.name || (values.name && values.name.length < 2)) {
                                    errors.name = 'Name is too short'
                                    }
                                    if (!values.email || (values.email && !regex.test(values.email))) {
                                    errors.email = 'Invalid Email'
                                    } 
                                    if (!values.message || (values.message.length < 30)) {
                                    errors.message = 'Please be elaborate'
                                    } 
                                    return errors
                                }}
                                render={({ handleSubmit, form, reset, submitting, pristine, values }) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className={styles.form}>
                                            <Field name="name">
                                                {({ input, meta }) => (
                                                <div className={styles.form_group}>
                                                    <label htmlFor="name">My name is *</label>
                                                    <input {...input} type="text" placeholder="Your Name" />
                                                    {meta.error && meta.touched && <span className={styles.errorText}>{meta.error}</span>}
                                                </div>
                                                )}
                                            </Field>
                                            <Field name="email">
                                                {({ input, meta }) => (
                                                <div className={styles.form_group}>
                                                    <label htmlFor="email">My email address is *</label>
                                                    <input {...input} type="email" placeholder="Your Email" />
                                                    {meta.error && meta.touched && <span className={styles.errorText}>{meta.error}</span>}
                                                </div>
                                                )}
                                            </Field>
                                            <Field name="message">
                                                {({ input, meta }) => (
                                                <div className={styles.form_group}>
                                                    <label htmlFor="email">Message *</label>
                                                    <textarea {...input} type="password" placeholder="Include an optional message" />
                                                    {meta.error && meta.touched && <span className={styles.errorText}>{meta.error}</span>}
                                                </div>
                                                )}
                                            </Field>
                                            <div className={"button_wrapper"}>
                                                <button className="btn" type="submit" disabled={submitting}>
                                                    {submitting ? 'Sending...' : 'Contact me'}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            />
                        </div>
                    </div>

                    <p style={{textAlign: "center"}}>
                        Feel free to check out my social media presence below to get to know me better.
                    </p>
                    
                    <div className="headerSocial" style={{marginBottom:"20px"}}>
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
            </section>

            <div className={styles.model + " " + (emailSent ? styles.show : null)}>
                <div className={styles.modal_wrapper} >
                    <div className={styles.modal_header +" "+ styles.modalSuccess}>
                        <p className="text text-title">Yaay!</p>
                    </div>
                    <div className={styles.modal_content}>
                        <div className={styles.modal_body}>
                            <BsCheckCircle style={{fontSize:"45px", color:"#66cc66"}}/>
                            <p>Your message has been sent! I will be in touch as soon as possible</p>
                        </div>
                        <div className={styles.modal_footer}>
                            <button onClick={handleCloseSuccess} >close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.model + " " + (emailFailed ? styles.show : '')}>
                <div className={styles.modal_wrapper} >
                    <div className={styles.modal_header +" "+ styles.modalError}>
                        <p className="text text-title">An error occured</p>
                    </div>
                    <div className={styles.modal_content}>
                        <div className={styles.modal_body}>
                            <BsXCircle style={{fontSize:"45px", color:"rgba(255, 38, 38, 0.726)"}}/>
                            <p>Something went wrong, this could be a network error, please try again because I will love to hear from you!</p>
                        </div>
                        <div className={styles.modal_footer}>
                            <button onClick={handleCloseFailed} >close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
