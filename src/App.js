import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header.js';
import Home from "./Home";
import Checkout from './Checkout';

function App() {
  return (
    //BEM
    <Router>
    <div className="App">
    <Header/>
      
      
       <Switch>
       
         <Route path="/checkout">
           <Checkout/>
         </Route>

         <Route path="/">
        <Home/>
         </Route>
         
      </Switch>
    </div>
   </Router>
  );
}

export default App;


