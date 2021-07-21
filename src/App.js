import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header.js';
import Home from "./Home";
import Checkout from './Checkout';
import Login from './Login';

function App() {
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


