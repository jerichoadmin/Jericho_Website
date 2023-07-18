import React from 'react'
import './Brands.css'
import { Helmet } from 'react-helmet';
import suregreen from '../../Assets/suregreen.png'



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
        {
          id: 4,
          title: 'Black Gold',
          description: `"Since 1985, Black Gold® brand potting soils and garden amendments have been available at fine garden centers and have gained a loyal customer following nationwide. All Black Gold® products are professionally formulated to ensure gardening success, and many have been certified by the Mulch & Soil Council, which assures they are made from the highest quality ingredients."`,
          img: 'https://blackgold.bz/wp-content/uploads/sites/3/2022/05/bgLogo2018-1.png',
        },
        {
          id: 5,
          title: 'Fox Farm',
          description: `"FoxFarm is passionate about producing the finest soil mixes, fertilizers, and micro-brewed liquid plant foods. Our formulas are greenhouse tested to ensure quality and consistency. FoxFarm takes great pride in delivering uncompromising quality and supreme customer service. We have supplied this consistency to our customers since 1984."`,
          img: 'https://foxfarm.com/wp-content/uploads/2019/08/logo-big.png',
        },
        {
          id: 6,
          title: 'Green Leaf Nursery Company',
          description: `"Our company is committed to your success. The partnership we share has been and always will be extremely important to us. From all of us at Greenleaf Nursery Company, thank you for your business."`,
          img: 'https://www.greenleafnursery.com/image/Logo.png',
        },
        {
          id: 7,
          title: 'Fertilome/Hi-Yield',
          description: `"The ferti•lome® line of products is highly merchandised with attractive, easy to understand labeling, point of purchase sales aids and a Co-op advertising fund to promote products and the brand in local neighborhoods. ferti•lome® products compensate dealers for the personal selling necessary to properly solve consumers’ lawn and garden problems."`,
          img: 'https://www.fertilome.com/wp-content/images/logo-fertilome-green.png',
        },
        {
          id: 8,
          title: 'Soil Mender',
          description: `"At Soil Mender, we have the tools and technologies to help growers address old and new challenges to yield and quality potential.  From our long-standing solutions in soil heath into our newer solutions in crop nutrition and protection, Soil Mender offers unique tools that help realize the genetic potential of a crop."`,
          img: 'https://static.wixstatic.com/media/636f36_7b275ada5963451783c4b426fa4727bb~mv2.png/v1/fill/w_224,h_122,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/636f36_7b275ada5963451783c4b426fa4727bb~mv2.png',
        },
        {
          id: 9,
          title: 'Sure Green',
          description: `"From very humble beginnings Spra-Green grew to become the choice of local and regional farmers in New Mexico, due to their top quality fertilizers, custom formulating capabilities, value pricing and customer service."`,
          img: suregreen,
        },
        {
          id: 10,
          title: 'Trees of Corrales',
          description: `"Trees of Corrales is a private, family owned wholesale nursery and growing operation that sells exclusively to the nursery and landscape industry. Trees of Corrales sells exclusively to Retail Nurseries and Landscape Distribution Centers."`,
          img: 'https://www.treesofcorrales.com/wp-content/uploads/2021/04/toc_logo_2.png',
        },
        {
          id: 11,
          title: 'Everde',
          description: `"Everde Growers is a leader within the horticulture industry with a true coast-to-coast footprint consisting of over 6,700 acres in production encompassing 15 farm locations throughout Texas, Florida, California, and Oregon. Our superior growing methods and pruning practices ensure consistent high quality and availability. Our inventory mix includes trees, shrubs, perennials, palms, grasses, succulents, tropicals, fruit, and more."`,
          img: 'https://everde.com/wp-content/uploads/2021/08/Registered-Everde-Logo-with-Tagline-01-150-1.png',
        },
        {
          id: 12,
          title: 'Montery',
          description: `"Monterey Lawn and Garden Products is  based in Fresno, in the heart of California’s agricultural region where we first emerged in 1963 as Monterey Ag Resources. Twenty-five years later, we established Monterey Lawn and Garden with the goal of offering home gardeners the same professional grade technology available to the ag industry."`,
          img: 'https://www.montereylawngarden.com/wp-content/uploads/2018/03/MontereyLawnGardenLogo_341-x-138.png',
        },
      ];




  return (
    <div className='Brands'>


<Helmet>
        <title>Brands Carried by Jericho Nursery</title>
        <meta name="description" content="Discover the top-quality brands carried by Jericho Nursery. Explore a wide range of trusted brands for all your gardening and landscaping needs." />
        <meta property="og:title" content="Brands Carried by Jericho Nursery" />
        <meta property="og:description" content="Discover the top-quality brands carried by Jericho Nursery. Explore a wide range of trusted brands for all your gardening and landscaping needs." />
       
</Helmet>
        

        <div className='brands_welcome'>
            <h1>Brands we Carry</h1>
            <p>So you can do a little virtual window shopping </p>
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
            <img src={item.img} alt="Jericho Nursery Brands" className='brand_img'/>
          </div>
        ))}
      </div>
  
    </div>
  
    </div>

     


    </div>
  )
}

export default Brands