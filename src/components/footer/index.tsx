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
                        <a href="/" onClick={e => e.preventDefault()}>india</a>
                        <a href="/" onClick={e => e.preventDefault()}>USA</a>
                        <a href="/" onClick={e => e.preventDefault()}>japan</a>
                        <a href="/" onClick={e => e.preventDefault()}>russia</a>
                        <a href="/" onClick={e => e.preventDefault()}>france</a>
                    </div>
                </div>
                <div className={styles.links}>
                    <h2>quick links</h2>
                    <div className={styles.nav}>
                        <a href="/" onClick={e => e.preventDefault()}>india</a>
                        <a href="/" onClick={e => e.preventDefault()}>USA</a>
                        <a href="/" onClick={e => e.preventDefault()}>japan</a>
                        <a href="/" onClick={e => e.preventDefault()}>russia</a>
                        <a href="/" onClick={e => e.preventDefault()}>france</a>
                    </div>
                </div>
                <div className={styles.links}>
                    <h2>downoad app</h2>
                    <div className={styles.nav}>
                        <a href="/" onClick={e => e.preventDefault()}>google apps</a>
                        <a href="/" onClick={e => e.preventDefault()}>windows xp</a>
                        <a href="/" onClick={e => e.preventDefault()}>app store</a>
                    </div>
                </div>
                
            </section>
            <section className={styles.credit}>
                <p>
                    created by <a href="http://benny-nkonga.com" target="_blank">benny nkonga</a> | all rights reserved!
                </p>
            </section>
        </footer>
    )
};
