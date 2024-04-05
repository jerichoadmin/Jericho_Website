import React, {useState, useEffect} from 'react'
import './Promotions.css'
import axios from 'axios';
import { Helmet } from 'react-helmet';


function Promotions() {

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
  
    function getCurrentWeekRange() {
      const today = new Date();
    
      // Set the start of the week to the current Thursday
      const startOfCurrentWeek = new Date(today);
      startOfCurrentWeek.setDate(today.getDate() - (today.getDay() + 3 + 7) % 7);
    
      // Set the end of the week to the next Friday
      const endOfCurrentWeek = new Date(startOfCurrentWeek);
      endOfCurrentWeek.setDate(startOfCurrentWeek.getDate() + 8);
    
      const startDate = startOfCurrentWeek.toLocaleDateString();
      const endDate = endOfCurrentWeek.toLocaleDateString();
      const weekRange = `${startDate} - ${endDate}`;
      return weekRange;
    }
    
    const currentWeekRange = getCurrentWeekRange();
    
    
  
  return (
    <div className='promotions'>

<Helmet>
        <title>Shop This Week's Deals at Jericho Nursery</title>
        <meta name="description" content="Explore our collection of high-quality plants at Jericho Nursery. Find the perfect plants to beautify your garden or home." />
        <meta property="og:title" content="Shop High-Quality Plants at Jericho Nursery" />
        <meta property="og:description" content="Explore our collection of high-quality plants at Jericho Nursery. Find the perfect plants to beautify your garden or home." />
</Helmet>

        <div className='promotions_welcome'>
        <h1>New Product</h1>
        <br></br>
        </div>

        <div className='promotions_body'>
        <div className='promotions_body_header'>
      <h1>Promotions this Week</h1>
        </div>

        <div className='promotions_card_container'> 
        {promotionsData.map((item) => (
<div className='promotions_card'> 
                    <div className='promotions_card_top'>
                    <img src={item.img_url} className='promotions_card_img' alt=''/>
                    </div>
                    <div className='promotions_card_bottom'>
                        <h1>{item.name}</h1>   
                        <h3>{item.description}</h3>   
                        <h2>{item.price}</h2>
                        <h2>{item.discount}</h2>

                        <div className='promotions_card_overflow'>
                          <div>
                            <span>{item.tagline}</span>
                          </div> 
                            <span>{item.start_date}--</span>
                            <span>{item.expiration}</span>
                        </div>   
                    </div>
                  
</div>
            ))}
        </div>

    </div>





    </div>
  )
}

export default Promotions;