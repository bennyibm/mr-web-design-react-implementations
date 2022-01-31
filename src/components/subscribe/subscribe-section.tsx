import React, { useRef } from 'react';
import styles from "./subscribe-setion.module.css"

export default function SubscribeSection() {
    const form = useRef<HTMLFormElement | null>(null)

    return(
        <section id="subscribe" className={styles.subcribeSection} style={{backgroundImage : "url(/img/newsletter-bg.jpg)"}}>
            <h1 className="heading">subscribe for <span>latest update</span></h1>
            <form ref={form} className={styles.form}>
                <div>
                    <input placeholder="enter your email"/>
                    <button className={`btn ${styles.btn}`} onClick={e => e.preventDefault()} >subscribe</button>
                </div>
            </form>
        </section>
    )
};
