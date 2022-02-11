import React from 'react';
import styles from "./breadcrumb-hero.module.css";

type props = {
    imagePath? : string,
    title : string
}
export default function BreadcrumbHero({title, imagePath = "/img/deal-bg.jpg"} : props) {
    return(
        <section className={styles.breadcrumbHero} style={{backgroundImage : `url(${imagePath})`}}>
            <h3>{title}</h3>
        </section>
    )
};
