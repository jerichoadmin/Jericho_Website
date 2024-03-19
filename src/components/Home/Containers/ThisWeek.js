import React, {useState, useEffect} from 'react'
import './ThisWeek.css'
import { NavLink } from 'react-router-dom'
import icon1 from '../../../Assets/Transparent2.png'
import axios from 'axios'

function NewThisWeek() {

    const [salesData, setSalesData] = useState([])

    useEffect(() => {
        axios
          .get("https://jericho-server-eb9k.onrender.com/sales")
          .then((res) => {
            setSalesData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);



const firstImage = salesData.filter((item, index) => index === 0)[0]?.img_url;
const secondImage = salesData.filter((item, index) => index === 1)[0]?.img_url;
const firstItem= salesData.filter((item, index) => index === 0)[0]?.name;
const secondItem= salesData.filter((item, index) => index === 1)[0]?.name;

return (
  
    <div className='home_container_outer'>
        <div className='home_container'>
        <div className='home_container_header'>
                <div className='hc_icon'>
                    <img  src={icon1} className="c_icon" alt=''/>
                </div>
                <div className='home_container_header_text'>
                    <h3>This Week's Specials</h3>
                </div>
        </div>

        <div className='hc_body'>
                <div className='hc_img'>
                    <img src={firstImage} className='home_sale_card' alt=''/>
                    <img src={secondImage} className='home_sale_card' alt=''/>

                </div>
                <div className='hc_paragraph'>
                <h3>{firstItem} and {secondItem} on sale!</h3>
                    <p>
                See what else is on sale this week for including wide variety of plants, flowers, hardgoods and more. Get your green thumb on!
                    </p>

                            <NavLink to='/sales'>
                            <button className='hc_button'>Shop Specials This Week</button>
                            </NavLink>
                </div>
                </div>
        </div>


    </div>
  
  )
}

export default NewThisWeek