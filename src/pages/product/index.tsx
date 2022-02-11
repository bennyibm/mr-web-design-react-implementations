import React, { useState, useEffect, useCallback } from "react";
import { BreadcrumbHero, Rating } from "../../components";
import styles from "./product-page.module.css";
import ProductCard from '../../components/product/index';

type Product = {
    id? : string,
    title : string,
    description : string,
    price : number,
    discount? : number,
    rate? : number,
    image? : string,
}

const sampleProducts : Product[] = [
    {
        title : "organic banana",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est temporibus eveniet impedit modi quae ad, unde molestiae pariatur consequuntur itaque veniam doloribus laudantium placeat quia amet quas quos laborum eius!",
        price : 17.5,
        discount : 28,
        rate : 3.5,
    },
    {
        title : "organic tomato",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est temporibus eveniet impedit modi quae ad, unde molestiae pariatur consequuntur itaque veniam doloribus laudantium placeat quia amet quas quos laborum eius!",
        price : 17.5,
        discount : 28,
        rate : 3.5,
    },
    {
        title : "organic orange",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est temporibus eveniet impedit modi quae ad, unde molestiae pariatur consequuntur itaque veniam doloribus laudantium placeat quia amet quas quos laborum eius!",
        price : 17.5,
        discount : 28,
        rate : 3.5,
    },
    {
        title : "organic milk",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est temporibus eveniet impedit modi quae ad, unde molestiae pariatur consequuntur itaque veniam doloribus laudantium placeat quia amet quas quos laborum eius!",
        price : 17.5,
        discount : 28,
        rate : 3.5,
    },
    {
        title : "organic grapes",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est temporibus eveniet impedit modi quae ad, unde molestiae pariatur consequuntur itaque veniam doloribus laudantium placeat quia amet quas quos laborum eius!",
        price : 17.5,
        discount : 28,
        rate : 3.5,
    },
    {
        title : "organic almonds",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est temporibus eveniet impedit modi quae ad, unde molestiae pariatur consequuntur itaque veniam doloribus laudantium placeat quia amet quas quos laborum eius!",
        price : 17.5,
        discount : 28,
        rate : 3.5,
    },
    {
        title : "organic apple",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est temporibus eveniet impedit modi quae ad, unde molestiae pariatur consequuntur itaque veniam doloribus laudantium placeat quia amet quas quos laborum eius!",
        price : 17.5,
        discount : 28,
        rate : 3.5,
    },
    {
        title : "organic bere",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est temporibus eveniet impedit modi quae ad, unde molestiae pariatur consequuntur itaque veniam doloribus laudantium placeat quia amet quas quos laborum eius!",
        price : 17.5,
        discount : 28,
        rate : 3.5,
    },
    {
        title : "organic carotes",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est temporibus eveniet impedit modi quae ad, unde molestiae pariatur consequuntur itaque veniam doloribus laudantium placeat quia amet quas quos laborum eius!",
        price : 17.5,
        discount : 28,
        rate : 3.5,
    },
] 

function FilterBoxItem(props : {label : string, children : any }){
    const [checked, setChecked] = useState<boolean>(false)
    return(
        <div className={styles.filterBoxItem}>
            <div className={styles.filterBoxItemHead}>
                <i className={`fas fa-check ${checked && styles.checked}`} onClick={ () => setChecked(!checked)}></i>
                <span  onClick={ () => setChecked(!checked)}>{props.label}</span>
            </div>
            <div className={`${styles.filterBoxItemContent} ${checked && styles.show}`}>
                {props.children}
            </div>
        </div>
    )
}
export default function ProductsPage() {
    const productDetails = ProductDetails();
    
    const [products, setProducts] = useState<Product[]>([])
    
    useEffect(() => {
        sampleProducts.forEach((product, index) => {
            // product.title = `product #${index + 1}`;
            product.image = `/img/product-${index+1}.png`;
            product.id = Math.random().toString()
        });

        console.log("products : ", sampleProducts);
        setProducts(sampleProducts);
    }, []);

    return(
        <main className={styles.productsPage}>
            <BreadcrumbHero title="Explore products" />
            <section className={styles.container}>
                <div className={styles.aside}>
                    <h3>
                        <i className="fas fa-cog"></i> Filter options
                    </h3>
                    <form>
                        <FilterBoxItem label="price">
                            <div className={styles.inputBox}>
                                <div>
                                    <label htmlFor={styles.priceMin}>min</label>
                                    <input id={styles.priceMin} type="number" min={0} defaultValue={0} />
                                </div>
                                to
                                <div>
                                    <label htmlFor={styles.priceMin}>max</label>
                                    <input id={styles.priceMin} type="number" defaultValue={15}/>
                                </div>
                            </div>
                        </FilterBoxItem>
                        <FilterBoxItem label="discount">
                            <div className={styles.inputBox}>
                                <div>
                                    <label htmlFor={styles.priceMin}>min</label>
                                    <input id={styles.priceMin} type="number" min={0} defaultValue={0} />
                                </div>
                                to
                                <div>
                                    <label htmlFor={styles.priceMin}>max</label>
                                    <input id={styles.priceMin} type="number" defaultValue={15}/>
                                </div>
                            </div>
                        </FilterBoxItem>
                        <FilterBoxItem label="rating">
                            <div className={styles.inputBox}>
                                <div>
                                    <label htmlFor={styles.priceMin}>min</label>
                                    <input id={styles.priceMin} type="number" min={0} defaultValue={0} />
                                </div>
                                to
                                <div>
                                    <label htmlFor={styles.priceMin}>max</label>
                                    <input id={styles.priceMin} type="number" defaultValue={15}/>
                                </div>
                            </div>
                        </FilterBoxItem>
                        
                        <button className="btn">
                            <i className="fas fa-refresh"></i>
                            reset
                        </button>
                    </form>
                </div>
                <div className={styles.products}>
                    <div className={styles.details}>
                        <div className={styles.result}>
                            <p>
                                There are <span>{products.length}</span> products
                            </p>
                            
                        </div>
                        <form action="" className={styles.sorting}>
                            <label htmlFor="order">sort by</label>
                            <select id="order">
                                <option value="">Name, A to Z</option>
                                <option value="">Name, Z to A</option>
                                <option value="">Prie, Low to High</option>
                                <option value="">Prie, High to Low</option>
                            </select>
                        </form>
                    </div>

                    <div className={styles.content}>
                        {   
                            products.length ? products.map((product, index) => <ProductCard key={`product-${index}`} product={product} />)
                            : <EmpyList />
                        }
                    </div>
                </div>
            </section>
        </main>
    )
};

function ProductDetails(){
    return(
        <></>
    )
}

function EmpyList(){
    return(
        <div className={styles.emptyList}>
            <i className="far fa-folder-open"></i>
            <h3>
                Sorry but! there's no result
            </h3>
        </div>
    )
}