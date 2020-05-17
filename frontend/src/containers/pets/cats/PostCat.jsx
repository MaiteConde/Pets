import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {  notification, Calendar } from 'antd';
import { postCat } from '../../../redux/actions/cats';
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom'


import './PostCat.scss' 
import SimpleSelect from '../Select';



const Post = ({dog}) => {
    const history = useHistory();
   
    const handle = event => {
        event.preventDefault();
        const formData = new FormData();
        if (event.target.image.files[0])  formData.set('image', event.target.image.files[0]);
        formData.set('name', event.target.name.value)
        formData.set('sex', dog)
        formData.set('breed', event.target.breed.value)
        formData.set('age', event.target.age.value)
        formData.set('history', event.target.history.value)
        formData.set('location', event.target.location.value)


        postCat(formData)
 
        .then(cat => {
            
            notification.success({message:'Thank you! We hope your cat find a family soon'})
            setTimeout(() => {
                history.push('/profile')
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
                <TextField type="text" required label="name" name="name" placeholder="cats name" />
                {/* <TextField type="text" required label="sex" name="sex" placeholder="cats sex" /> */}
                <TextField type="text" required label="breed" name="breed" placeholder="cats breed" />
                <TextField type="text" required label="age" name="age" placeholder="cats age" />
                <TextField type="text" required label="history" name="history" placeholder="cats history" />
                <TextField type="text" required label="location" name="location" placeholder="catslocation" />
                <SimpleSelect />

                <label for="file" class="bubbly-button"><span>Select Image</span></label>
                <input type="file" required name="image" id="file"/> 

                <Button type="submit" class="bubbly-button">
                    Send
                </Button>
            </form>
            
        </div>
    )
}

const mapStateToProps = ({dog}) =>({dog:dog.sex});
export default connect(mapStateToProps)  (Post);