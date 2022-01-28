import React from 'react';
import styles from "./category.module.css"

type props = {
    title : string,
    discount : number,
    imageName : string,
}
function CategoryItem({title, discount, imageName} : props){

    return(
        <div className={styles.category}>
            <h3>{title}</h3>
            <p>upto {discount}% off</p>
            <img src={`/img/${imageName}`} alt={title} />
            <a href="/" className={`btn ${styles.btn}`} onClick={e => e.preventDefault()}>shop now</a>
        </div>
    )
}
export default function CategorySection() {
    return(
        <section className={styles.categoriesContainer}>
            <h1 className="heading">shop by <span>category</span></h1>

            <CategoryItem title="Vegitables" discount={50} imageName="category-1.png" />
            <CategoryItem title="Juice" discount={44} imageName="category-2.png" />
            <CategoryItem title="Meat" discount={35} imageName="category-3.png" />
            <CategoryItem title="Fruite" discount={30} imageName="category-4.png" />
        </section>
    )
};
