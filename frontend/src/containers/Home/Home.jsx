import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import Map from '../Geolocation/Geolocation'
import { NavLink } from 'react-router-dom';
import './Home.scss'
import { getAllCats } from '../../redux/actions/cats';
import { locations } from '../../redux/actions/locations';




const Home = () => {
     
    return (
<div className="container">
<Map/>     
<div className="headerDog">
    <div className="title">
    <h1>Find the right pet for you</h1>
    </div>
</div>
<div className="buttonCon">
    <div className="contents">
        <NavLink to='/dogs' activeClassName="isActive" exact>
<img src="https://image.flaticon.com/icons/png/512/91/91533.png" alt=""/>
             <span>find a Dog</span> 
        
        </NavLink>

        <NavLink to='/cats' activeClassName="isActive" exact> 
        <img src="https://image.flaticon.com/icons/png/512/24/24674.png" alt=""/>
        <span>find a Cat</span> </NavLink>
    </div>
    </div>
<div className="petInfo">

    <div className="doginfo">
    <h1> <span>Dog</span> facts</h1>
    <p>Dogs fill a variety of roles in human society and are often trained as working dogs. For dogs that do not have traditional jobs, a wide range of dog sports provide the opportunity to exhibit their natural skills.</p>
    <p>It is estimated that for more than 12,000 years the dog has lived with humans as a hunting companion, protector and friend. A dog is one of the most popular pets in the world and has been referred to as ‘mans best friend’. Whether you are poor or rich, a dog will be faithful and loyal to you and love you to bits.</p>
    </div> 

    <div className="catInfo">
    <h1> <span>Cat</span>  facts</h1>
    <p>You can tell a cats mood just by looking into its eyes. A frightened or excited cat will have large pupils, whereas an angry cat will have narrowed pupils. Both humans and cats have identical regions in the brain responsible for emotion.</p>
    <p>Most of a cats muscles are long, thin and flexible. They enable a cat to move with great ease and speed. Cats can run about 30 miles (48 kilometres) per hour. Unlike many animals, a cat walks by moving the front and rear legs on one side of its body at the same time and then the legs on the other side. As a result, a cat seems to glide.</p>
    </div>
</div>
</div>
    )
}

export default  Home;
