import React, { useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {  notification } from 'antd';
import { getInfoId, getInfo, giveValuation } from '../../../redux/actions/users';
import { useLocation } from 'react-router-dom'

const ValuForm = (valuation) => {
    let location = useLocation();
    const id = location.pathname.replace('/valuation/','')
    const handleSubmit = event =>{
      event.preventDefault();
      const valuation ={
          text:event.target.text.value,
         
      }
  giveValuation(id, valuation).then( 
    notification.success({message:'Thank you! Your opinion is important'}))
  
  .catch((error)=>{
     console.error(error);
              
  })
  }
  return (
  <div className="registerContainer">
      <form onSubmit={handleSubmit}>
          <h2>Your Valution:</h2>
          <TextField type="text" label="text" name="text"/>
       
          <Button type="submit" variant="contained" color="primary">
              Send
          </Button>
      </form>
  </div>
  )
   }
   export default (ValuForm)