import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button } from '@material-ui/core';
import {editProfile, getInfo, getMEssages} from '../../../redux/actions/users'
import { Card } from 'antd';
import './Messages.scss'



const Messages = ({message}) => {
    useEffect(() => {
        getMEssages()
        
    }, [])
    
    
    
    if(!message) return <div class="loader"></div>
    
    return (

        <div className="messages">
           
         
 <div>
  <h2>Received</h2>
  <h2>Sent</h2>
     {message?.recibidosRev?.map(function(recibido){
         return ( 
            <Card style={{ width: 900 }}>     

  <NavLink to= {`/message/${recibido?._id}`} activeClassName="isActive" exact>
      <div className="cardcontent">
         <div> From: {recibido.sender.name}</div>
       <div>{recibido?.subject}</div>
         <div>{recibido?.createdAt}</div>
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



