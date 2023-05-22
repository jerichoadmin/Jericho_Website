import React, {useState, useEffect, useContext} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';
import './EditBlogPost.css'
import AuthContext from '../../../../store/authContext';




function EditBlogPost() {

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
    <div className='edit_post'>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Date</th>
          <th>Intro</th>
          <th>Body_1</th>
          <th>Edit Post</th>
          <th>Delete Post</th>
        </tr>
      </thead>
      <tbody>
        {blogData.map((item) => (
          <tr key={item.blogtableid}>
          <td>{item.blogtableid}</td>
          <td>{item.title}</td>
          <td>{item.date}</td>
          <td>{item.intro}</td>
          <td>{item.body_1}</td>
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

export default EditBlogPost


