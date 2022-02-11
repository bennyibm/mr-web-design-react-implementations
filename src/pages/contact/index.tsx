import React, {useCallback, useEffect, useRef} from "react";
import emailjs from '@emailjs/browser';
import { BreadcrumbHero } from "../../components";
import styles from "./contact.module.css";

export default function ContactPage() {
    const form = useRef<HTMLFormElement | null>(null)
    const info = useRef<HTMLDivElement | null>(null)
    const userID = useRef<string>("user_EJS5qNQAdmD8XBTUpcRRm")
    const serviceID = useRef<string>("service_1ao905e")
    const templateID = useRef<string>("template_0yar6ji")
    
    useEffect( () =>{
        form.current!.onsubmit = (e) => {
            e.preventDefault();
            emailjs.sendForm(serviceID.current, templateID.current, form.current!, userID.current)
            .then( function onSuccess(){
                info.current!.classList.remove(styles.danger);
                info.current!.classList.remove(styles.success);
                info.current!.classList.add(styles.success);
                info.current!.innerText = "success! we receive your message!"
            }, function onFailed(){
                info.current!.classList.remove(styles.success);
                info.current!.classList.remove(styles.danger);
                info.current!.classList.add(styles.danger);
                info.current!.innerText = "failled! sorry unable to send!"
            })
        }
    }, [])

    return(
        <main id="contact" className={styles.contactPage}>
            <BreadcrumbHero title="Contact us" imagePath="/img/deal-bg.jpg" />
            <section>
                <h1 className="heading">let us <span>talk</span></h1>
                <div className={styles.info} ref={info}/>

                <form ref={form} className={styles.form}>
                    <div className={styles.inputBox}>
                        <input name="name" placeholder="name : john doe" />
                    </div>
                    <div className={styles.inputBox}>
                        <input name="email" placeholder="email : johndoe@domaine.com" />
                    </div>
                    <div className={styles.inputBox}>
                        <input name="phone" placeholder="phone : ++243 815490426" />
                    </div>
                    <div className={styles.inputBox}>
                        <input name="subject" placeholder="subject : how to buy" />
                    </div>
                    <div className={styles.textArea}>
                        <textarea name="message" placeholder="write your question" />
                    </div>

                    <input type="submit" className={`btn ${styles.btn}`} value="send the message" />
                </form>
            </section>
        </main>
    )
};
