import React from 'react';
import "./CollectionListItem.css";







function CollectionListItem (props)  {
  return (
   <div className='collection__link__container'>

      <a className="collection__link">
        <div className='collection__container'>
        <div className='collection__rank'>{props.rank}</div>
        <span className='collection__spans'></span>
        <div className='collection__image'><img src={props.img} alt='nft'/></div>
        <div className='collection__description'>
  
          <h3 className='collection__name'>{props.name}</h3>
    
          <p className='collection__floor'>{props.floor}</p>
          <p className='collection__devise'>{props.devise}</p>
                
        <div><p className='collection__volume'>{props.volume}</p></div>
        </div>
  
        </div>
      </a>
   </div>
  )
}

export default CollectionListItem