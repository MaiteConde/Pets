import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { getCatId, clearData, deleteCat } from '../../../redux/actions/cats';
import { NavLink } from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import { getInfo } from '../../../redux/actions/users';




const Cat = ({ cat, user}) => {
    let location = useLocation();
    const id = location.pathname.replace('/cat/','')
    useEffect(() => {
        getCatId(id)
        return () => {clearData(); getInfo()}
        
    }, [])
  
    const image = `http://localhost:3000/images/cats/${cat?.image_path}`;
    const history = useHistory();
    if(!cat) return 'cargando'

    return (
        <div> 
<div className="catData">
     
                    <span>{cat?.name}</span>
                    < NavLink to= {`/user/${cat?.user?._id}`} activeClassName="isActive" exact>{cat?.user.name}</NavLink>
                    
    
                    <img src= {image}  alt=""/>


                   {cat?.user._id === user?._id ?
                    < NavLink to= {`/editCat/${cat?._id}`} activeClassName="isActive" exact><button>Edit</button></NavLink>
                    : <div></div>
                }


                    {cat?.user._id === user?._id || user?.role == 'admin' ?
                    <button onClick={() => {deleteCat(id);  setTimeout(() => {
                history.push('/cats')
            }, 1000); }}>delete</button>:''
        }
                </div>

        </div>
    )
}
const mapStateToProps = ({cat, user}) => ({ cat:cat.cat?.cat[0], user:user.user});

export default connect(mapStateToProps)  (Cat);