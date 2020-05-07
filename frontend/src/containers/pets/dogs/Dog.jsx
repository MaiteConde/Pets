import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { getDogId, editDog, postDog, clearData, deleteDog } from '../../../redux/actions/dogs';
import { NavLink } from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import { getInfo } from '../../../redux/actions/users';


const Dog = ({ dog, user }) => {
    let location = useLocation();
    const id = location.pathname.replace('/dog/','')
    useEffect(() => {
        getDogId(id)
        return () => {clearData(); getInfo()}
    }, [])

    const image = `http://localhost:3000/images/dogs/${dog?.image_path}`;
    const history = useHistory();
if(!dog) return 'cargando'
    return (

        <div> 
            
<div className="dogData">
        
                    <span>{dog?.name}</span>
                    < NavLink to= {`/user/${dog?.user?._id}`} activeClassName="isActive" exact>{dog?.user.name}</NavLink>

                    <img src= {image}  alt=""/>
                  
                    {dog?.user._id === user?._id?
                    <NavLink to= {`/editDog/${dog?._id}`} activeClassName="isActive" exact><button>Edit</button></NavLink>
                        : <div></div>
                    }


                        {dog?.user._id === user?._id || user?.role == 'admin' ?
                            <button onClick={() => {deleteDog(id);  setTimeout(() => {
                history.push('/dogs')
            }, 1000); }}>delete</button>: ''}

                </div>

        </div>
    )
}


const mapStateToProps = ({dog, user}) => ({ dog:dog?.dog?.dog[0], user: user.user});

export default connect(mapStateToProps)  (Dog) ;
