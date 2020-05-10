import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {  notification } from 'antd';
import './Register.scss';

import { register } from '../../../redux/actions/users';
const Register = props => {
    const handleSubmit = event =>{
        event.preventDefault();
        const user ={
            name:event.target.name.value,
            surname:event.target.surname.value,
            email:event.target.email.value,
            password:event.target.password.value
        }
        register(user).then(res => {
            
            setTimeout(() => {
                notification.success({message:'Register complete'})
                props.history.push('/login')
            }, 1500);
        })
        .catch(()=>{
            
        })
    }
    return (
        <div className="registerContainer">
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <TextField type="text" label="Name" name="name"/>
                <TextField type="text" label="Surname" name="surname"/>
                <TextField type="email" label="Email" name="email"/>
                <TextField type="password" label="Password" name="password" />
                <Button type="submit" class="bubbly-button" >
                    Register
                </Button>
            </form>
        </div>
    )
}

export default Register

