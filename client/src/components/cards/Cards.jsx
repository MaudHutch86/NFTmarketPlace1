import React from 'react';
import "./cards.css";
import {Card, Image, Icon} from "semantic-ui-react";
import cardImage from "../../assets/image/NeptuneTriton_webb1059.png";

const Cards = () => {
  return (
    <div className="Cards_container">
      <img className="Cards_img" src={cardImage} alt= "collection image"></img>
      <div className='wrapper'>

      <h1 className="Cards_title">Art</h1>
   
      </div>
  
   </div>
    
  )
}

export default Cards