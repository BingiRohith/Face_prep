import logo from './logo.svg';
import './App.css';
import {  Router, Routes, Route, Link} from 'react-router-dom';
import { Component } from 'react'
import Login from './Components/Login';
import Contact from './Components/Contact';
import Logout from './Components/Logout';

class App extends Component() {
  render(){
  return (
    
    <Routes>
      <Route  path="/" element={<Login/>}/>
      <Route  path="/contact" element={<Contact/>}/>
      <Route  path="/logout" element={<Logout/>}/>
    </Routes>
   
    
  );
}
}
const A = () =>{
  return(
    <div>
      <h1>
        hello 1
      </h1>
    </div>
  )
}

const B= () => {
  return(
    <div>
       <h1>This is B</h1>
       <Link to="/a">hello worlds</Link>

    </div>
   

  )
}
export default App;
