import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux';
import SimpleSelect from '../Select';
import {  notification } from 'antd';
import { editCat } from '../../../redux/actions/cats';
import './PostCat.scss' 
import Switches from '../Switch';


const Put = ({adopted, dog}) => {
    let location = useLocation();
    const id = location.pathname.replace('/editCat/','')
    
   
    const handle = event => {
        event.preventDefault();
        const formData = new FormData();
        if (event.target.image.files[0]) formData.set('image', event.target.image.files[0]);
        if (event.target.name.value[0]) formData.set('name', event.target.name.value)
        if (dog) formData.set('sex', dog)
        if (event.target.breed.value[0]) formData.set('breed', event.target.breed.value)
        if (event.target.age.value[0]) formData.set('age', event.target.age.value)
        if (event.target.history.value[0]) formData.set('history', event.target.history.value)
        if (event.target.location.value[0]) formData.set('location', event.target.location.value)
        if (adopted !== undefined) formData.set('adopted', adopted)
        editCat(formData, id)
        .then(cat => {
            notification.success({message:'Edited'})
            // setTimeout(() => {
            //     props.history.push('/profile')
            // }, 2000);
        })
        .catch((error)=>{
           console.error(error)
        })
    }
    return (
        <div className="postCatContainer">
            <form onSubmit={handle}>
                <h2>Edit cat</h2>
                <TextField type="text"  label="name" name="name" placeholder="cats name" />
                <TextField type="text"  label="breed" name="breed" placeholder="cats breed" />
                <TextField type="text"  label="age" name="age" placeholder="cats age" />
                <TextField type="text"  label="history" name="history" placeholder="cats history" />
                <TextField type="text"  label="location" name="location" placeholder="catslocation" />
                <SimpleSelect />
                Adopted: < Switches/>
                <label for="file" class="bubbly-button"><span>Select Image</span></label>
                <input type="file" name="image" id="file"/> 
              
                <Button type="submit" class="bubbly-button">
                    Send
                </Button>
            </form>
        </div>
    )
}

const mapStateToProps = ({cat, dog}) =>({adopted:cat?.catadopted,  dog:dog.sex});
export default connect(mapStateToProps)  (Put);