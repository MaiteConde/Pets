import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { Card } from 'antd';
import { getMEssage, clearData } from '../../../redux/actions/users';
import './Message.scss'
import { Modal, Button } from 'antd';
import MessageResponse from '../Messages/ResponseMessage'

const ReachableContext = React.createContext();
const UnreachableContext = React.createContext();



const Dogs = ({message}) => {
    const [modal, contextHolder] = Modal.useModal();
    let location = useLocation();
    const id = location.pathname.replace('/message/','')
    useEffect(() => {
        getMEssage(id)
      
    }, [])

const image = `http://localhost:3000/images/dogs/${message?.sender?.image_path}` 
    if(!message) return <div class="loader"></div>
    const config = {
        title: 'Modal',
        content: (
          <div className="modal">
              <MessageResponse/>
           <div> <ReachableContext.Consumer>{name => ''}</ReachableContext.Consumer>
            <br />
            <UnreachableContext.Consumer>{name => ``}</UnreachableContext.Consumer>
            </div>
          </div>
        ),
      };
    return (
      <div className="cont">
        <div className="message">
 <Card style={{ width: 900 }}>   

 <div className="messagerec">
 <NavLink to={`/user/${message?.sender?._id}`} activeClassName="isActive" exact>   <div className="name"> <img className="imagepro" src={image} alt=""/><h3>{message?.sender?.name}</h3></div> </NavLink>
          <div className="messa"><p>{message?.message}</p></div> 
          <div className="date"><p>{message?.createdAt}</p></div> 
          <ReachableContext.Provider value="Light">
      <button class="bubbly-button"   onClick={() => {modal.info(config)}}>
        Respond
      </button>
      {contextHolder}
      <UnreachableContext.Provider value="Bamboo" />
    </ReachableContext.Provider>
           </div>  
           
           </Card>
           </div>
           </div>
    )
}

const mapStateToProps = ({message}) =>({message:message?.messages});
export default connect(mapStateToProps)  (Dogs);
