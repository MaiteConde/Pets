import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { getInfoId, getInfo, clearData, giveValuation } from '../../../redux/actions/users';
import {getCatsUser } from '../../../redux/actions/cats';
import './userProfile.scss'
import Button from '@material-ui/core/Button';

import { getDogsUser } from '../../../redux/actions/dogs';
import { Card } from 'antd';
import { Collapse } from 'antd';
import ValuForm from '../Valuation/valuation';
import { Rate } from 'antd';


const User = ({ userId, cats, dogs}) => {

  const { Panel } = Collapse;
  function callback(key) {
    console.log(key);
  }
  let location = useLocation();
  const id = location.pathname.replace('/user/','')
  let show = false
  useEffect(() => {
    
    getInfoId(id)
    getCatsUser(id)
    
    getDogsUser(id)
    // return () => {clearData()}
    
  }, [])
  if(!userId) return  <div class="loader"></div>
  
  const total= userId?.reduce((prev, cur) => prev + cur.valuations.reduce((prev, cur) => prev + cur.points,0),0)/ userId.map((user=>user.valuations.reduce((prev, cur) => prev + 1,0).toFixed(1)))
  const totalFixed = total.toFixed(1)
  return (
    <div> 
          { 
     userId?.map(function(user) {
       const image = `http://localhost:3000/images/dogs/${user?.image_path}`;
       
       return ( 
         
         <div className="user" key={user._id}>
         
         
    
        <img  className="profilePhoto" src={image} alt=""/>
    
     <h2>{user.name}</h2>
    <p>{user.email}</p>
         <p>{user.userInfo}</p>

  </div>
  
  )

            })
        }
<Button onClick={() => show = true}>click!</Button>
<Button onClick = {() =>console.log(show) }>click!</Button>


         {show == true? 
        <div className="catDog">
                <div className="catP">
            <h2>Cat publications</h2>

                { cats?.map(function(cato) {
                  
                  
                  return  <div className="caat">
                  <Collapse defaultActiveKey={['1']} onChange={callback}>
                  
                  <Panel header= {cato.name} key="0">
                      <NavLink to= {`/cat/${cato._id}`} activeClassName="isActive" exact>
                    <img alt="example" src={`http://localhost:3000/images/cats/${cato.image_path}`} />
                    </NavLink>
                  </Panel>
                </Collapse> 
                </div>
                })}

                </div>
                <div className="dogP">
                <h2>Dog publications</h2>

                { dogs?.map(function(dogo) {
                    return  <Collapse defaultActiveKey={['1']} onChange={callback}>
                  
                    <Panel header= {dogo.name} key="0">
                        <NavLink to= {`/dog/${dogo._id}`} activeClassName="isActive" exact>
                      <img alt="example" src={`http://localhost:3000/images/dogs/${dogo.image_path}`} />
                      </NavLink>
                    </Panel>
                  </Collapse> 
                })}

                          
                </div>
                </div>: ''}
                <Rate allowHalf disabled value = {userId?.reduce((prev, cur) => prev + cur?.valuations?.reduce((prev, cur) => prev + cur?.points,0),0)/ userId.map((user=>user?.valuations?.reduce((prev, cur) => prev + 1,0)))}/>
             
             {totalFixed >= 0?
              <p> {totalFixed} de 5</p>: ''

}



<h2 className="t">valuations:</h2>
                 
                  {userId?.map(function(user) {
                    return ( 
                      user?.valuations?.reverse().map(valuation => {
                        return ( 
                          <div className="valu">
                          <h3>{valuation.user.name}</h3>
                        <p>{valuation.valu}</p>
                        
                        <h5>{valuation.date}</h5>
                     <Rate disabled value = {valuation?.points}/>
                          </div>
                        )
                       })
                     )
                  })}

<ValuForm/>
        </div>
    )
    
}


const mapStateToProps = ({user, cat, dog}) => ({userId:user?.userId, cats:cat.cats?.cats, dogs:dog.dogs?.dogs});

export default connect(mapStateToProps)  (User);