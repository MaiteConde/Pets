import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux';
import './Cats.scss'
import { NavLink } from 'react-router-dom';
import { Card } from 'antd';

import { getAllCats, clearData } from '../../../redux/actions/cats';
import InSearch from './InputSearch';
import { getInfo } from '../../../redux/actions/users';

const Cats = props => {
    useEffect(() => {
        getAllCats()
        return () => {clearData(); getInfo()}
    }, [])
    if(!props.cats) return <div class="loader"></div>

    return (
<Fragment>
    <InSearch/>

         
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
         {/* <p>{cato.createdAt}</p> */}
    
            
  </Card>
  

  </NavLink>
  )

            })
        }
    </div>

</Fragment>
)
}

const mapStateToProps = ({cat}) =>({cats:cat.cats?.cats});
export default connect(mapStateToProps)  (Cats);
