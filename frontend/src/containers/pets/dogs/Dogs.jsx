import React, { useEffect } from 'react'
import { getAllDogs } from '../../../redux/actions/dogs'
import { connect } from 'react-redux';
import './Dogs.scss'
import { NavLink } from 'react-router-dom';
import { Card } from 'antd';


const Dogs = props => {
    useEffect(() => {
        getAllDogs()
    }, [])

    if(!props.dogs) return <div class="loader"></div>

    return (
        <div className="dogos">
            <div className="cont"></div>
        
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
    <p>{dogo.age}</p>
            
  </Card>
  </NavLink>
 )
  
            })

        }


    </div>

    )
}

const mapStateToProps = ({dog}) =>({dogs:dog.dogs?.dogs});
export default connect(mapStateToProps)  (Dogs);
