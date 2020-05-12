import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button } from '@material-ui/core';
import {editProfile, getInfo, getMEssages} from '../../../redux/actions/users'
import { Card } from 'antd';
import './Messages.scss'


const { Meta } = Card;

const Messages = ({message}) => {
    const show = 'false'
   
   const change = () =>
      {show.replace('false', 'true')}
   
  

    useEffect(() => {
        getMEssages()
        
    }, [])
    
    
    
    if(!message) return <div class="loader"></div>
    return (

        <div className="messages">
           
         
 <div>
  <h2>Received</h2>
     {message?.recibidos?.map(function(recibido){
         return ( 
            <Card style={{ width: 900 }}>     

  <NavLink to= {`/message/${recibido?._id}`} activeClassName="isActive" exact>
      <div className="cardcontent">
         <div>{recibido.sender.name}</div>
       <div>{recibido?.subject}</div>
         <div>{recibido?.createdAt}</div>
         </div>
    </NavLink>
    
    </Card>



)
})
}

{<Button  class="bubbly-button"  onClick={ () => show.replace('false', 'true')} ></Button>
}

 </div>
 {show == 'true'?
 <div>

  <h2>Send</h2>

  
     {message?.enviados?.map(function(enviado){
         return ( 
             <div className="received">
      <h3>{enviado.sender.name}</h3>

  <NavLink to= {`/message/${enviado?._id}`} activeClassName="isActive" exact>
       <p>{enviado?.message}</p>
         <p>{enviado?.createdAt}</p>
    </NavLink>
    
 </div>





)
})

}
 </div>: ''
 }
            
</div>
        
        )}
        
      

const mapStateToProps = ({message}) => ({ message:message.messages});

export default connect(mapStateToProps)  (Messages) ;



