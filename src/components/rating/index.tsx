import React from 'react';
import styles from "./rating.module.css"

type props = {
    rate? : 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5
}
export default function Rating({rate} : props) {


    return(
        <div className={styles.rating} >
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
        </div>
    )
    
};
