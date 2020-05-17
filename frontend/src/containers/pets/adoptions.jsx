import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { getCatsUser } from '../../redux/actions/cats';
import { getDogsUser } from '../../redux/actions/dogs';
import { Card } from 'antd';
import './Adoption.scss';





const Adoptions = ({ user, cats, dogs }) => {
  
    useEffect(() => {
        const id= [user._id]
        getCatsUser(id)
        getDogsUser(id)
    }, [])


    return (
                <div className="userData">
                  <div className="buttons">
                  <NavLink to='/postCat' activeClassName="isActive" exact>    <Button class="bubbly-button"  >
                I have a cat that need a family
                </Button></NavLink>
                <NavLink to='/postDog' activeClassName="isActive" exact>    <Button class="bubbly-button"  >
                I have a dog that need a family
                </Button></NavLink>
                  </div>
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
                </div>
                


            
      
    )
}
const mapStateToProps = ({user, cat, dog}) => ({ user: user?.user, cats:cat.cats?.cats, dogs:dog.dogs?.dogs});

export default connect(mapStateToProps)(Adoptions);