import React, { MouseEvent, useCallback, useEffect, useRef } from 'react';
import styles from "./header.module.css"

function TopBar() {
    return (
        <div className={styles.header1}>
            <a href="/" className={styles.logo}>
                <i className="fas fa-shopping-basket" /> Groco
            </a>

            <form className={styles.searchBoxContainer}>
                <input type="search" id={styles.searchBox} placeholder="search here..." />
                <label htmlFor="input-search" className="fas fa-search" />
            </form>
        </div>
    )
}

function NavBar() {
    const navBar = useRef<HTMLDivElement | null>(null)
    const menu = useRef<HTMLElement | null>(null)
    const menuToggler = useRef<HTMLDivElement | null>(null)

    const toggleMobileMenu = useCallback( (e : MouseEvent) =>{
        e.preventDefault();
        menuToggler.current?.classList.toggle("fa-bars")
        menuToggler.current?.classList.toggle("fa-times")
        menu.current?.classList.toggle(styles.active)
    }, [])

    useEffect( () => {
        onscroll = () => {
            if(window.scrollY > 160)
                navBar.current?.classList.add(styles.sticky)
            else
                navBar.current?.classList.remove(styles.sticky)
        }
    }, [])

    return (
        <div ref={navBar} className={styles.header2}>
            <div ref={menuToggler} id={styles.menuToggler} onClick={toggleMobileMenu} className="fas fa-bars" />

            <nav ref={menu} className={styles.navBar}>
                <a href="#home" className={styles.active}>Home</a>
                <a href="#home">category</a>
                <a href="#home">Product</a>
                <a href="#home">Deal</a>
                <a href="#home">Contat</a>
            </nav>

            <div className={styles.icons}>
                <a href="/" ><i className="fas fa-shopping-cart" /></a>
                <a href="/" ><i className="fas fa-heart" /></a>
                <a href="/" ><i className="fas fa-user" /></a>
            </div>
        </div>
    )
}


export default function Header() {
    return (
        <header className={styles.header}>
            <TopBar />
            <NavBar />
        </header >
    )
};
