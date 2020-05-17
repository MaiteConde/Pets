import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useLocation } from 'react-router-dom'
import {  notification } from 'antd';
import { postDog, editDog } from '../../../redux/actions/dogs';
import './PostDog.scss' 
import Switches from '../Switch';
import { connect } from 'react-redux';
import SimpleSelect from '../Select';
import {useHistory} from 'react-router-dom';




const Put = ({adopted, dog}) => {
    const history = useHistory();
    let location = useLocation();
    const id = location.pathname.replace('/editDog/','')
    console.log(id)
    const handle = event => {
        event.preventDefault();
        const formData = new FormData();
        if (event.target.image.files[0]) formData.set('image', event.target.image.files[0]);
        if (event.target.name.value) formData.set('name', event.target.name.value)
        if (dog) formData.set('sex', dog)
        if (event.target.breed.value) formData.set('breed', event.target.breed.value)
        if (event.target.age.value) formData.set('age', event.target.age.value)
        if (event.target.history.value) formData.set('history', event.target.history.value)
        if (event.target.location.value) formData.set('location', event.target.location.value)
        if (adopted !== undefined) formData.set('adopted', adopted)
        console.log(adopted)
        editDog(formData, id)
        .then(dog => {
            console.log(dog)
            notification.success({message:'Edited'})
            setTimeout(() => {
                localStorage.removeItem('adopted')
                history.push('/profile')
            }, 2000);
        })
        .catch((error)=>{
            console.error(error)
        })
    }
    return (
        <div className="postDogContainer">
        
            <form onSubmit={handle}>
                <h2>Edit dog</h2>
                <TextField type="text" label="name" name="name" placeholder="dogs name" />
                <TextField type="text" label="breed" name="breed" placeholder="dogs breed" />
                <TextField type="text" label="age" name="age" placeholder="dogs age" />
                <TextField type="text" label="history" name="history" placeholder="dogs history" />
                <TextField type="text" label="location" name="location" placeholder="catslocation" />
                <SimpleSelect />
               
               Adopted: <Switches />
               <label for="file" class="bubbly-button"><span>Select Image</span></label>
                <input type="file"  name="image" id="file"/> 
                <Button type="submit" class="bubbly-button">
                    Send
                </Button>
            </form>
        </div>
    )
}

const mapStateToProps = ({cat, dog}) =>({adopted:cat?.catadopted, dog:dog.sex});
export default connect(mapStateToProps)  (Put);