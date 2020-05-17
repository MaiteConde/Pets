import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.scss';
import { logout } from '../../redux/actions/users';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import logo from '../Header/logo.png'
const { SubMenu } = Menu;

const Header = props => {

    return <header className="header" id= "header">
    <div className="logo"><img src={logo} alt=""/></div>
 
 <NavLink to='/' activeClassName="isActive" exact><img src="https://image.flaticon.com/icons/png/512/69/69524.png" alt=""/></NavLink>
 

        {props.user?.user?
            <div className="userZone">
              <NavLink to='/profile' activeClassName="isActive" exact><img src="https://image.flaticon.com/icons/png/512/16/16363.png" alt=""/></NavLink>
    <NavLink to='/messages' activeClassName="isActive" exact><img src="https://image.flaticon.com/icons/png/512/70/70562.png" alt=""/></NavLink>


    <NavLink to='' onClick={logout}>Logout</NavLink>
            </div> : <div className="guestZone">
                <NavLink to='/login' activeClassName="isActive" exact>Login</NavLink>
                <NavLink to='/register' activeClassName="isActive" exact>Register</NavLink>
            </div>}
    </header>
}



const mapStateToProps = (state) => ({ user: state.user });
export default connect(mapStateToProps)(Header);



