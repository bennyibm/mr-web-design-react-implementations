import React, { useCallback } from 'react';
import Rating from '../rating';
import styles from "./product.module.css"

type props = {
    title : string,
    /**
     * the normal price of the product, in $
     */
    price : number,
    /**
     * the reduction to apply on price, evaluated in percentage
     */
    discount? : number,
    imageName : string,
    rating : number
}
function ProductItem({title, price, discount, imageName, rating} : props){

    const handleClick = useCallback( e => {
        e.preventDefault()
    }, [])

    return(
        <div className={styles.product}>
            
            {discount && <span className={styles.discount}>-{discount}%</span>}
            
            <div className={styles.actions}>
                <a href="/" onClick={handleClick} >
                    <i className="fas fa-heart" />
                </a>
                <a href="/" onClick={handleClick} >
                    <i className="fas fa-share" />
                </a>
                <a href="/" onClick={handleClick} >
                    <i className="fas fa-eye" />
                </a>
            </div>
            <img src={`/img/${imageName}`} alt={title}/>
            <h2>{title}</h2>

            <div className={styles.rating}>
                <Rating />
            </div>
            <div className={styles.prices}>
                <span className={styles.currentPrice}>{discount ? (price - price * discount / 100).toFixed(2) : price}$</span>
                {discount && <span className={styles.oldPrice}>{price}$</span>}
            </div>

            <a href="/" className={`btn ${styles.btn}`} onClick={ e => e.preventDefault()}>add to cart</a>
        </div>
    )
}
export default function ProductSection() {
    
    return(
        <section className={styles.productSection} id="product">
            <h1 className="heading">latest <span>products</span></h1>
            <div className={styles.container}>
                <ProductItem title="organic banana" rating={4.5} discount={33} price={10.50} imageName="product-1.png" />
                <ProductItem title="organic tomato" rating={4.5} discount={14} price={17} imageName="product-2.png" />
                <ProductItem title="organic orange" rating={4.5} discount={10} price={25} imageName="product-3.png" />
                <ProductItem title="organic milk" rating={4.5} discount={33} price={47} imageName="product-4.png" />
                <ProductItem title="organic grapes" rating={4.5} discount={33} price={10.50} imageName="product-5.png" />
                <ProductItem title="organic almonds" rating={4.5} discount={13} price={10.50} imageName="product-6.png" />
            </div>
        </section>
    )
};
