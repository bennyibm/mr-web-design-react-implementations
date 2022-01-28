import React from 'react';
import styles from "./count-down.module.css"


export default function CountDown({dueDate} : {dueDate? : string | Date}) {
    return(
        <div className={styles.countDown}>
            <div className={styles.info}>
                <span className={styles.value}>13</span>
                <span className={styles.title}>day</span>
            </div>
            <div className={styles.info}>
                <span className={styles.value}>4</span>
                <span className={styles.title}>hour</span>
            </div>
            <div className={styles.info}>
                <span className={styles.value}>16</span>
                <span className={styles.title}>minute</span>
            </div>
            <div className={styles.info}>
                <span className={styles.value}>2</span>
                <span className={styles.title}>second</span>
            </div>
        </div>
    )
};
