import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { getInfo } from '../../../redux/actions/users'
import { connect } from 'react-redux'
import './Profile.scss';
import { getCatsUser } from '../../../redux/actions/cats';
import { getDogsUser } from '../../../redux/actions/dogs';


const Profile = ({ user, cats, dogs }) => {
    useEffect(() => {
        getInfo()
        getCatsUser()
        getDogsUser()
    }, [])
    return (
        <div className="profileContainer">

            {user && <React.Fragment>
                <div className="userHeader">


                <div className="userData">
                    <span>{user.name}</span>
                   
                </div>

                
                <div className="userCats">
                    <span>{cats.name}</span>
                   
                </div>
                <h2>Cats</h2>
                <div>

                { cats?.map(function(cato) {
                    return <div className="cat" key={cato._id}>
                    <p>{cato.name}</p>
                        </div>
                })}

                </div>
                <h2>Dogs</h2>
                <div>

                { dogs?.map(function(dogo) {
                    return <div className="dog" key={dogo._id}>
                    <p>{dogo.name}</p>
                
                        </div>
                })}

                </div>

                <NavLink to='/postDog' activeClassName="isActive" exact>    <Button variant="contained" color="primary"  >
                I have a dog that need a family
                </Button></NavLink>

                <NavLink to='/postCat' activeClassName="isActive" exact>    <Button variant="contained" color="primary"  >
                I have a cat that need a family
                </Button></NavLink>


                </div>


            
            </React.Fragment>}
        </div>
    )
}
const mapStateToProps = ({user, cat, dog}) => ({ user: user.user, cats:cat.cats.cats, dogs:dog.dogs.dogs});

export default connect(mapStateToProps)(Profile);


// const mapStateToProps = ({cat}) => ({cats:cat.cats.cats});
// export default connect(mapStateToProps)(Profile);