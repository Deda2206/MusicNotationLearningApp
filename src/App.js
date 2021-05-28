import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import{HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Quiz from './pages/Quiz';

import Login from './pages/Login';
import Signup from './pages/SignUp';
import UpdateProfile from './pages/UpdateProfile';
import ForgotPassword from './pages/ForgotPassword';
import { AuthProvider } from "./contexts/AuthContext"


 export default function App() {
  return (
    
     
        <Router>
          <AuthProvider>
          <title>STAVER</title>
          
            <Navbar>
              
              </Navbar>
              <Switch>
              <Route exact path="/" component={Login}/>
              <Route path="/Login" component={Login}/>
              <Route path="/SignUp" component={Signup}/>
              <Route path="/Forgot-Password" component={ForgotPassword}/> 

              <Route exact path='/Home' navBar = {Navbar} component={Home}/>
              <Route path ="/Update-Profile" component = {UpdateProfile}/>
              <Route path='/Lessons' component={Lessons}/>
              <Route path='/Quiz' component={Quiz}/>
              
              
              
              </Switch>
          </AuthProvider>
        </Router>
    
  )
}

