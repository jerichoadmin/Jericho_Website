import React from 'react';
import './StaffPictures.css'




function StaffPictures() {

    const staff_pics = [
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/staff_photos/Richard-1.jpg",
            name: 'Richard',
            position: 'Co-Owner'
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/staff_photos/Jennifer.jpg",
            name: 'Jennifer',
            position: 'Co-Owner'
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/staff_photos/Jesse.png",
            name: 'Jesse',
            position: 'Manager'
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/staff_photos/gary.jpg",
            name: 'Gary',
            position: 'Gardening Angel'
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/staff_photos/alfredo.jpg",
            name: 'Alfredo',
            position: 'Gardening Angel'
            
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/staff_photos/download.jpg",
            name: 'Pam',
            position: 'Gardening Angel'
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/staff_photos/kiana.jpg",
            name: 'Kiana',
            position: 'Gardening Angel'
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/staff_photos/scott.png",
            name: 'Scott',
            position: 'Gardening Angel'
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/staff_photos/Chantelle.png",
            name: 'Chantelle',
            position: 'Gardening Angel'
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/staff_photos/Andie.jpg",
            name: 'Andie',
            position: 'Gardening Angel'
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/staff_photos/Kelly.jpg",
            name: 'Kelly',
            position: 'Gardening Angel'
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/staff_photos/Anna%20Lisa.jpg",
            name: 'Anna Lisa',
            position: 'Gardening Angel'
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/staff_photos/Heather.jpg",
            name: 'Heather',
            position: 'Gardening Angel'
        },
     
    ]


  return (
    <div className="staff_pics_grid">
      {staff_pics.map((picture, index) => (
        <div key={index} className="staff_pic">
          <img src={picture.src} alt='Gardening Angel, Jericho Nursery' className='staff_pics' />
          <h6>{picture.name}</h6>
          <span>{picture.position}</span>
        </div>
      ))}



     
    </div>
  );
}

export default StaffPictures;
