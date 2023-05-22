import React from 'react'
import './Aboutus.css'
import rickandjen from '../../Assets/rickandjen.png'
import bys from '../../Assets/BeforeYouSaySomething.jpg'
import StaffPictures from './StaffPictures'
import Service from '../../SVGs/Service'
import Knowledge from '../../SVGs/Knowledge'
import Quality from '../../SVGs/Quality'
import Selection from '../../SVGs/Selection'
import Quote from '../../SVGs/Quote'
import Quote2 from '../../SVGs/Quote2'



function Aboutus() {






  return (
    <div className='AboutUs'>
          <div className='aboutus_welcome'>
            <h1> About Us here at Jericho</h1>
            <p>
            A God given family owned company that offers an exceptional experience that hopes and works to exceed expectations through Quality, Selection, Service, and Knowledge.
             </p>       
        </div>
        


        <div className='aboutus_body_main'>

            <div className='aboutus_body_top'>
                <h1>Meet Our Team</h1>
            <StaffPictures />

        <p className='staff_p'>
        To our returning employees, we send warm greetings and a big thank you for joining us for another season. We truly appreciate your experience and loyalty. To our new employees, we hope to share with you the excitement of learning your job, meeting new people, and lots of fun working with plants, trees, and flowers.
      </p>

            </div>
       
        
     <div className='aboutus_body_mid'>
            <h1>About the Owners</h1>
            <div className='about_the_owners'>

            <img alt='rickandjen' src={rickandjen} className='rickandjen'/>

            <p>
            Gardening expert Richard Hobson and his wife Jennifer, Landscape Designer, have assembled an outstanding staff of experienced nursery professionals. They started Jericho Nursery in 2005.

            Along with a great staff, Jericho offers the city's most versatile selection of perennial and annual color, an outstanding variety of shade and ornamental trees, fruit trees, evergreens, flowering shrubs, grasses, soils, fertilizers, pesticides, garden art and all your seasonal garden needs.

            Jericho offers custom formulated selection of granular and soluble fertilizers, designed specifically for Albuquerque's alkaline soils. We also feature a tremendous plant pharmacy with a large selection of organic fertilizers, pesticides and herbicides as well as a wide range of non-organic safe products to combat just about anything one might find in their garden or lawn that doesn't belong there.

            We welcome hearing your ideas about improving our operations. Here's to a successful season and to you for doing your part to make Jericho the best nursery in Albuquerque, and making Albuquerque and the surrounding communities more beautiful!
                        </p>
    
            </div>
    
   
     </div>


            <div className='aboutus_body_bottom'>
                <h1>Where we Shine</h1>

        <div className='values'>
            <div className='values_column'>
            <h3>Quality</h3>
            <Quality className='values_svg'/>
            </div>
            <div className='values_column'>
            <h3>Selection</h3>
            <Selection />
            </div>
            <div className='values_column'>
            <h3>Service</h3>
            <Service />
            </div>
            <div className='values_column'>
            <h3>Knowledge</h3>
            <Knowledge className='knowledge'/>
            </div>
        </div>



<div className='bys'>
            <h2 className='bys_header'> This is a story about four people named Everybody, Somebody, Anybody and Nobody. </h2>
<div className='bys_pic_container'>
        <img src={bys} alt='' className='bys_pic'/>
</div>
<div>
            <p>
           There was an important job to be done and Everybody was sure that Somebody would do it.  Anybody could have done it, but Nobody did it.  Somebody got angry about that, because it was Everybody’s job.  Everybody thought Anybody could do it, but Nobody realized that Everybody wouldn’t do it.  It ended up that Everybody blamed Somebody when Nobody did what Anybody could have.
            </p>
</div>

</div>

            <h2 className='ct_h2'>Customer Testimonials</h2>

<div>
<p>
 Let me show you.
Let me get it for you.  
Where is your car?
</p>
</div>


<div className='ct_border'>
  <div className='quote_svg'>
  <Quote/>
  </div>

<p>
"I shop at Jericho Nursery for my gardening needs.  I have shopped there since I first arrived in the valley in 2005.  More recently, I also have the occasional opportunity to help a bit with the weekly newsletter, as was the case this week.  And, as usual, I shopped.

Why Jericho?  

I like it here!  The product selection is robust, the nursery is aesthetically pleasant AND artfully organized, which means that I can find what I need.  On the rare occasion that I don’t find what I need, I ask someone.  Anyone.  The answer?  “Let me get it for you.”

Sometimes, I know what I want and don’t know the common name.  “I bought it here last year.  It’s a really pretty hanging basket thing with pink flowers and round leaves.”  Not terribly specific, or scientific. Again, I ask someone.  The answer?  “Let me show you.”

On at least one occasion, I have visited without any specific need beyond a stroll through the current selection.  On one such visit, I found more than was likely to fit in my vehicle.  As I scratched my head over this predicament, I heard a voice.  “Where is your car?”  (Seriously?  Help to my CAR?!!)  So rare, and so appreciated.  

I have also wondered, “How do I treat this bug/fungus/disease?”   Easy fix.  Snip a sample, put it in a plastic bag, and bring it in for inspection and diagnosis.  This has NEVER failed!  I get a great product recommendation, advice about its application, and I depart with hope in my heart and a keen sense of relief.    

So, ask me again:  why Jericho?  Answer:  Why would I shop anywhere else?"

</p>
<div className='ct_border_bottom'>
<div className='quote2_svg'>
<Quote2/>
</div>
</div>
<span>
Sandy Rea, Gardening Angel fan
</span>
</div>
<div className='ct_border'>
  <div className='quote_svg'>
  <Quote/>
  </div>

<p>
"I shop at Jericho Nursery for my gardening needs.  I have shopped there since I first arrived in the valley in 2005.  More recently, I also have the occasional opportunity to help a bit with the weekly newsletter, as was the case this week.  And, as usual, I shopped.

Why Jericho?  

I like it here!  The product selection is robust, the nursery is aesthetically pleasant AND artfully organized, which means that I can find what I need.  On the rare occasion that I don’t find what I need, I ask someone.  Anyone.  The answer?  “Let me get it for you.”

Sometimes, I know what I want and don’t know the common name.  “I bought it here last year.  It’s a really pretty hanging basket thing with pink flowers and round leaves.”  Not terribly specific, or scientific. Again, I ask someone.  The answer?  “Let me show you.”

On at least one occasion, I have visited without any specific need beyond a stroll through the current selection.  On one such visit, I found more than was likely to fit in my vehicle.  As I scratched my head over this predicament, I heard a voice.  “Where is your car?”  (Seriously?  Help to my CAR?!!)  So rare, and so appreciated.  

I have also wondered, “How do I treat this bug/fungus/disease?”   Easy fix.  Snip a sample, put it in a plastic bag, and bring it in for inspection and diagnosis.  This has NEVER failed!  I get a great product recommendation, advice about its application, and I depart with hope in my heart and a keen sense of relief.    

So, ask me again:  why Jericho?  Answer:  Why would I shop anywhere else?"

</p>
<div className='ct_border_bottom'>
<div className='quote2_svg'>
<Quote2/>
</div>
</div>
<span>
New Customer, Gardening Angel fan
</span>
</div>
   

    
            </div>


        </div>
    </div>
  )
}

export default Aboutus