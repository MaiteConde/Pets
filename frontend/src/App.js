import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './containers/user/Login/Login';
import Register from './containers/user/Register/Register';
import Dogs from './containers/pets/dogs/Dogs'
import Dog from './containers/pets/dogs/Dog'
import Cats from './containers/pets/cats/Cats'
import Cat from './containers/pets/cats/Cat'
import PostDog from './containers/pets/dogs/PostDog'
import EditDog from './containers/pets/dogs/editDog'
import EditCat from './containers/pets/cats/EditCat'
import PostCat from './containers/pets/cats/PostCat'
import Profile from './containers/user/Profile/Profile'
import Home from './containers/Home/Home'


import { Button } from '@material-ui/core';
import { editCat } from './redux/actions/cats';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header  />
        <Switch>
        <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/dogs' component={Dogs} />
          <Route path='/cats' component={Cats} />
          <Route path='/cat/:id' component={Cat} />
          <Route path='/dog/:id' component={Dog} />
          <Route path='/profile' component={Profile} />
          <Route path='/postDog' component={PostDog} />
          <Route path='/editDog/:id' component={EditDog} />
          <Route path='/editCat/:id' component={EditCat} />
          <Route path='/postCat' component={PostCat} />



        </Switch>
      </BrowserRouter>
      {/* <div className="title">
       <h1>ADOPT<br></br> DONT SHOP</h1> 
       <Button>KNOW MORE</Button>
      </div> */}
    </div>

    
    
  );
}

export default App;
