import React from 'react'
import {Link} from 'react-router-dom'
import '../style/ProductListPage.css'

const products = ['phone', 'computer', 'laptop']
const ProductListPage = () => {

    const list = products.map(product => (<li key={product}><Link  to={`/product/${product}`}>{product}</Link></li>))
    
    return (
        
    <div className='products'>
        <h1>List of Products</h1>
        <div>
            <ul>
             {list}   
            </ul>
        </div>
        </div>  );
}
 
export default ProductListPage;