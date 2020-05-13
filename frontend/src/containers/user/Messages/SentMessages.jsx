import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button } from '@material-ui/core';
import {editProfile, getInfo, getMEssages} from '../../../redux/actions/users'
import { Card } from 'antd';
import './Messages.scss'

const SendedMessages = ({message}) => {
   
    useEffect(() => {
        getMEssages()
        
    }, [])
    
    if(!message) return <div class="loader"></div>
    return (

        <div className="messages">
           
         
 <div>
  <h2>Received</h2>
     {message?.enviados?.map(function(enviado){
         return ( 
            <Card style={{ width: 900 }}>     

  <NavLink to= {`/message/${enviado?._id}`} activeClassName="isActive" exact>
      <div className="cardcontent">
         <div>To: {enviado?.recipient?.name}</div>
       <div>{enviado?.subject}</div>
         <div>{enviado?.createdAt}</div>
         </div>
    </NavLink>
    
    </Card>



)
})
}



 </div>
 

            
</div>
        
        )
    
   }
        
      

const mapStateToProps = ({message}) => ({ message:message.messages});

export default connect(mapStateToProps)  (SendedMessages) ;
