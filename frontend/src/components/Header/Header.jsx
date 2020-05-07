import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.scss';
import { logout } from '../../redux/actions/users';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Header = props => {


    return <header className="header" id= "header">
 
        <NavLink to='/' activeClassName="isActive" exact>Home</NavLink>
        <NavLink to='/dogs' activeClassName="isActive" exact>Dogs</NavLink>
        <NavLink to='/cats' activeClassName="isActive" exact>Cats</NavLink>




       
        {props.user?.user?
            <div className="userZone">
                <NavLink to='/profile' activeClassName="isActive" exact>{props.user.user.name}</NavLink>
                <span onClick={logout}>Logout</span>
            </div> : <div className="guestZone">
                <NavLink to='/login' activeClassName="isActive" exact>Login</NavLink>
                <NavLink to='/register' activeClassName="isActive" exact>Register</NavLink>
            </div>}
    </header>
}



const mapStateToProps = (state) => ({ user: state.user });
export default connect(mapStateToProps)(Header);



