import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux';
import './Cats.scss'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { Card } from 'antd';


import { getDOGSearch } from '../../../redux/actions/dogs';

const DogSearch = ({cat}) => {
    let location = useLocation();
    const search = location.pathname.replace('/searchcat/','')
    useEffect(() => {
        getDOGSearch(search)
    }, [])
    if(!dog) return <div class="loader"></div>
    return (
<Fragment>
    <div className="dogs">
    { 
    dog?.map(function(dogo) {
         return ( 
      <NavLink to= {`/cat/${dogo._id}`} activeClassName="isActive" exact>

    <Card className="dogo" key={dogo._id}
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={`http://localhost:3000/images/cats/${dogo.image_path}`} />}
    >
     <p>{dogo.name}</p>
    <p>{dogo.age}</p>
            
  </Card>
  

  </NavLink>
  )

            })
        }
           </div>

</Fragment>
)
}

const mapStateToProps = ({dog}) =>({dogs:dog.dog?.dog});
export default connect(mapStateToProps)  (DogSearch);
