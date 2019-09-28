import React from 'react';
import Product from '../components/Product'
import {Link} from 'react-router-dom'
const ProductPage = ({match}) => {
    
    
    return (
        
        <div className="productinfo">
        <h2>Product</h2>
        <Product id={match.params.id}/>
        
        <Link to='/products'>Come back to Product list</Link>
        </div>
        
      );
}
 
export default ProductPage;