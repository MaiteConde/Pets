import React, { useEffect, Fragment } from 'react'
import { getAllDogs } from '../../../redux/actions/dogs'
import { connect } from 'react-redux';
import './Dogs.scss'
import { NavLink } from 'react-router-dom';
import { Card } from 'antd';
import InSearchDog from './InputDog';
import { clearData, getInfo } from '../../../redux/actions/users';
import { citys } from '../../../redux/actions/locations';


const Dogs = props => {
    useEffect(() => {
        getAllDogs()
        citys()
        return () => {clearData(); getInfo()}
    }, [])

    if(!props.dogs) return <div class="loader"></div>
    
    
    return (
        <Fragment>
            <InSearchDog/>
        
                 
                <div className="cats">
                
         { 
             props.dogs?.map(function(dogo) {
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
        
                    })
                }
            </div>
        
        </Fragment>
        )
        }
     
//         <Fragment> 
//             <InSearchDog/>
//  { 
//      props.dogs?.map(function(dogo) {

//             <div className="dogs">

//         <NavLink to= {`/dog/${dogo._id}`} activeClassName="isActive" exact>
//     <Card className="dogo" key={dogo._id}
//     hoverable
//     style={{ width: 240 }}
//     cover={<img alt="example" src={`http://localhost:3000/images/dogs/${dogo.image_path}`} />}
//     >
//      <p>{dogo.name}</p>
//     <p>{dogo.age}</p>
            
//   </Card>
//   </NavLink>
//     </div>
 
 
// }

// }

// </Fragment>

//     </div>

//     )
// }

const mapStateToProps = ({dog}) =>({dogs:dog.dogs?.dogs});
export default connect(mapStateToProps)  (Dogs);
