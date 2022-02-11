import React, { useCallback } from 'react';
import { Product } from '../../model';
import Rating from '../rating';
import styles from "./product.module.css"

type props = {
    product : Product
}
export default function ProductCard({product} : props){

    const {title, price, discount, image, rate} = product
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
            <img src={`${image}`} alt={title}/>
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

