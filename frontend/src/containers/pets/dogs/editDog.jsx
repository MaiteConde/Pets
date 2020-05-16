import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useLocation } from 'react-router-dom'
import {  notification } from 'antd';
import { postDog, editDog } from '../../../redux/actions/dogs';
import './PostDog.scss' 
import Switches from '../Switch';
import { connect } from 'react-redux';



const Put = props => {
    let location = useLocation();
    const id = location.pathname.replace('/editDog/','')
    console.log(id)
    const handle = event => {
        event.preventDefault();
        const formData = new FormData();
        if (event.target.image.files[0]) formData.set('image', event.target.image.files[0]);
        if (event.target.name.value[0]) formData.set('name', event.target.name.value)
        if (event.target.sex.value[0]) formData.set('sex', event.target.sex.value)
        if (event.target.breed.value[0]) formData.set('breed', event.target.breed.value)
        if (event.target.age.value[0]) formData.set('age', event.target.age.value)
        if (event.target.history.value[0]) formData.set('history', event.target.history.value)
        if (event.target.location.value[0]) formData.set('location', event.target.location.value)
        formData.set('adopted', props.adopted)
        
        editDog(formData, id)
        .then(dog => {
            console.log(dog)
            notification.success({message:'Edited'})
            setTimeout(() => {
                localStorage.removeItem('adopted')
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
                <TextField type="text"  label="sex" name="sex" placeholder="cats sex" />
                <TextField type="text" label="breed" name="breed" placeholder="dogs breed" />
                <TextField type="text" label="age" name="age" placeholder="dogs age" />
                <TextField type="text" label="history" name="history" placeholder="dogs history" />
                <TextField type="text"  label="location" name="location" placeholder="catslocation" />
               <Switches />
                <input type="file"  name="image" id="file-input"/>

                <Button type="submit" variant="contained" color="primary">
                    Send
                </Button>
            </form>
        </div>
    )
}

const mapStateToProps = ({cat}) =>({adopted:cat?.catadopted});
export default connect(mapStateToProps)  (Put);