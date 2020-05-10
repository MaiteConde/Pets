import React, { useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom'
import {  notification } from 'antd';
import { sendMessage, getInfo } from '../../../redux/actions/users';
import { clearData, getCatId } from '../../../redux/actions/cats';
import './SendMessage.scss'
import { getDogsUser, getDogId } from '../../../redux/actions/dogs';


const MessageCat = props => {
    let location = useLocation();
    const id = location.pathname.replace('/cat/','')
    useEffect(() => {
        getInfo()
        getCatId(id)
        // return () => {clearData()}
    }, [])
    
    const handleSubmit = event =>{
        const idS = props.user._id
        const userId = props.cat?.user._id
        event.preventDefault();
        const message ={
            sender: idS,
            subject:event.target.subject.value,
            message:event.target.message.value,

        }
        sendMessage(message, userId).then(res => {
            console.log(idS)

            setTimeout(() => {
                notification.success({message:'Message send'})
            }, 1500);
        })
        .catch(()=>{
            
        })
    }
    return (
        <div className="SendContainer">
            <form onSubmit={handleSubmit}>
                
                <TextField required type="text" label="Name" name="sender"/>
                <TextField required type="text" label="Subject" name="subject"/>
                <TextField required type="text" label="Message" name="message"/>
                <Button type="submit" class="bubbly-button" >
                    Contact
                </Button>
            </form>
        </div>
    )
}

const MessageDog = props => {
    let location = useLocation();
    const id = location.pathname.replace('/dog/','')
    useEffect(() => {
        getInfo()
        getDogId(id)
        // return () => {clearData()}
    }, [])
    
    const handleSubmit = event =>{
        const idS = props.user._id
        const userId = props.dog?.user._id
        event.preventDefault();
        const message ={
            sender: idS,
            subject:event.target.subject.value,
            message:event.target.message.value,

        }
        sendMessage(message, userId).then(res => {
            console.log(idS)

            setTimeout(() => {
                notification.success({message:'Message send'})
            }, 1500);
        })
        .catch(()=>{
            
        })
    }
    return (
        <div className="SendContainer">
            <form onSubmit={handleSubmit}>
                
                <TextField required type="text" label="Name" name="sender"/>
                <TextField required type="text" label="Subject" name="subject"/>
                <TextField required type="text" label="Message" name="message"/>
                <Button type="submit" class="bubbly-button" >
                    Contact
                </Button>
            </form>
        </div>
    )
}


const mapStateToProps = ({user, cat, dog }) => ({user:user.user, cat:cat.cat?.cat[0], dog:dog?.dog?.dog[0]});

export default connect(mapStateToProps)  (MessageCat, MessageDog);

