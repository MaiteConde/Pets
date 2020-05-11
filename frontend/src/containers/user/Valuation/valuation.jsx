import React, { useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {  notification } from 'antd';
import { getInfoId, getInfo, giveValuation } from '../../../redux/actions/users';
import { useLocation } from 'react-router-dom'
import { Rate } from 'antd';

const ValuForm = (valuation) => {
    let location = useLocation();
    const id = location.pathname.replace('/user/','')
    const handleSubmit = event =>{
        event.preventDefault();
        const valuation ={
            points: localStorage.getItem('index'),
            valu:event.target.valu.value,
            
        }
        giveValuation(valuation, id).then( res =>
            console.log(Rate),
            notification.success({message:'Thank you! Your opinion is important'}))
            
            .catch((error)=>{
                console.error(error);
                
            })
        }
        return (
            <div className="registerContainer">
    
      <form onSubmit={handleSubmit}>
          <h2>Your Valution:</h2>
          <TextField type="text" label="Valuation" name="valu"/>
          <Rate  
          onChange={(index) => localStorage.setItem('index', `${index}`)}
         />
          <Button type="submit" variant="contained" color="primary">
              Send
          </Button>
      </form>
  </div>
  )
   }

   export default (ValuForm)