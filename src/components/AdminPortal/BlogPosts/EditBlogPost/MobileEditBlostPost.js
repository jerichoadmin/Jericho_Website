import React, {useState, useEffect, useContext} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';
import './EditBlogPost.css'
import AuthContext from '../../../../store/authContext';




function MobileEditBlogPost() {

const [blogData, setBlogData] = useState([])
const [offset, setOffset] = useState(0)
const { token } = useContext(AuthContext);

useEffect(() => {
  axios
    .get(`/blog`)
    .then((res) => {
      setBlogData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, [offset]);


      const deleteBlogPost = (blogtableid) => {
        axios
          .delete(`/newblogpost/${blogtableid}`, {
            headers: {
              authorization: token,
            },
          })
          .then(() => {
            Swal.fire({
              title: "Blog Post has been Deleted",
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
    <div className='mobile_edit_post'>

    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Edit Post</th>
          <th>Delete Post</th>
        </tr>
      </thead>
      <tbody>
        {blogData.map((item) => (
          <tr key={item.blogtableid}>

      
          <td>{item.title}</td>
          <td>{item.date}</td>

          <NavLink to={`singleblogedit/${item.blogtableid}`}>
          <td><button>Edit</button></td>
          </NavLink>
     
          <td><button onClick={() => deleteBlogPost(item.blogtableid)}>Delete</button></td>
      </tr>
        ))}
      </tbody>
    </table>


    </div>
  )
}

export default MobileEditBlogPost;


