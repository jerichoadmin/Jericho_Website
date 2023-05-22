import React, {useState, useEffect, useContext} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';
import './EditSalesPost.css'
import AuthContext from '../../../../store/authContext';




function EditSalesPost() {

const [salesData, setSalesData] = useState([])
const { token } = useContext(AuthContext);

    useEffect(() => {
        axios
          .get("/sales")
          .then((res) => {
            setSalesData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
     
      const deleteSalesPost = (salestableid) => {
        axios
          .delete(`/newsalespost/${salestableid}`, {
            headers: {
              authorization: token,
            },
          })
          .then(() => {
            Swal.fire({
              title: "Sales Item has been Deleted",
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
      
      const deleteAllSalesPost = () => {
        axios
          .delete(`/deleteallsales`, {
            headers: {
              authorization: token,
            },
          })
          .then(() => {
            Swal.fire({
              title: "All Sale Items have been Deleted",
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
    <div className='mobile_edit_sales_item'>
    <table>
      <thead>
        <tr>
     
          <th>Name</th>
          <th>Edit Single Sale Item</th>
          <th>Delete Single Sale Item</th>
        </tr>
      </thead>
      <tbody>
        {salesData.map((item) => (
          <tr key={item.salestableid}>

  
          <td>{item.name}</td>
          <NavLink to={`singlesaleedit/${item.salestableid}`}>
          <td><button>Edit</button></td>
          </NavLink>
     
          <td><button onClick={() => deleteSalesPost(item.salestableid)}>Delete</button></td>
      </tr>
        ))}
      </tbody>
    </table>

    <div>
<button onClick={() => deleteAllSalesPost()}>Delete all Sales Posts</button>
</div>

    </div>
  )
}

export default EditSalesPost;


