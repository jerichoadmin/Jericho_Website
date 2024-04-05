import React, {useState, useEffect, useContext} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';
import './EditPromotionsPost.css'
import AuthContext from '../../../../store/authContext';




function EditPromotionsPost() {

const [promotionsData, setPromotionsData] = useState([])
const { token } = useContext(AuthContext);

    useEffect(() => {
        axios
          .get("https://jericho-server-eb9k.onrender.com/promotions")
          .then((res) => {
            setPromotionsData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
     
      const deletePromotionsPost = (promotionstableid) => {
        axios
          .delete(`https://jericho-server-eb9k.onrender.com/newpromotionspost/${promotionstableid}`, {
            headers: {
              authorization: token,
            },
          })
          .then(() => {
            Swal.fire({
              title: "Promotion Item has been Deleted",
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
    <div className='edit_sales_item'>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>

          <th>Delete Single Sale Item</th>
        </tr>
      </thead>
      <tbody>
        {promotionsData.map((item) => (
          <tr key={item.salestableid}>

          <td>{item.promotionstableid}</td>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>

     
          <td><button onClick={() => deletePromotionsPost(item.promotionstableid)}>Delete</button></td>
      </tr>
        ))}
      </tbody>
    </table>

<div>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
</div>

    </div>
  )
}

export default EditPromotionsPost;


