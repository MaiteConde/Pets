import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import './Cats.scss'
import { NavLink } from 'react-router-dom';

import { getAllCats } from '../../../redux/actions/cats';

const Cats = props => {
    useEffect(() => {
        getAllCats()
    }, [])
    return (
        <div className="cats">
        
 { 
     props.cats?.map(function(cato) {
  
    return <div   exact className="cat" key={cato._id}>

            <p>{cato.name}</p>

            <NavLink to= {`/cat/${cato._id}`} activeClassName="isActive" exact> <button>know more</button></NavLink>


          

                </div>
            })
        }
    </div>

    )
}

const mapStateToProps = ({cat}) =>({cats:cat.cats.cats});
export default connect(mapStateToProps)  (Cats);
