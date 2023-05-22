import React from 'react'
import './Brands.css'



function Brands() {

    const brandData = [
        {
          id: 1,
          title: 'Gourment Grown',
          description: `"All of our crops are planted and harvested by hand in Fallbrook, CA. Each pot is hand spaced allwoing for optimum air and light circulation and fully acclimated in our mild, mediterranean like climate until ready for harvest, narutally"`,
          img: 'https://s6r2y5.media.zestyio.com/GourmetGrown_Logo.jpg?width=310&height=200&fit=bounds',
        },
        {
          id: 2,
          title: 'Monrovia',
          description: `"For nearly a century, we have poured our passion and expertise into each plant we grow, so that the next generation of plants will be stronger for the next generation of humans."`,
          img: 'https://i2.wp.com/odonals.com/wp-content/uploads/2022/06/Monrovia-Logo2-1.jpg?resize=500%2C500&ssl=1',
        },
        {
          id: 3,
          title: 'Bonide',
          description: `"We offer weed, Insect, disease and animal controls in a variety of formulations and applications to meet any gardener’s needs. Sold in national, regional and local home centers, hardware stores, mass merchants and garden centers across America BONIDE is a recognized and respected industry leader."`,
          img: 'https://149502146.v2.pressablecdn.com/wp-content/uploads/2013/08/bonide-logo.jpg',
        },
    
      ];




  return (
    <div className='Brands'>
        

        <div className='brands_welcome'>
            <h1>Brands we Carry</h1>
            <p>So you can do a little window shopping with no online store</p>
        </div>

        <div className='brands_body_main'>
        <div className="card-container">
      <div className="cards">
        {brandData.map((item) => (
          <div className="card" key={item.id}>
            <div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
            <img src={item.img} alt="" className='brand_img'/>
          </div>
        ))}
      </div>
  
    </div>
  
    </div>

     


    </div>
  )
}

export default Brands