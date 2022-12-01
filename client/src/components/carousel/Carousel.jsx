import React from 'react';
import "./carousel.css";
import Cards from "../cards/Cards";


const Carousel = () => {
  return (
    <div className="topnav__cards_container">
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    </div>
  )
}

export default Carousel