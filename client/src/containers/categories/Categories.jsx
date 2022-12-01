import React from 'react';
import "./categories.css";
import { CatCards } from '../../components';

const Categories = () => {
  return (
    <div className='categories__section'>
     <h1>Browse by category</h1>
     <div className='categories__cards__box'>
     <CatCards/>
     <CatCards/>
     <CatCards/>
     </div>
     
    </div>
  )
}

export default Categories