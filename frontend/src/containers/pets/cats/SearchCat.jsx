import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux';
import './Cats.scss'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { Card } from 'antd';


import {getCatSearch } from '../../../redux/actions/cats';

const CatSearch = ({cat}) => {
    let location = useLocation();
    const search = location.pathname.replace('/searchcat/','')
    useEffect(() => {
        getCatSearch(search)
    }, [])
    if(!cat) return <div class="loader"></div>
    return (
<Fragment>
    <div className="cats">
    { 
    cat?.map(function(cato) {
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

</Fragment>
)
}

const mapStateToProps = ({cat}) =>({cat:cat.cat?.cat});
export default connect(mapStateToProps)  (CatSearch);
