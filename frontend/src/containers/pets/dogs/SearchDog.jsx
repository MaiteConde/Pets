import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux';
import './Dogs.scss'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { Card } from 'antd';


import { getDogSearch } from '../../../redux/actions/dogs';

const DogSearch = ({dogSearch}) => {
    let location = useLocation();
    const search = location.pathname.replace('/searchdog/','')
    useEffect(() => {
        getDogSearch(search)
    }, [])
    if(!dogSearch) return <div class="loader"></div>
    if (dogSearch.length <= 0) return <div className="notFound"><img src="https://i.pinimg.com/564x/71/20/bd/7120bdf17b5bf079cacd62ecaf20670c.jpg" alt=""/>
    <h1>No results</h1></div>
    return (
<Fragment>
    <div className="dogs">
    { 
    dogSearch?.map(function(dogo) {
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

</Fragment>
)
}

const mapStateToProps = ({dog}) =>({dogSearch:dog.dogSearch});
export default connect(mapStateToProps)  (DogSearch);
