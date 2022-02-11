import React, {useRef} from "react";
import { BreadcrumbHero } from "../../components";
import styles from "./contact.module.css";

export default function ContactPage() {
    const form = useRef<HTMLFormElement | null>(null)
    return(
        <main id="contact" className={styles.contactForm}>
            <BreadcrumbHero title="Contact us" imagePath="/img/deal-bg.jpg" />
            <section>
                <h1 className="heading">let us <span>talk</span></h1>
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
        </main>
    )
};
