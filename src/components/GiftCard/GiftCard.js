import React from 'react'
import './GiftCard.css'
import GiftCardIcon from '../../SVGs/GiftCardIcon'

function GiftCard() {
  return (
    <div className='GiftCard_Main'>
        <div className='gc_main_welcome'>
            <h1>
                Give the gift of Growing
            </h1>
            
            <div className='giftcard_svg'>
            <GiftCardIcon />
            </div>
        </div>

        <div className='gc_main_body'>
            <h2 className='gc_h2'> Gift Card Checkout</h2>            
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className='paypal_form'>
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="XKK5TS48D6QA6" />
<table className='paypal_table'>
<tbody><tr><td>
  <input type="hidden" name="on0" value="Pick your level of thoughtfulness:" />
  Pick your level of thoughtfulness:</td></tr><tr><td><select name="os0">
                <option value="Thoughtful:">Thoughtful: $25.00 USD</option>
                <option value="Wonderful:">Wonderful: $50.00 USD</option>
                <option value="Too Kind:">Too Kind: $75.00 USD</option>
                <option value="PERFECT!">PERFECT! $100.00 USD</option>
</select> </td></tr>
</tbody></table>
<input type="hidden" name="currency_code" value="USD" />
<div className='ppbanner_container'>
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png' alt='' className='paypal_banner'/>
</div>
<div className='ppbutton_container'>
<button className='paypal_button'>
Buy Now
</button>
</div>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" draggable="false" />
</form> 
        </div>
    

    </div>
  )
}

export default GiftCard