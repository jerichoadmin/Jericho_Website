import React, { useState } from 'react';
import './Warranty.css'

const Warranty = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <button className='warranty_button' onClick={handleToggle}>Click to {isExpanded ? 'Collapse Warranty Info' : 'Expand Warranty Info'}</button>
      {isExpanded && (
        <div>
          <p className='warranty_paragraph'>Jericho offers a 30-day warrantee specifically for perennial trees, shrubs, roses, and perennials. We are confident that your success will increase substantially with the use of root stimulator and compost at the time of planting. Therefore, when you purchase these products with your plant, your guarantee will increase to 90 days.

We consider our policy honest and strive to serve our customers with the utmost integrity. Unfortunately, we do not control either nature or nurture once your guaranteed plant is outside of our care. Therefore, we will not warrantee any adverse conditions, including a lack of adequate watering, which we see most often.

Watering guidelines – in the heat of spring, summer, and early fall, water your new planting every day for 1 to 2 weeks depending on the weather. Then every other day for another 1 to 2 weeks depending on the weather. You can NOT overwater most new plantings.

To utilize our guarantee, you must provide proof of purchase (a Jericho cash register receipt) and the dead plant, not a photo but the actual plant.

Disclaimer: Our guarantee excludes clearance items, houseplants, and annuals. We offer a one-time replacement per plant. No cash or credit card refunds will be made under this policy. We will issue a Jericho credit for the purchase price of the plant.</p>
        
        </div>
      )}
    </div>
  );
};

export default Warranty;
