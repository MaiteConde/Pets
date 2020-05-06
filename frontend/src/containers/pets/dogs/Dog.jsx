import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { getDogId, editDog, postDog } from '../../../redux/actions/dogs';
import { NavLink } from 'react-router-dom';

const Dog = ({ dog, user }) => {
    let location = useLocation();
    const id = location.pathname.replace('/dog','')
    useEffect(() => {
        getDogId(id)
         console.log(id)
    }, [])

    const image = `http://localhost:3000/images/dogs/${dog?.image_path}`;

   
    return (
        <div> 
            
<div className="dogData">
     
                    <span>{dog?.name}</span>
                    <img src= {image}  alt=""/>
                  
                    {dog?.user === user?._id && user.role === 'admin'?
                    <NavLink to= {`/editDog/${dog?._id}`} activeClassName="isActive" exact><button>Edit</button></NavLink>
                        : <div></div>
                    }
                </div>

        </div>
    )
}


const mapStateToProps = ({dog, user}) => ({ dog:dog?.dog?.dog[0], user: user.user});

export default connect(mapStateToProps)  (Dog) ;
