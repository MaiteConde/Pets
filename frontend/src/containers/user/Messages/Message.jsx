import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { Card } from 'antd';
import { getMEssage, clearData } from '../../../redux/actions/users';
import Messages from './Messages';


const Dogs = ({message}) => {
    let location = useLocation();
    const id = location.pathname.replace('/message/','')
    useEffect(() => {
        getMEssage(id)
        return () => {clearData()}
    }, [])


    if(!message) return <div class="loader"></div>

    return (
        <div className="mess">
            <h3>{message?.sender?.name}</h3>
           <p>{message?.message}</p>

          
    </div>

    )
}

const mapStateToProps = ({message}) =>({message:message?.messages});
export default connect(mapStateToProps)  (Dogs);
