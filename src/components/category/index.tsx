import React from 'react';
import { Category } from '../../model';
import styles from "./category.module.css"

type props = {
    category : Category
}
export default function CategoryCard({category} : props){
    const {title, discount, image} = category
    
    return(
        <div className={styles.category}>
            <h3>{title}</h3>
            <p>upto {discount}% off</p>
            <img src={`/img/${image}`} alt={title} />
            <a href="/" className={`btn ${styles.btn}`} onClick={e => e.preventDefault()}>shop now</a>
        </div>
    )
}