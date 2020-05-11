import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { getCatsUser } from '../../redux/actions/cats';
import { getDogsUser } from '../../redux/actions/dogs';
import { Collapse } from 'antd';
import { Card } from 'antd';

import './Adoption.scss';





const Adoptions = ({ user, cats, dogs }) => {
    const { Panel } = Collapse;
    function callback(key) {
        console.log(key);
      }
    useEffect(() => {
        const id= [user._id]
        getCatsUser(id)
        getDogsUser(id)
    }, [])


    return (
                <div className="userData">

                <div className="cat">
                <h2>Cats</h2>

                { cats?.map(function(cato) {
                    return(
                        <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header= {cato.name} key="0">
            <NavLink to= {`/cat/${cato._id}`} activeClassName="isActive" exact>
          <img alt="example" src={`http://localhost:3000/images/cats/${cato.image_path}`} />
          </NavLink>
        </Panel>
      </Collapse>
  
      )
      


                })}
  <NavLink to='/postCat' activeClassName="isActive" exact>    <Button class="bubbly-button"  >
                I have a cat that need a family
                </Button></NavLink>
                </div>
                <div className ="dog">
                <h2>Dogs</h2>

                { dogs?.map(function(dogo) {
                    return (
                    <Collapse defaultActiveKey={['1']} onChange={callback}>
                  
                    <Panel header= {dogo.name} key="0">
                        <NavLink to= {`/dog/${dogo._id}`} activeClassName="isActive" exact>
                      <img alt="example" src={`http://localhost:3000/images/dogs/${dogo.image_path}`} />
                      </NavLink>
                    </Panel>
                  </Collapse>
                  
               
            
             )
                })}

                <NavLink to='/postDog' activeClassName="isActive" exact>    <Button class="bubbly-button"  >
                I have a dog that need a family
                </Button></NavLink>

              
                </div>
               
                </div>
                


            
      
    )
}
const mapStateToProps = ({user, cat, dog}) => ({ user: user?.user, cats:cat.cats?.cats, dogs:dog.dogs?.dogs});

export default connect(mapStateToProps)(Adoptions);