import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { getInfoId } from '../../../redux/actions/users';
import { getCatId, getCatsUser } from '../../../redux/actions/cats';
import { getDogsUser } from '../../../redux/actions/dogs';



const User = ({ user, cats, dogs}) => {
    let location = useLocation();
    const id = location.pathname.replace('/user/','')
    useEffect(() => {
        getInfoId(id)
        getCatsUser(id)
        getDogsUser(id)
         console.log(id)
    }, [])

    const image = `http://localhost:3000/images/dogs/${user?.image_path}`;
    return (
        <div> 
            {user?.name}
            <img src={image} alt=""/>
            <h2>Cats</h2>
                <div>

                { cats?.map(function(cato) {
                    return <div className="cat" key={cato._id}>
                    <p>{cato.name}</p>
                    <p>{cato.createdAt}</p>
                        </div>
                })}

                </div>
                <h2>Dogs</h2>
                <div>

                { dogs?.map(function(dogo) {
                    return <div className="dog" key={dogo._id}>
                    <p>{dogo.name}</p>
                    <p>{dogo.createdAt}</p>

                
                        </div>
                })}

                </div>



        </div>
    )
}
const mapStateToProps = ({user, cat, dog}) => ({user:user?.user[0], cats:cat.cats?.cats, dogs:dog.dogs?.dogs});

export default connect(mapStateToProps)  (User);