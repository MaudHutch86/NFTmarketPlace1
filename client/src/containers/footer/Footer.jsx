import React from 'react';
import "./footer.css";
import {FiTwitter, FiInstagram, FiMail} from "react-icons/fi";
import {FaDiscord} from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__upper__Box'>
        <div className='footer__keepInTouchBox'>
          <h1 className='footer__h1__title'> Stay in the loop</h1>
          <div className='footer__description__Box'>
          <p className='footer__p'>Join our mailing list to stay in the loop with the newest feature releases , NFT drops, and tips and tricks for navigating StellART</p>
          <form className='footer__signup__form'>
            <div className='footer__input__box'>
              <input className='footer__input' placeholder='Your email address'></input>
              <button className='footer__snu__button'>Sign up</button>
              </div>
          </form>
          </div>
        </div>
        <div className='footer__community__box'>
        <div className='footer__community__box__header'>
          <h1 className='footer__h1__title'>Join the community</h1>
        </div>
        <div className='footer__socialM__btn__box'>
          <button className='footer__socialM__button'><a className='footer__a' href='#twitter'><FiTwitter/></a></button>
          <button className='footer__socialM__button'><a className='footer__a' href='#instagram'></a><FiInstagram/></button>
          <button className='footer__socialM__button'><a className='footer__a' href='#discord'><FaDiscord/></a></button>
          <button className='footer__socialM__button'><a className='footer__a' href='#mail'><FiMail/></a></button>
        </div>
        <hr></hr>
      </div>
      </div>
     
    
      <div className='footer__bottom_down'>
      <p className='legalMention'>@2022 By Hutchinson</p>
      </div>

    </div>
    
  )
}

export default Footer