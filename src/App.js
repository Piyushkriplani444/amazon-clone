import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header.js';
import Home from "./Home";
import Checkout from './Checkout';
import Login from './Login';
import React, { useEffect } from 'react';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';


function App() {

    const [{},dispatch]=useStateValue();

  useEffect(() =>{
    
    auth.onAuthStateChanged(authUser =>{
      console.log('The user is >>>>',authUser);
      if(authUser){
        dispatch({
        type:'SET_USER',
        user:authUser})

      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })

      }

    })
  },[])

  return (
    //BEM
    <Router>
    <div className="App">
    
      
      
       <Switch>
       <Route path="/login">
         <Login/>

    
         </Route>
         <Route path="/checkout">
         <Header/>
           <Checkout/>
         </Route>

         <Route path="/">
         <Header/>
        <Home/>
         </Route>
         
      </Switch>
    </div>
   </Router>
  );
}

export default App;


