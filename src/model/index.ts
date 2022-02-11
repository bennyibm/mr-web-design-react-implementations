export interface Product {
    title : string,
    /**
     * the normal price of the product, in $
     */
    price : number,
    /**
     * the reduction to apply on price, evaluated in percentage
     */
    discount? : number,
    image? : string,
    rate? : number
}

export interface Category{
    title : string,
    discount : number,
    image : string,
}