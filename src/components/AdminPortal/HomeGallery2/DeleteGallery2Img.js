import React, {useState, useEffect, useContext} from 'react'
import './DeleteGallery2Img.css'
import axios from 'axios';
import Swal from 'sweetalert2';
import AuthContext from '../../../store/authContext';


function DeleteGallery2Img() {

const [galleryData, setGalleryData] = useState([])
const { token } = useContext(AuthContext);

useEffect(() => {
  axios
    .get(`https://jericho-server-eb9k.onrender.com/gallery2`)
    .then((res) => {
      setGalleryData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

console.log(galleryData)


      const deleteBlogPost = (gallerytable2id) => {
        axios
          .delete(`https://jericho-server-eb9k.onrender.com/deletegallery2img/${gallerytable2id}`, {
            headers: {
              authorization: token,
            },
          })
          .then(() => {
            Swal.fire({
              title: "Gallery 2 Img has been Deleted",
              confirmButtonColor: "rgb(210, 161, 12)",
              customClass: "buttonalert",
              confirmButtonText: "OK", 
            })
            .finally(()=>window.location.reload(false))
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
    


  return (
    <div className='delete_img'>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Img_URL</th>
        </tr>
      </thead>
      <tbody>
        {galleryData.map((item) => (
           <tr key={item.gallerytable2id}>
          <td>{item.gallerytable2id}</td>
          <td>{item.name}</td>
          <td>{item.img_url}</td>     
          <td><button onClick={() => deleteBlogPost(item.gallerytable2id)}>Delete</button></td>
      </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default DeleteGallery2Img;


