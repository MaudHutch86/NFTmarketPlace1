import React from 'react';
import "./trends.css";
import { CatCards } from '../../components';

const Trends = () => {
  return (
    <div className='Trends__section'>
     <h1>Trends</h1>
     <div className='Trends__cards__box'>
     <CatCards/>
     <CatCards/>
     <CatCards/>
     </div>
     
    </div>
  )
}

export default Trends