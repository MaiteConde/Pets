import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { getInfoId, getInfo, clearData, giveValuation } from '../../../redux/actions/users';
import {getCatsUser } from '../../../redux/actions/cats';
import './userProfile.scss'
import Moment from 'react-moment';
import 'moment-timezone';
import { getDogsUser } from '../../../redux/actions/dogs';
import { Card } from 'antd';
import { Collapse } from 'antd';
import ValuForm from '../Valuation/valuation';
import { Rate } from 'antd';


const User = ({ userId, cats, dogs, myuser}) => {

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
         <Rate allowHalf disabled value = {userId?.reduce((prev, cur) => prev + cur?.valuations?.reduce((prev, cur) => prev + cur?.points,0),0)/ userId.map((user=>user?.valuations?.reduce((prev, cur) => prev + 1,0)))}/>
             
             {totalFixed >= 0?
              <p> {totalFixed} de 5</p>: ''

}
  </div>
  
  )

            })
        }

<div className="mypets">
                <div className="cat">

                { cats?.map(function(cato) {
                    return(
                      <NavLink to= {`/cat/${cato._id}`} activeClassName="isActive" exact>

                      <Card className="cato" key={cato._id}
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="example" src={`http://localhost:3000/images/cats/${cato.image_path}`} />}
                      >
                       <p>{cato.name}</p>
                           <p>{cato.location}</p>
                       
                              
                    </Card>
                    
                  
                    </NavLink>
  
      )
      


                })}
  
                </div>
                <div className ="dog">

                { dogs?.map(function(dogo) {
                    return (
                      <NavLink to= {`/dog/${dogo._id}`} activeClassName="isActive" exact>
        
            <Card className="dogo" key={dogo._id}
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={`http://localhost:3000/images/dogs/${dogo.image_path}`} />}
            >
             <p>{dogo.name}</p>
             <p>{dogo.location}</p>
             
            
                    
          </Card>
          
        
          </NavLink>
               
            
             )
                })}

              

              
                </div>
                </div>
                



<h2 className="t">valuations:</h2>
                 
                  {userId?.map(function(user) {
                    return ( 
                      user?.valuations?.reverse().map(valuation => {
                        return ( 
                          <div className="valu">
                          <h3>{valuation.user.name}</h3>
                        <p>{valuation.valu}</p>
                        
                        <h5> <Moment format="YYYY/MM/DD">{valuation.date}</Moment></h5>
                     <Rate disabled value = {valuation?.points}/>
                          </div>
                        )
                       })
                     )
                  })}
{userId?.map(function(user) {
                    return   <div>
                  {user?._id !== myuser?._id ?
                     
                      <ValuForm/> : <div></div>
                      }
                      </div>
                      }

                    
 )}
        </div>
    )
    
}


const mapStateToProps = ({user, cat, dog}) => ({userId:user?.userId, cats:cat.cats?.cats, dogs:dog.dogs?.dogs, myuser:user?.user});

export default connect(mapStateToProps)  (User);