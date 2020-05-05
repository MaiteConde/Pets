import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useLocation } from 'react-router-dom'
import {  notification } from 'antd';
import { postDog, editDog } from '../../../redux/actions/dogs';
import './PostDog.scss' 


const Put = props => {
    let location = useLocation();
    const id = location.pathname.replace('/editDog/','')
    console.log(id)
    const handle = event => {
        event.preventDefault();
        const formData = new FormData();
        if (event.target.image.files[0]) formData.set('image', event.target.image.files[0]);
        if (event.target.name.value) formData.set('name', event.target.name.value)
        if (event.target.breed.value) formData.set('breed', event.target.breed.value)
        if (event.target.age.value) formData.set('age', event.target.age.value)
        if (event.target.history.value) formData.set('history', event.target.history.value)

        editDog(formData, id)
        .then(dog => {
            notification.success({message:'Edited'})
            setTimeout(() => {
                props.history.push('/profile')
            }, 2000);
        })
        .catch((error)=>{
           console.error(error)
        })
    }
    return (
        <div className="postDogContainer">
            <form onSubmit={handle}>
                <h2>Edit</h2>
                <TextField type="text" label="name" name="name" placeholder="dogs name" />
                <TextField type="text" label="breed" name="breed" placeholder="dogs breed" />
                <TextField type="text" label="age" name="age" placeholder="dogs age" />
                <TextField type="text" label="history" name="history" placeholder="dogs history" />
                <input type="file"  name="image"/>

                <Button type="submit" variant="contained" color="primary">
                    Send
                </Button>
            </form>
        </div>
    )
}

export default Put