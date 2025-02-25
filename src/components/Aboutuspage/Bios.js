import React, { useState } from 'react';
import './Bios.css';

const Bios = () => {

  const [isExpandedAlfredo, setIsExpandedAlfredo] = useState(false);
  const [isExpandedKiana, setIsExpandedKiana] = useState(false);
  const [isExpandedScott, setIsExpandedScott] = useState(false);
  const [isExpandedChantelle, setIsExpandedChantelle] = useState(false);
  const [isExpandedKelly, setIsExpandedKelly] = useState(false);
  const [isExpandedHeather, setIsExpandedHeather] = useState(false);
  const [isExpandedDolly, setIsExpandedDolly] = useState(false);
  const [isExpandedIsaac, setIsExpandedIsaac] = useState(false);
  const [isExpandedKendra, setIsExpandedKendra] = useState(false);


  const toggleExpandAlfredo = () => {
    setIsExpandedAlfredo(!isExpandedAlfredo);
  };
  const toggleExpandKiana = () => {
    setIsExpandedKiana(!isExpandedKiana);
  };
  const toggleExpandScott = () => {
    setIsExpandedScott(!isExpandedScott);
  };
  const toggleExpandChantelle = () => {
    setIsExpandedChantelle(!isExpandedChantelle);
  };
  const toggleExpandKelly = () => {
    setIsExpandedKelly(!isExpandedKelly);
  };
  const toggleExpandHeather = () => {
    setIsExpandedHeather(!isExpandedHeather);
  };
  const toggleExpandDolly = () => {
    setIsExpandedDolly(!isExpandedDolly);
  };
  const toggleExpandIsaac = () => {
    setIsExpandedIsaac(!isExpandedIsaac);
  };
  const toggleExpandKendra = () => {
    setIsExpandedKendra(!isExpandedKendra);
  };

  return (
    <div className="bios">


      <div className="bio_single">
        <div className="bio_header">
          <button onClick={toggleExpandAlfredo}>
            {isExpandedAlfredo ? '-' : '+'}
          </button>
          <h2>Alfredo</h2>
        </div>
        {isExpandedAlfredo && (
          <p>
            Alfredo has worked at Jericho Nursery for over 15 years. He comes from working at other jobs
where he also took care of plants. In the summer, Alfredo waters sun-loving trees, shrubs, and
vines. In the winter, he loves to help with Christmas tree sales at Jericho Nursery. Alfredo is a
cheerful person and a dedicated employee. Alfredo is from Guadalajara, Mexico and goes back
to visit every year after the busy season at Jericho Nursery. Alfredo’s favorite plant is the rose.
His best plant advice is to know how to water. With many years of watering experience, he can
tell right away what needs more water and what needs less and plans out his day to care for
them all.
          </p>
        )}
      </div>

      <div className="bio_single">
        <div className="bio_header">
          <button onClick={toggleExpandKiana}>
            {isExpandedKiana ? '-' : '+'}
          </button>
          <h2>Kiana</h2>
        </div>
        {isExpandedKiana && (
          <p>
            Kiana is a veteran bedding house expert. She has been with us for over 6 years but works
seasonally. She grew up on a small farm in Idaho. Kiana has a bachelor’s degree in Sociology
and teaches equine life skills to women and children when she is not working at Jericho
Nursery. Kiana loves to cook and says eating well brings her great delight as she thinks about
food almost all day long. She loves working outdoors and learning new things. She loves having
the opportunity to provide excellent customer-focused service. Her favorite plant is the
artichoke. Her best plant advice is to just try it! The plants will forgive you if you fail, and you can
always learn, adjust, and try again.
          </p>
        )}
      </div>

      <div className="bio_single">
        <div className="bio_header">
          <button onClick={toggleExpandScott}>
            {isExpandedScott ? '-' : '+'}
          </button>
          <h2>Scott</h2>
        </div>
        {isExpandedScott && (
          <p>
            Scott has been part of the Jericho Nursery team for nearly two years. Prior to joining, he
enjoyed a rewarding career as a firefighter and paramedic in Portales, New Mexico. Specializing
in trees, Scott finds joy in his position, which he credits to the outstanding treatment he receives
from everyone he encounters at Jericho Nursery. The encouraging team and management
motivate him to stay committed to his job. As a tree lover, Scott’s favorite tree is the Desert
Willow. Scott&#39;s top tip for gardening enthusiasts is to always consider the sun&#39;s position before
planting anything!
          </p>
        )}
      </div>

      <div className="bio_single">
        <div className="bio_header">
          <button onClick={toggleExpandChantelle}>
            {isExpandedChantelle ? '-' : '+'}
          </button>
          <h2>Chantelle</h2>
        </div>
        {isExpandedChantelle && (
          <p>
           Chantelle is in her second season working at Jericho Nursery. Chantelle has a diverse
background with an undergraduate degree from the University of New Mexico in finance, a
master’s degree in accounting, and is a Certified Public Accountant. But with this technical
knowledge, she has switched paths and has chosen to work in an outdoor environment. With
this change, she decided to work at her family farm in the Fall and Jericho Nursery in the
Spring. She is excited to have the opportunity to work with plants year-round, and it gives her so
much satisfaction. There is never a stressful day at Jericho Nursery, and she feels it is a very
therapeutic environment. Chantelle is a mother to a wonderful 10-year-old son, who is the light
of her life. She has 2 cute dogs, 1 cat and too many plants to count. Chantelle loves to garden,
farm, and give care and love to living things, as she feels they reciprocate so much more love
back than given. Chantelle’s favorite plant is the New Mexico Chile plant! Her best plant advice
would be to have faith and trust plants will do their thing. Experience the miracle of watching
something grow. There is no greater faith than one of a farmer and we can all grow things to
help develop this trust.
          </p>
        )}
      </div>


      <div className="bio_single">
        <div className="bio_header">
          <button onClick={toggleExpandKelly}>
            {isExpandedKelly ? '-' : '+'}
          </button>
          <h2>Kelly</h2>
        </div>
        {isExpandedKelly && (
          <p>
           Kelly is a new cashier to our team but is not new to the job. She has over 36 years of
experience in retail and customer service. She grew up in Illinois but moved to New Mexico
when she was 16. Kelly loves cats, dogs, and all animals. She loves the outdoors, but not when
it is hot or when the wind is blowing. She also loves spending time listening to music. She
enjoys Jericho Nursery because everyone she works with is fun and she gets to learn about
plants. Her favorite plant is the African Violet.
          </p>
        )}
      </div>




      <div className="bio_single">
        <div className="bio_header">
          <button onClick={toggleExpandDolly}>
            {isExpandedDolly ? '-' : '+'}
          </button>
          <h2>Dolly</h2>
        </div>
        {isExpandedDolly && (
          <p>
           Dolly is a wonderful bookkeeper and administrator and is fundamental in keeping everything
together at Jericho Nursery. Dolly has a background doing secretarial work and has worked for
Jericho Nursery since 2014. She grew up on a farm and loves to garden at home.  Dolly is a
writer and has completed a novel with a new one on the way. She is a mom, wife, and grandma
with 13 grandchildren! She loves working at Jericho Nursery because of the owners, who she
says are amazing, caring, generous, wonderful people and employers. Her favorite plant is the
rose. Her best advice is to remember that plants are living organisms and need attention to
thrive. Take good care of them and they will reward you with beauty.
          </p>
        )}
      </div>

      <div className="bio_single">
        <div className="bio_header">
          <button onClick={toggleExpandIsaac}>
            {isExpandedIsaac ? '-' : '+'}
          </button>
          <h2>Isaac</h2>
        </div>
        {isExpandedIsaac && (
          <p>
          Isaac joins our team this year after recently moving to New Mexico from California. Isaac
delivers special orders and plants them for Jericho Nursery customers. Isaac has a background
in writing music, making art, and he loves to cook and spends time gardening. Isaac LOVES
horror movies and reading. He joins us with a background in teaching and was a teacher for
grades K-12. In his early 20s he was in a rock band that toured around the globe with Black
Sabbath, Pantera, Disturbed, and Queens of the Stone Age. He loves working for Jericho
Nursery because he gets to talk about plants with others and works with plants all day and loves
to share the knowledge he has with others. His best advice is for us all to remember that plants
are the reason that we are alive. We have a symbiotic relationship with them.
          </p>
        )}
      </div>

      <div className="bio_single">
        <div className="bio_header">
          <button onClick={toggleExpandKendra}>
            {isExpandedKendra ? '-' : '+'}
          </button>
          <h2>Kendra</h2>
        </div>
        {isExpandedKendra && (
          <p>
       Kendra is new to Jericho Nursery and has found her place working in the yard assisting
customers with the perfect selection of trees, shrubs, and other plants. She grew up in Las
Cruces, NM, and recently moved to Albuquerque with her partner. She is a third generation New
Mexican and graduated from New Mexico State University with an undergraduate degree in
German language. Kendra has a talent for roller-skating and spends her free time with her pets.
She loves working at Jericho Nursery because of the care that the owners and management
give to their employees and customers. She feels she has never worked in this type of
environment before. She feels respect for hard work is always given and has learned so much
from other employees that have been around for a while. Her favorite plant is the Saguaro. Her
best plant advice would be to pinch Snapdragons to open their mouths and notice how their
seed pods look like little skulls.
          </p>
        )}
      </div>

    </div>
  );
};

export default Bios;
