import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {  notification } from 'antd';
import { postCat } from '../../../redux/actions/cats';
import './PostCat.scss' 


const Post = props => {
    const handle = event => {
        event.preventDefault();
        const formData = new FormData();
        if (event.target.image.files[0]) formData.set('image', event.target.image.files[0]);
        if (event.target.name.value) formData.set('name', event.target.name.value)
        if (event.target.breed.value) formData.set('breed', event.target.breed.value)
        if (event.target.age.value) formData.set('breed', event.target.age.value)
        if (event.target.history.value) formData.set('history', event.target.history.value)

        postCat(formData)
 
        .then(cat => {
            
            notification.success({message:'Thank you! We hope your cat find a family soon'})
            setTimeout(() => {
                props.history.push('/profile')
            }, 2000);
        })
        .catch((error)=>{
           console.error(error)
        })
    }
    return (
        <div className="postCatContainer">
            <form onSubmit={handle}>
                <h2>Cat</h2>
                <TextField type="text" label="name" name="name" placeholder="cats name" />
                <TextField type="text" label="breed" name="breed" placeholder="cats breed" />
                <TextField type="text" label="age" name="age" placeholder="cats age" />
                <TextField type="text" label="history" name="history" placeholder="cats history" />
                <input type="file"  name="image"/>

                <Button type="submit" variant="contained" color="primary">
                    Send
                </Button>
            </form>
        </div>
    )
}

export default Post