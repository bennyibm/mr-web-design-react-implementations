import React from 'react';
import styles from "./footer.module.css"


export default function Footer() {
    
    return(
        <footer className={styles.footer}>
            <section className={styles.row}>
                <div className={styles.aboutUs}>
                    <a href="/" className={styles.logo}>
                        <i className="fas fa-shopping-basket" /> Groco
                    </a>
                    <p>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna.
                    </p>
                    <div className={styles.followUs}>
                        <a href="/" className={`btn ${styles.btn}`} onClick={e => e.preventDefault()}>
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="/" className={`btn ${styles.btn}`} onClick={e => e.preventDefault()}>
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="/" className={`btn ${styles.btn}`} onClick={e => e.preventDefault()}>
                            <i className="fab fa-linkedin" />
                        </a>
                        <a href="/" className={`btn ${styles.btn}`} onClick={e => e.preventDefault()}>
                            <i className="fab fa-instagram" />
                        </a>
                        
                    </div>
                </div>
                <div className={styles.links}>
                    <h2>Our Locations</h2>
                    <div className={styles.nav}>
                        <a href="#home" >
                            <span>home</span>
                        </a>
                        <a href="#category" >
                            <span>category</span>
                        </a>
                        <a href="#product" >
                            <span>product</span>
                        </a>
                        <a href="#deal" >
                            <span>deal</span>
                        </a>
                        <a href="#contact" >
                            <span>contact</span>
                        </a>
                    </div>
                </div>
                <div className={styles.links}>
                    <h2>quick links</h2>
                    <div className={styles.nav}>
                        <a href="/" onClick={e => e.preventDefault()}>
                            <span>india</span>
                        </a>
                        <a href="/" onClick={e => e.preventDefault()}>
                            <span>USA</span>
                        </a>
                        <a href="/" onClick={e => e.preventDefault()}>
                            <span>japan</span>
                        </a>
                        <a href="/" onClick={e => e.preventDefault()}>
                            <span>russia</span>
                        </a>
                        <a href="/" onClick={e => e.preventDefault()}>
                            <span>france</span>
                        </a>
                    </div>
                </div>
                <div className={styles.links}>
                    <h2>downoad app</h2>
                    <div className={styles.nav}>
                        <a href="/" onClick={e => e.preventDefault()}>
                            <span>google apps</span>
                        </a>
                        <a href="/" onClick={e => e.preventDefault()}>
                            <span>windows xp</span>
                        </a>
                        <a href="/" onClick={e => e.preventDefault()}>
                            <span>app store</span>
                        </a>
                    </div>
                </div>
                
            </section>
            <section className={styles.credit}>
                <p>
                    created by <a href="http://benny-nkonga.com" target="_blank" rel="noreferrer">benny nkonga</a> | all rights reserved!
                </p>
            </section>
        </footer>
    )
};
