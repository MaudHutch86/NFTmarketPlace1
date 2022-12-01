import React from "react";
import cardImage from "../../assets/image/NeptuneTriton_webb1059.png";
import "./catCards.css";


function CatCards () {
    return (
      <div className="catCards_container">
       <div className="catCards_top">
        <img className="catCards_img" src={cardImage} alt= "collection image"></img>
       </div>
       <div className="catCards_bottom">
        <h1 className="catCards_title">Art</h1>
       </div>
      </div>
    )
}

export default CatCards ;