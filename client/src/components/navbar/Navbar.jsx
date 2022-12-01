import React from 'react';
import myImage from "../../assets/image/etoile-filante.png";
import './navbar.css';
import {MdOutlineAccountBalanceWallet , MdOutlineAccountCircle} from 'react-icons/md';

function Navbar(){
    return (
        <div className="topnav">
          <div className='topnav__links_container'>
            <div className='topnav__links__logo'>
            <img src={myImage} id="logo" alt="logo" />
              <h3 id='brandTitle'>Stell<span id='bandTittle-effect1'>Art</span><span id='bandTittle-effect2'>Market</span></h3>
            </div>

          </div>
          <div height="72px, 45px" className='topnav__input'>
            <input id="search__input" type="text" placeholder= "Search items, collections, and accounts"></input>
          </div>
          <div className='topnav__links'>
            <a className="active" href="#home">Explore</a>
            <a href="#products">Products</a>
            <a href="#trends">Trends</a>
            <a href="#categories">Categories</a>
            <a href="#userAccount" id='topnav__account_logo'><MdOutlineAccountCircle/></a>
            <a href="#walletAddress" id='topnav__wallet_logo'><MdOutlineAccountBalanceWallet/></a>
        
            </div>
       
        
      </div>
    )
}

export default Navbar;