import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './LittleMenu.scss'




const Menu = ({cats, provincias}) => {
      
    return <menu  >
        <div>
            <ul>
                <li> <NavLink to='/messages' activeClassName="isActive" exact>Received</NavLink></li>
                <li>  <NavLink to='/sentmessages' activeClassName="isActive" exact>Sent</NavLink></li>
            </ul>
            </div>
                 
   
                   
       </menu>
}
export default  Menu;
