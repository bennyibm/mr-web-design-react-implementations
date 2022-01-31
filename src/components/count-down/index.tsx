import React, { useRef, useEffect, useCallback } from 'react';
import styles from "./count-down.module.css"


export default function CountDown({dueDate} : {dueDate : string}) {

    const rDay = useRef<HTMLSpanElement | null>(null)
    const rHour = useRef<HTMLSpanElement | null>(null)
    const rMinute = useRef<HTMLSpanElement | null>(null)
    const rSecond = useRef<HTMLSpanElement | null>(null)

    const computeCountDown = useCallback( () =>{
        const countDate = new Date(dueDate).getTime()
        const currentDate = new Date().getTime()
        const gape = countDate - currentDate

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        rDay.current?.replaceChildren(Math.floor(gape / day).toString())
        rHour.current?.replaceChildren(Math.floor((gape % day) / hour).toString())
        rMinute.current?.replaceChildren(Math.floor((gape % hour) / minute).toString())
        rSecond.current?.replaceChildren(Math.floor((gape % minute) / second).toString())

    }, [dueDate])

    useEffect( () =>{
       
        setInterval(computeCountDown, 1000)

    }, [computeCountDown])

    return(
        <div className={styles.countDown}>
            <div className={styles.info}>
                <span className={styles.value} ref={rDay}>0</span>
                <span className={styles.title}>day</span>
            </div>
            <div className={styles.info}>
                <span className={styles.value} ref={rHour}>0</span>
                <span className={styles.title}>hour</span>
            </div>
            <div className={styles.info}>
                <span className={styles.value} ref={rMinute}>0</span>
                <span className={styles.title}>minute</span>
            </div>
            <div className={styles.info}>
                <span className={styles.value} ref={rSecond}>0</span>
                <span className={styles.title}>second</span>
            </div>
        </div>
    )
};
