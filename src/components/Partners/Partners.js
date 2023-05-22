import React from 'react'
import './Partners.css'
import logo1 from '../../Assets/bacastrees.jpg'
import logo2 from '../../Assets/justsprinklers.jpg'
import logo3 from '../../Assets/rehms.jpg'
import logo4 from '../../Assets/soilmender.jpg'
import logo5 from '../../Assets/505outside.jpg'

function Partners() {


  return (


    <div className='Partners'>
            <div className='partners_welcome'>
            <h1>Partners of Jericho</h1>
                <p>
                These are our proud sponsors. We can gurantee that these brands are some of the most reliable in Albuquerque, other than us.     
                </p>
        </div>


<div className='partners_body'>
            <div className='partners_body_top'>
                <h1>Garden Talk Sponsors</h1>

                <p>
                  If you haven't checked these guys out, you should! Support the proud sponsor's of Jericho Nursery's Garden Talk Radio Show.
                </p>      
                <div className='gts_pics'>
                    <a href='https://www.505outside.com/' target="_blank"  rel="noreferrer">
                    <img src={logo5}alt='' className='partner_logos'/>
                    </a>
                    <a href='https://www.bacastrees.com/' target="_blank"  rel="noreferrer">
                    <img src={logo1} alt='' className='partner_logos'/>
                    </a>
                    <a href='https://www.justsprinklers.com/' target="_blank"  rel="noreferrer">
                    <img src={logo2} alt='' className='partner_logos'/>
                    </a>
                    <a href='https://www.rehmsnurserynm.com/' target="_blank"  rel="noreferrer">
                    <img src={logo3}alt='' className='partner_logos'/>
                    </a>
                    <a href='http://www.soilmender.com/' target="_blank"  rel="noreferrer">
                    <img src={logo4}alt='' className='partner_logos'/>
                    </a>
                </div>

 




            </div>

            <div className='partners_body_bottom'>
              <h1>Other Local Brands we do business with</h1>
  
<div className='lp_img_container'>
        <a href='https://suregreenproducts.com/' target="_blank"  rel="noreferrer">
              <img src='https://suregreenproducts.com/wp-content/uploads/2023/02/Sure-Green-Logo-Green.png' alt=''/>
        </a>
        <a href='https://soilutions.net/' target="_blank"  rel="noreferrer">
              <img src='https://cdn.shopify.com/s/files/1/0530/4870/5219/files/Artboard_1_003575e3-fc44-4fd0-8d2c-a20ad0dbdd45_360x.png?v=1623300653' alt=''/>
          </a>    
          <a href='https://www.eastcentralministries.org/' target="_blank"  rel="noreferrer">
              <img src='https://images.squarespace-cdn.com/content/v1/619d2e8fd4dd083c86697cc9/223556e8-8c18-4fae-a4a2-7a60ca3d3ffb/ECM+logo+1.jpg?format=1500w' alt='' className='ecm'/>
           </a>   
           <a href='https://www.millersfeedandsupply.com/' target="_blank"  rel="noreferrer">
              <img src='https://lirp.cdn-website.com/d0a1fad2/dms3rep/multi/opt/logo-468x143-255w.png' alt='' className='millers'/>
            </a>  

</div>
         
                </div>


         
    </div>



    <div className='partners_conclusion'>
        <h1>A Special thanks to all our Supporters</h1>
    </div>
</div>


        

  )
}

export default Partners;