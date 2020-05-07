import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { getInfoId, getInfo, clearData } from '../../../redux/actions/users';
import {getCatsUser } from '../../../redux/actions/cats';
import './userProfile.scss'
import { getDogsUser } from '../../../redux/actions/dogs';
import { Card } from 'antd';


const User = ({ userId, cats, dogs}) => {
    let location = useLocation();
    const id = location.pathname.replace('/user/','')
    useEffect(() => {
        // getInfo()
        getInfoId(id)
        getCatsUser(id)
        getDogsUser(id)
        // return () => {clearData()}

    }, [])
    if(!userId) return 'cargando'

    return (
        <div> 
          { 
     userId?.map(function(user) {
        const image = `http://localhost:3000/images/dogs/${user?.image_path}`;
         return ( 

    <div className="user" key={user._id}>
        <img  className="profilePhoto" src={image} alt=""/>
    
     <p>{user.name}</p>
    <p>{user.email}</p>
            
  </div>
  )

            })
        }

        <div className="catDog">
                <div>
            <h2>Cat publications</h2>

                { cats?.map(function(cato) {
                    return  <NavLink to= {`/cat/${cato._id}`} activeClassName="isActive" exact>

                    <Card className="cato" key={cato._id}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={`http://localhost:3000/images/cats/${cato.image_path}`} />}
                    >
                     <p>{cato.name}</p>
                    <p>{cato.age}</p>
                            
                  </Card>
                  
                
                  </NavLink>
                })}

                </div>
                <div>
                <h2>Dog publications</h2>

                { dogs?.map(function(dogo) {
                    return  <NavLink to= {`/dog/${dogo._id}`} activeClassName="isActive" exact>

                    <Card className="dogo" key={dogo._id}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={`http://localhost:3000/images/dogs/${dogo.image_path}`} />}
                    >
                     <p>{dogo.name}</p>
                    <p>{dogo.age}</p>
                            
                  </Card>
                  
                
                  </NavLink>
                })}

                </div>
                </div>


        </div>
    )
}
const mapStateToProps = ({user, cat, dog}) => ({userId:user?.userId, cats:cat.cats?.cats, dogs:dog.dogs?.dogs});

export default connect(mapStateToProps)  (User);