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
}, 1000); }}> <img className ="iconImage" src="https://image.flaticon.com/icons/png/512/70/70757.png" alt=""/> Delete</span>
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

    {/* < NavLink to= {`/user/${cat?.user?._id}`} activeClassName="isActive" exact>{cat?.user.name}</NavLink> */}
          
    </div>
                  
                    <img src= {image}  alt=""/>


            <h2>Info:</h2>
<div className="infoC">
                     <span> <h3> <img src="https://image.flaticon.com/icons/png/512/87/87221.png" alt=""/> Sex:</h3>  <br/> {cat?.sex}</span>
                     {/* <span> <h3>HIstory:</h3>  <br/> {cat?.history}</span> */}
                    <span> <h3> <img src="https://image.flaticon.com/icons/png/512/113/113099.png" alt=""/> Age: </h3><br/> {cat?.age}</span>

                    <span> <h3> <img src="https://image.flaticon.com/icons/png/512/52/52177.png" alt=""/> Location: </h3><br/> {cat?.location}</span>
                    
</div>
                    <span className="history"> <h3> <img className = "icon" src="https://image.flaticon.com/icons/png/512/23/23401.png" alt=""/> History: </h3><br/> {cat?.history}</span>

                  

                </div>




                <div className="contact">
                    <div className="adopt">
                        <h2>ADOPT</h2>
                <p>If you are insterested in this pet, you can contact with the actual owner:</p>
                <span> <h3>{cat?.user.name}</h3></span>

                <MessageCat/>
                    </div>
   
                </div>

        </div>
    )
}


const mapStateToProps = ({cat, user}) => ({ cat:cat.cat?.cat[0], user:user.user});

export default connect(mapStateToProps)  (Cat);