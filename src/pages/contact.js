import React,{useState} from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from '../styles/contact.module.scss'
import { Form, Field } from 'react-final-form'
import { BsCheckCircle, BsXCircle  } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import Seo from '../components/Seo'

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
            email: values.email,
            subject: values.subject,
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
        <Layout>
            <Seo 
                pageTitle="Contact"
                pageUrl="contact"
                pageDescription="I will contact you back as soon as possible"
            />
            <Hero
                title={'Get In Touch'}
                description={'Get in touch with me and I will get you back as soon as possible.'}
                image={
                    <StaticImage 
                        className="hero__image" 
                        loading="eager"  
                        src="../images/contact.jpg" alt="home hero" 
                    />
                }
            />
            <section className='wrap wrapper'>
                <div className={styles.content}>
                    
                    <Form
                        onSubmit={onSubmit}
                        validate={values => {
                            const errors = {}
                            let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
                            if (!values.name || (values.name && values.name.length < 2)) {
                            errors.name = 'Name is too short'
                            }
                            if (!values.subject || (values.subject && values.subject.length < 7)) {
                            errors.subject = 'Please be elaborate'
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
                                            <label htmlFor="name">My name is</label>
                                            <input {...input} type="text" placeholder="Your Name" />
                                            {meta.error && meta.touched && <span className={styles.errorText}>{meta.error}</span>}
                                        </div>
                                        )}
                                    </Field>
                                    <Field name="subject">
                                        {({ input, meta }) => (
                                        <div className={styles.form_group}>
                                            <label htmlFor="subject">I want to talk about</label>
                                            <input {...input} type="text" placeholder="Your Subject" />
                                            {meta.error && meta.touched && <span className={styles.errorText}>{meta.error}</span>}
                                        </div>
                                        )}
                                    </Field>
                                    <Field name="email">
                                        {({ input, meta }) => (
                                        <div className={styles.form_group}>
                                            <label htmlFor="email">My email address is</label>
                                            <input {...input} type="email" placeholder="Your Email" />
                                            {meta.error && meta.touched && <span className={styles.errorText}>{meta.error}</span>}
                                        </div>
                                        )}
                                    </Field>
                                    <Field name="message">
                                        {({ input, meta }) => (
                                        <div className={styles.form_text}>
                                            <textarea {...input} type="password" placeholder="Include an optional message" />
                                            {meta.error && meta.touched && <span className={styles.errorText}>{meta.error}</span>}
                                        </div>
                                        )}
                                    </Field>
                                    <div className={styles.button_wrapper}>
                                        <button type="submit" disabled={submitting}>
                                            {submitting ? 'Sending...' : 'Contact me'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    />
                    
                </div>
            </section>

            <div className={styles.model + " " + (emailSent ? styles.show : null)}>
                <div className={styles.modal_success_wrapper} >
                    <div className={styles.modal_header}>
                        <p className="text text-title">Yaay!</p>
                    </div>
                    <div className={styles.modal_success_content}>
                        <div className={styles.modal_success_body}>
                            <BsCheckCircle style={{fontSize:"45px", color:"#66cc66"}}/>
                            <p>Your message has been sent! i will be in touch as soon as possible</p>
                        </div>
                        <div className={styles.modal_footer}>
                            <button onClick={handleCloseSuccess} >close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.modelError + " " + (emailFailed ? styles.show : '')}>
                <div className={styles.modal_success_wrapper} >
                    <div className={styles.modal_header}>
                        <p className="text text-title">An error occured</p>
                    </div>
                    <div className={styles.modal_success_content}>
                        <div className={styles.modal_success_body}>
                            <BsXCircle style={{fontSize:"45px", color:"rgba(255, 38, 38, 0.726)"}}/>
                            <p>Something went wrong, this could be a network error, please try again because i will love to hear from you!</p>
                        </div>
                        <div className={styles.modal_footer}>
                            <button onClick={handleCloseFailed} >close</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
