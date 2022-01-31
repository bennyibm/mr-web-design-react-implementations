import React from 'react';
import CountDown from '../count-down';
import styles from "./deal.module.css"

export default function DealSection() {
    
    return(
        <section id="deal" className={styles.dealSection} style={{backgroundImage : "url(/img/deal-bg.jpg)"}}>
            <div className={styles.content}>
                <h1>deal of the day</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                </p>
                <div className={styles.countDownArea}>
                    <CountDown dueDate="2/13/2022" />
                </div>
                <div>
                    <a href="/" className={`btn ${styles.btn}`} onClick={e => e.preventDefault()}>get the deal</a>
                </div>
                
            </div>
            <div  />
        </section>
    )
};
