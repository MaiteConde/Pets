import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {editProfile, getInfo} from '../../../redux/actions/users'
import TextField from '@material-ui/core/TextField';
import {  notification } from 'antd';
import { connect } from 'react-redux'
import './Profile.scss';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;


const Put = ({user}) => {
    useEffect(() => {
        getInfo()
       
    }, [])

        const id = user?._id

    const handle = event => {
        event.preventDefault();
        const formData = new FormData();
        if (event.target.image.files[0]) formData.set('image', event.target.image.files[0]);
        if (event.target.name.value) formData.set('name', event.target.name.value)
        if (event.target.surname.value) formData.set('surname', event.target.surname.value)
        if (event.target.userInfo.value) formData.set('userInfo', event.target.userInfo.value)
        // if (event.target.history.value) formData.set('history', event.target.history.value)

        editProfile(formData, id)
        .then(cat => {
            notification.success({message:'Edited'})
         
        })
        .catch((error)=>{
           console.error(error)
        })
    }
    const image = `http://localhost:3000/images/dogs/${user?.image_path}`;
    if(!user) return <div class="loader"></div>

    return (
        <div className="profileContainer">
           
            <Card title="Public info" bordered={false} style={{ width: 900 }}>

               
            <form onSubmit={handle}>
                <span>Here you can change your info | < NavLink to= {`user/${user?._id}`} activeClassName="isActive" exact>Public profile</NavLink>
</span>
                <p>< NavLink to= {'/adoptions'} activeClassName="isActive" exact> My adoption publications</NavLink>
</p> 


                <div class="image-upload">
  <label htmlFor="file-input">
    <img src={image} />
  </label>

  <input id="file-input" name ="image" type="file" />
</div>


             <h4>Name:</h4> <TextField type="text" label={user?.name} name="name"  />
             <h4>Surname:</h4> <TextField type="text" label={user?.surname}  name="surname"  />
             <h4>Info:</h4> <TextField type="text" label={user?.userInfo}  name="userInfo" />
            
               

                <Button type="submit" class="bubbly-button">
                    Edit
                </Button>
            </form>
    </Card>

   
        </div>
    )
}

const mapStateToProps = ({user}) =>({user: user.user});
export default connect(mapStateToProps)  (Put);