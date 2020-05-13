import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './LittleMenu.scss'




const Menu = ({cats, provincias}) => {
      
    return <menu className="littlemenu" >
 
                   <NavLink to='/messages' activeClassName="isActive" exact>Received</NavLink>
                   <NavLink to='/sentmessages' activeClassName="isActive" exact>Sent</NavLink>
   
                   
       </menu>
}
export default  Menu;
