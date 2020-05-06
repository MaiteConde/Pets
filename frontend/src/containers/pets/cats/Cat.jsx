import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { getCatId } from '../../../redux/actions/cats';
import { NavLink } from 'react-router-dom';



const Cat = ({ cat, user}) => {
    let location = useLocation();
    const id = location.pathname.replace('/cat','')
    useEffect(() => {
        getCatId(id)
         console.log(id)
    }, [])

    const image = `http://localhost:3000/images/cats/${cat?.image_path}`;
    return (
        <div> 
<div className="catData">
     
                    <span>{cat?.name}</span>
                    <img src= {image}  alt=""/>
                   
                   {cat?.user === user?._id ?
                    < NavLink to= {`/editCat/${cat._id}`} activeClassName="isActive" exact><button>Edit</button></NavLink>
                    : <div></div>
                }

                
                </div>

        </div>
    )
}
const mapStateToProps = ({cat, user}) => ({ cat:cat.cat?.cat[0], user:user.user});

export default connect(mapStateToProps)  (Cat);