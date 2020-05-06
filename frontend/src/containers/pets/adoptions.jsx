import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { getCatsUser } from '../../redux/actions/cats';
import { getDogsUser } from '../../redux/actions/dogs';




const Adoptions = ({ user, cats, dogs }) => {
    useEffect(() => {
        getCatsUser()
        getDogsUser()
    }, [])


    return (
        <div className="profileContainer">

            {user && <React.Fragment>
                <div className="userHeader">


                <div className="userData">

            
                   
                </div>
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
                <NavLink to='/postDog' activeClassName="isActive" exact>    <Button variant="contained" color="primary"  >
                I have a dog that need a family
                </Button></NavLink>

                <NavLink to='/postCat' activeClassName="isActive" exact>    <Button variant="contained" color="primary"  >
                I have a cat that need a family
                </Button></NavLink>

                </div>



                </div>


            
            </React.Fragment>}
        </div>
    )
}
const mapStateToProps = ({user, cat, dog}) => ({ user: user.user, cats:cat.cats?.cats, dogs:dog.dogs?.dogs});

export default connect(mapStateToProps)(Adoptions);