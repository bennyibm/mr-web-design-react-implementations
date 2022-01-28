import React from 'react';
import styles from "./banner.module.css"

export default function BannerSection() {
    
    return(
        <section className={styles.bannerContainer}>
            <div className={styles.banner}>
                <img src="/img/banner-1.jpg" alt="banner 1" />
                <div className={styles.content}>
                    <h3>special offer</h3>
                    <p>upto 45% off</p>
                    <a href="/" className="btn" onClick={e => e.preventDefault()} > check out</a>
                </div>
            </div>
            <div className={styles.banner}>
                <img src="/img/banner-2.jpg" alt="banner 2" />
                <div className={styles.content}>
                    <h3>limited offer</h3>
                    <p>upto 50% off</p>
                    <a href="/" className="btn" onClick={e => e.preventDefault()} > check out</a>
                </div>
            </div>
        </section>
    )
}
