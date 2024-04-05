import React, {useState, useEffect} from 'react'
import './PromotionsContainer.css'
import { NavLink } from 'react-router-dom'
import treelogo from '../../../Assets/treelogo.png'
import axios from 'axios'

function PromotionsContainer() {

    const [promotionsData, setPromotionsData] = useState([])

    useEffect(() => {
        axios
          .get("https://jericho-server-eb9k.onrender.com/promotions")
          .then((res) => {
            setPromotionsData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);



const firstImage = promotionsData.filter((item, index) => index === 0)[0]?.img_url;
const secondImage = promotionsData.filter((item, index) => index === 1)[0]?.img_url;
const firstItem= promotionsData.filter((item, index) => index === 0)[0]?.name;
const secondItem= promotionsData.filter((item, index) => index === 1)[0]?.name;

return (
  
    <div className='home_container_outer'>
        <div className='home_container'>
        <div className='home_container_header'>
                <div className='hc_icon'>
                    <img  src={treelogo} className="tree_c_icon" alt=''/>
                </div>
                <div className='home_container_header_text'>
                    <h3>New Product</h3>
                </div>
        </div>

        <div className='hc_body'>
                <div className='hc_img'>
                    <img src={firstImage} className='home_sale_card' alt=''/>
                    <img src={secondImage} className='home_sale_card' alt=''/>

                </div>
                <div className='hc_paragraph'>
                <h3>{firstItem} and {secondItem} just arrived</h3>
                    <p>
                Check out our promotions page, showcasing our newest shipments. Come get them before they are gone!
                    </p>

                            <NavLink to='/promotions'>
                            <button className='hc_button'>See New Plants</button>
                            </NavLink>
                </div>
                </div>
        </div>


    </div>
  
  )
}

export default PromotionsContainer;