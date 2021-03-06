import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import 'moment-timezone';
import { Button } from '@material-ui/core';
import {editProfile, getInfo, getMEssages} from '../../../redux/actions/users'
import { Card } from 'antd';
import Menu from './LittleMenu'

import './Messages.scss'

const SendedMessages = ({message}) => {
   
    useEffect(() => {
        getMEssages()
        
    }, [])
    
    if(!message) return <div class="loader"></div>
    
    if(message?.enviadosRev <= 0) return <div className="empty">

    <Menu/>
    <div>
        <h3>You don't have any messages</h3></div>
    <div>
            <img src="https://image.flaticon.com/icons/png/512/70/70562.png" alt=""/></div>
            {console.log(message)}
        </div>

    return (

        <div className="messages">
                      <Menu/>

         
 <div className ="divcard">

     {message?.enviadosRev?.map(function(enviado){

         return ( 
            <Card >     

  <NavLink to= {`/message/${enviado?._id}`} activeClassName="isActive" exact>
      <div className="cardcontent">
         <div>To: {enviado?.recipient?.name}</div>
       <div>{enviado?.subject}</div>
         <div className="daate"> <Moment format="YYYY/MM/DD">{enviado?.createdAt}</Moment></div>
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
