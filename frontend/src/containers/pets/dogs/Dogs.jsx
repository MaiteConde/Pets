import React, { useEffect } from 'react'
import { getAllDogs } from '../../../redux/actions/dogs'
import { connect } from 'react-redux';
import './Dogs.scss'
import { NavLink } from 'react-router-dom';


const Dogs = props => {
    useEffect(() => {
        getAllDogs()
    }, [])
    return (
        <div className="dogos">
        
 { 
     props.dogs?.map(function(dogo) {
  
    return <div className="dogo" key={dogo._id}>
            <p>{dogo.name}</p>
            <NavLink to= {`/dog/${dogo._id}`} activeClassName="isActive" exact> <button>know more</button></NavLink>

                </div>
            })
        }
    </div>

    )
}

const mapStateToProps = ({dog}) =>({dogs:dog.dogs.dogs});
export default connect(mapStateToProps)  (Dogs);
