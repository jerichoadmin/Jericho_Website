import React from 'react';
import './StaffPictures.css'




function StaffPictures() {

    const staff_pics = [
        {
            src: "https://drive.google.com/uc?export=view&id=1tT3gvk-PnmYUhK5BDDC9nu76fqBsWI39",
            name: 'Richard',
            position: 'Co-Owner'
        },
        {
            src: "https://drive.google.com/uc?export=view&id=1ddNuoNew6_mwEK9mqy4XDjPATDZvKWuq",
            name: 'Jennifer',
            position: 'Co-Owner'
        },
        {
            src: "https://drive.google.com/uc?export=view&id=1X_7he1xEXee8LSNr9v1XybbPyuJ6MQ6E",
            name: 'Jesse',
            position: 'Manager'
        },
        {
            src: "https://drive.google.com/uc?export=view&id=1U4XvHpdhcD5_merfrckXvZIhbkLkkf9_",
            name: 'Wendy',
            position: 'Front-End Manager'
        },
        {
            src: "https://drive.google.com/uc?export=view&id=15dF-elxEMFnwr0ZWA1eCXtOyGdsaWVr0",
            name: 'Gary',
            position: 'Gardening Angel'
        },
        {
            src: "https://drive.google.com/uc?export=view&id=1wFLm16pOgRN6NW64WlMOXRFJvwEKRB8y",
            name: 'Alfredo',
            position: 'Gardening Angel'
            
        },
        {
            src: "https://drive.google.com/uc?export=view&id=1iEBgB8sO1pD6so1qt1kzTBY9VgD37fUR",
            name: 'Pam',
            position: 'Gardening Angel'
        },
        {
            src: "https://drive.google.com/uc?export=view&id=1dhYMbNdPa4T5R58PpPsOQU6jU8lMAWOc",
            name: 'Scott',
            position: 'Gardening Angel'
        },
        {
            src: "https://drive.google.com/uc?export=view&id=1gqJj86Aw9z93okvoKSBvKsIwPr-XzGJH",
            name: 'Kiana',
            position: 'Gardening Angel'
        },
        {
            src: "https://drive.google.com/uc?export=view&id=1ZhJAEtxoDnOAD7BXf2b7DxSab5icOhnx",
            name: 'Mesha',
            position: 'Gardening Angel'
        },
        {
            src: "https://drive.google.com/uc?export=view&id=1oI9LbUrcXXzuIsf3nvo88bpixDUK-Xnj",
            name: 'Chantelle',
            position: 'Gardening Angel'
        },
    
    ]


  return (
    <div className="staff_pics_grid">
      {staff_pics.map((picture, index) => (
        <div key={index} className="staff_pic">
          <img src={picture.src} alt={picture.caption} className='staff_pics'/>
          <h6>{picture.name}</h6>
          <span>{picture.position}</span>
        </div>
      ))}



     
    </div>
  );
}

export default StaffPictures;
