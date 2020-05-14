import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button} from '@material-ui/core';
import {editProfile, getInfo, getMEssages} from '../../../redux/actions/users'
import { Card } from 'antd';
import Menu from './LittleMenu'
import './Messages.scss'



const Messages = ({message}) => {
    useEffect(() => {
        getMEssages()
        
    }, [])
    
    
    
    if(!message) return <div class="loader"></div>
    
    if(message?.recibidosRev?.length <= 0) return <div className="extramenu">
    
<Menu/>
    <div className="empty">

<div className="MenuMess">

    <h3>You don't have any messages</h3></div>
<div>
        <img src="https://image.flaticon.com/icons/png/512/70/70562.png" alt=""/></div>

        {console.log(message)}
    </div>
    </div>
   
   return (
       
       <div className="messages">
           <Menu/>
  
 <div className ="divcard">
     {message?.recibidosRev?.map(function(recibido){
         
         return ( 
            <Card >     

  <NavLink to= {`/message/${recibido?._id}`} activeClassName="isActive" exact>
      <div className="cardcontent">
         <div> From: {recibido.sender.name}</div>
       <div>{recibido?.subject}</div>
         <div className="daate">{recibido?.createdAt}</div>
         </div>
    </NavLink>
    
    </Card>



)
})
}



 </div>
 

            
</div>
        
        )}
        
      

const mapStateToProps = ({message}) => ({ message:message.messages});

export default connect(mapStateToProps)  (Messages) ;



