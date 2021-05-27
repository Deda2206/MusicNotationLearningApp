
import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Quiz from './pages/Quiz';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import UpdateProfile from './pages/UpdateProfile';
import GameSettings from './pages/GameSettings';
import ForgotPassword from './pages/ForgotPassword';
import logo from './images/FinalProjectLogo.png';
import { AuthProvider } from "./contexts/AuthContext"


 export default function App() {
  return (
    
     
        <Router>
          <AuthProvider>
          <title>STAVER</title>
          
            <Navbar>
              {/* <img src = {logo} className ="logo"></img> */}
              </Navbar>
              <Switch>
              <Route exact path="/" component={Login}/>
              <Route path="/Login" component={Login}/>
              <Route path="/SignUp" component={Signup}/>
              <Route path="/Forgot-Password" component={ForgotPassword}/> 

              <Route exact path='/Home' navBar = {Navbar} component={Home}/>
              <Route path ="/Update-Profile" component = {UpdateProfile}/>
              <Route path = "/Game-Settings" component ={GameSettings}/>
              <Route path='/Lessons' component={Lessons}/>
              <Route path='/Quiz' component={Quiz}/>
              <Route path='/Settings' component={Settings}/>
              
              
              </Switch>
          </AuthProvider>
        </Router>
    
  )
}

