import React, { useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom'
import {  notification } from 'antd';
import { sendMessage} from '../../../redux/actions/users';
import './SendMessage.scss'



const MessageResponse = ({user, messages}) => {
    const handleSubmit = event =>{
        event.preventDefault();
        const idS = messages?.recipient?._id
        const userId = messages?.sender?._id
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
                
               
                <TextField required type="text" label="Subject" name="subject"/>
                <TextField required type="text" label="Message" name="message"/>
                <Button type="submit" class="bubbly-button" >
                    Contact
                </Button>
            </form>
        </div>
    )
}


const mapStateToProps = ({user, message}) =>({user:user.user,messages:message?.messages});

export default connect(mapStateToProps)  (MessageResponse);

