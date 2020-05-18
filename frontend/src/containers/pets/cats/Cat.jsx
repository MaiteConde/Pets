import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { getCatId, clearData, deleteCat } from '../../../redux/actions/cats';
import { NavLink } from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import { getInfo } from '../../../redux/actions/users';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './Cat.scss'
import MessageCat from '../../user/Messages/SendMessage';


const Cat = ({ cat, user}) => {
    let location = useLocation();
    const id = location.pathname.replace('/cat/','')
    useEffect(() => {
        getCatId(id)
        return () => {clearData(); getInfo()}
        
    }, [])
    const menu = (
        <Menu>
          <Menu.Item key="0">
          < NavLink to= {`/editCat/${cat?._id}`} activeClassName="isActive" exact> <span> <img className ="iconImage" src="https://image.flaticon.com/icons/png/512/61/61456.png" alt=""/> Edit </span></NavLink>
          </Menu.Item>
          <Menu.Item key="1">
          <span  onClick={() => {deleteCat(id);  setTimeout(() => {
 history.push('/cats')
}, 1000); }}> 

<img className ="iconImage" src="https://image.flaticon.com/icons/png/512/70/70757.png" alt=""/> Delete</span>
          </Menu.Item>
        </Menu>
      );
  

    const image = `http://localhost:3000/images/cats/${cat?.image_path}`;
    const history = useHistory();
    if(!cat) return <div class="loader"></div>


      return (

          <div className = "full"> 
          
<div className="catData">

    <div className="buttons">
        <h1>{cat?.name}</h1>
    {cat?.user._id === user?._id || user?.role == 'admin' ?

    <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
       <DownOutlined />
    </a>
  </Dropdown>: '' }

          
    </div>
                  
                    <img src= {image}  alt=""/>


            <h2>Info:</h2>
<div className="infoC">
            { cat?.sex === 'Female'?
                     <span> <h3> <img src="https://image.flaticon.com/icons/png/512/100/100494.png" alt=""/> Sex:</h3>  <br/> {cat?.sex}</span>:  <span> <h3> <img src="https://image.flaticon.com/icons/png/512/14/14694.png" alt=""/> Sex:</h3>  <br/> {cat?.sex}</span>}
                    

                    <span> <h3> <img src="https://image.flaticon.com/icons/png/512/113/113099.png" alt=""/> Age: </h3><br/> {cat?.age}</span>

                    <span> <h3> <img src="https://image.flaticon.com/icons/png/512/52/52177.png" alt=""/> Location: </h3><br/> {cat?.location}</span>
                    
</div>
                    <span className="history"> <h3> <img className = "icon" src="https://image.flaticon.com/icons/png/512/23/23401.png" alt=""/> History: </h3><br/> {cat?.history}</span>

                  

                </div>



          { cat?.adopted === false ?
                <div className="contact">
                       {cat?.user._id !== user?._id ?
                    <div className="adopt">
                        <h2>ADOPT</h2>
                <p>If you are insterested in this pet, you can contact with the actual owner:</p>
                   < NavLink to= {`/user/${cat?.user?._id}`} activeClassName="isActive" exact>{cat?.user.name}</NavLink>

                    {user?._id ? 
                <MessageCat/>: <h3> You have to be logged in to contact</h3>}
                    </div>: <div><img src="https://image.flaticon.com/icons/png/512/98/98755.png" alt=""/> <h3>You are the author of this publication</h3> </div> }
   
                </div>: <div className="adopted">
                    <h1>This cat has already been adopted!</h1>
                    <img src="https://i.pinimg.com/564x/cf/43/21/cf4321426c8c5fca866e9fe07faee8fd.jpg" alt=""/>
                    <h1>Thank you so much!</h1>

                </div>
                }

        </div>
    )
}


const mapStateToProps = ({cat, user}) => ({ cat:cat.cat?.cat[0], user:user.user});

export default connect(mapStateToProps)  (Cat);