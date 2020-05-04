import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { getDogId } from '../../../redux/actions/dogs';


const Dog = ({ dog }) => {
    let location = useLocation();
    const id = location.pathname.replace('/dog','')
    useEffect(() => {
        getDogId(id)
         console.log(id)
    }, [])

    const image = `http://localhost:3000/images/dogs/${dog.image_path}`;
    return (
        <div> 
<div className="catData">
     
                    <span>{dog.name}</span>
                    <img src= {image}  alt=""/>
                    
                   
                </div>

        </div>
    )
}
const mapStateToProps = ({dog}) => ({ dog:dog.dogs.dogs[0]});

export default connect(mapStateToProps)  (Dog);