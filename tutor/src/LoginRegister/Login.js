import React, { Component } from 'react';

import  fire from '../Config/config'
import LoginForm from './LoginForm'
class Login extends Component{
// Todo add auth listner for Firebase

// All future sign-in request now include tenant ID.

    render(){
        // todo add the components
        return(     <LoginForm/>);
   
        // Todo add the Form  
    }
}


export default Login;
