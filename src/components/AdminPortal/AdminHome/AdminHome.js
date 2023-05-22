import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'
import AuthContext from '../../../store/authContext'
import './AdminHome.css'

function AdminHome() {

    const authCtx = useContext(AuthContext)

    const logout = () => {
      Swal.fire({
        title: "You have been logged out",
        confirmButtonColor: "rgb(210, 161, 12)",
        customClass: "buttonalert",
        confirmButtonText: "Ok"
      })
    authCtx.logout()
    }

    
  return (
    <div className='admin_home'>
      <div className="admin_header">
      <h1>-Welcome to the Jericho Admin Portal -</h1>
      </div>

      <p>What would you like to do?</p>

      <div className='admin_options'>

      <NavLink to='/newblogpost'>
      <button>Create a New Blog Post</button>
      </NavLink>
      <NavLink to='/editpost'>
      <button>Edit/Delete a Blog Post</button>
      </NavLink>
      <NavLink to='/newsalespost'>
      <button>Create a Sales Post</button>
      </NavLink>
      <NavLink to='/editsalespost'>
      <button>Edit/Delete/Wipe Sales Posts</button>
      </NavLink>
      <NavLink to='/newgalleryimg'>
      <button>Add Galley Img</button>
      </NavLink>
      <NavLink to='/deletegalleryimg'>
        <button>Delete Gallery Img</button>
      </NavLink>

      </div>

      <div className="logout">
    <button className='logout_btn' onClick={() => logout()} >Logout</button>
    </div>


    </div>
  )
}

export default AdminHome