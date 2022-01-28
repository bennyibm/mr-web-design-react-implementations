import React from 'react';
import styles from "./home.module.css"

export default function HomeSection() {
    
    return(
        <section className={styles.home}>
            <div className={styles.img}>
                <img src="/img/home-img.png" alt="your daily need products" />
            </div>
            <div className={styles.content}>
                <span>fresh and organic</span>
                <h3>your daily need products</h3>
                <a href="/" onClick={e => e.preventDefault()} className={`btn ${styles.btn}`}>
                    get started
                </a>
            </div>
        </section>
    )
}
