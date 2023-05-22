import React, {useState, useEffect, useContext} from 'react'
import './DeleteGalleryImg.css'
import axios from 'axios';
import Swal from 'sweetalert2';
import AuthContext from '../../../store/authContext';


function DeleteGalleryImg() {

const [galleryData, setGalleryData] = useState([])
const { token } = useContext(AuthContext);

useEffect(() => {
  axios
    .get(`/gallery`)
    .then((res) => {
      setGalleryData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);


      const deleteBlogPost = (gallerytableid) => {
        axios
          .delete(`/deletegalleryimg/${gallerytableid}`, {
            headers: {
              authorization: token,
            },
          })
          .then(() => {
            Swal.fire({
              title: "Gallery Img has been Deleted",
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
          <tr key={item.blogtableid}>
          <td>{item.gallerytableid}</td>
          <td>{item.name}</td>
          <td>{item.img_url}</td>     
          <td><button onClick={() => deleteBlogPost(item.gallerytableid)}>Delete</button></td>
      </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default DeleteGalleryImg;


