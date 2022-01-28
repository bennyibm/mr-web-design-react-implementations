import React, {useRef} from 'react';
import styles from "./contact-form.module.css"


export default function ContactForm() {
    const form = useRef<HTMLFormElement | null>(null)
    return(
        <section className={styles.contactForm}>
            <h1 className="heading">contact <span>us</span></h1>
            <form ref={form} className={styles.form}>
                <div className={styles.inputBox}>
                    <input placeholder="name : john doe" />
                </div>
                <div className={styles.inputBox}>
                    <input placeholder="email : johndoe@domaine.com" />
                </div>
                <div className={styles.inputBox}>
                    <input placeholder="phone : ++243 815490426" />
                </div>
                <div className={styles.inputBox}>
                    <input placeholder="subject : how to buy" />
                </div>
                <div className={styles.textArea}>
                    <textarea placeholder="write your question" />
                </div>

                <a href="/" className={`btn ${styles.btn}`}>send message</a>
            </form>
            
        </section>
    )
};
