import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import './Cats.scss'
import { NavLink } from 'react-router-dom';
import { Card } from 'antd';

import { getAllCats } from '../../../redux/actions/cats';

const Cats = props => {
    useEffect(() => {
        getAllCats()
    }, [])
    return (

        <div className="cats">
        
 { 
     props.cats?.map(function(cato) {
         return ( 
      <NavLink to= {`/cat/${cato._id}`} activeClassName="isActive" exact>

    <Card className="cato" key={cato._id}
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={`http://localhost:3000/images/cats/${cato.image_path}`} />}
  >
     <p>{cato.name}</p>
    <p>{cato.age}</p>
            
  </Card>
  </NavLink>
  )

            })
        }
    </div>

)
}

const mapStateToProps = ({cat}) =>({cats:cat.cats?.cats});
export default connect(mapStateToProps)  (Cats);
