import React from 'react';
import "./products.css";
import { CatCards } from '../../components';

const Products = () => {
  return (
    <div className='Products__section'>
     <h1>Products</h1>
     <div className='Products__cards__box'>
     <CatCards/>
     <CatCards/>
     <CatCards/>
     </div>
     
    </div>
  )
}

export default Products