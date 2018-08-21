import React from 'react'
import { prefixLink } from 'gatsby-helpers'

import './style.scss'
import iconEagle from '../../static/img/svg-icons/nihonsuruinline.svg'
import iconKamon from '../../static/img/svg-icons/nihonsuruinline.svg'
import iconBakaDono from '../../static/img/svg-icons/dung.svg'
import { config } from 'config'

class Footer extends React.Component {
  render() {

    return (
      <div className='footer'>
        <div className='footer__wrapper'>

	<div className='footer__container-floating'>


</div>


	  <div className='footer__copyright'>
          </div>
       <div className='footer__left'>

	    <div><img className='footer__powered-svg' src={ prefixLink(iconBakaDono) }/> { config.siteTitle }</div>


        </div>

	
	
	<div className='footer__right'>
            
          
	    
	     <div className='footer__powered'>
            <span>Member of the clan </span>
            <a href='https://binhduongbuy.com' className='footer__powered-link' target='_blank'>
              <img className='footer__powered-svg' src={ prefixLink(iconEagle) }/>
              <span className='footer__powered-fx'>Truong Dung</span>
            </a>
          </div>


        </div>



        <div className='footer__centered'>


         <nav className='footer__versions'>
	    <h3>{ config.siteAddress }</h3>
	    <h3>{ config.siteAddress2 }</h3>
            <a href='/tos/privacy'>Privacy</a>
            <a href='/tos'>Terms of service</a>
            <a href='/about' className='is-selected'><img className='footer__powered-svg' src={ prefixLink(iconKamon) }/> Giới thiệu { config.siteTitle }</a>
	    <a href='https://binhduongbuy.com/'>© Truong Dung Private Enterprise (P.E)</a>
          </nav>
        </div>
        </div>
      </div>
    );
  }
}

export default Footer
