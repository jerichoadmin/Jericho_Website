import React from 'react'
import './NotFound.css'
import { NavLink } from 'react-router-dom'


function NotFound() {




  return (
    <div className='not_found'>
        <h2>The Page you are looking for no longer exists!</h2>
        <img src='https://images.unsplash.com/photo-1536094919620-d948a02d5085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' className='four_o'/>
            <NavLink to='/'>
            <button className='fof'>Take me Home</button>
            </NavLink>

    </div>
  )
}

export default NotFound