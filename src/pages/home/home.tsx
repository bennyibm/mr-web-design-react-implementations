import React, {useCallback, useRef} from 'react';
import styles from "./home-page.module.css";
import {ProductCard, CategoryCard, CountDown } from '../../components';
import { Link } from 'react-router-dom';

export default function HomePage() {

    const bannerSection = useCallback(() => {
    
        return(
            <section id="home" className={styles.bannerSection}>
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
    }, [])

    const offerSection = useCallback( () => {
        return(
            <section className={styles.offerSection}>
                <div className={styles.offer}>
                    <img src="/img/banner-1.jpg" alt="banner 1" />
                    <div className={styles.content}>
                        <h3>special offer</h3>
                        <p>upto 45% off</p>
                        <a href="/" className="btn" onClick={e => e.preventDefault()} > check out</a>
                    </div>
                </div>
                <div className={styles.offer}>
                    <img src="/img/banner-2.jpg" alt="banner 2" />
                    <div className={styles.content}>
                        <h3>limited offer</h3>
                        <p>upto 50% off</p>
                        <a href="/" className="btn" onClick={e => e.preventDefault()} > check out</a>
                    </div>
                </div>
            </section>
        )
    }, [])

    const categorySection = useCallback( () =>{
        return(
            <section id="category" className={styles.categorySection}>
                <h1 className="heading">shop by <span>category</span></h1>
    
                <div className={styles.container}>
                    <CategoryCard category={{title : "Vegitables",  discount :50, image :"category-1.png"}} />
                    <CategoryCard category={{title : "Juice", discount : 44, image : "category-2.png"}} />
                    <CategoryCard category={{title:"Meat", discount : 35, image : "category-3.png"}} />
                    <CategoryCard category={{title : "Fruite", discount : 30, image : "category-4.png"}} />
                </div>
                
            </section>
        )
    }, [])

    const productSection = useCallback( () => {
        return(
            <section className={styles.productSection} id="product">
                <h1 className="heading">latest <span>products</span></h1>
                <div className={styles.container}>
                    <ProductCard product={{title : "organic banana", rate : 4.5, discount : 33, price : 10.50, image : "/img/product-1.png"}} />
                    <ProductCard product={{title : "organic tomato", rate : 4.5, discount : 14, price : 17, image : "/img/product-2.png"}} />
                    <ProductCard product={{title : "organic orange", rate : 3.5, discount : 10, price : 25, image : "/img/product-3.png"}} />
                </div>
                <Link to="/shop" className={`btn ${styles.btn}`}>see more</Link>
            </section>
        )
    }, [])

    const dealSection = useCallback( () => {
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
    }, [])

    
    const form = useRef<HTMLFormElement | null>(null)
    
    const subscribeSection = useCallback( () =>{
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
    }, [])
    return(
        <>
            {bannerSection()}
            {offerSection()}
            {categorySection()}
            {productSection()}
            {dealSection()}
            {subscribeSection()}
        </>
    )
};
