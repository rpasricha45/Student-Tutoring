import React, { Component } from 'react';

// import  fire from '../Config/config'

import firebase from 'firebase';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Todo - add the support of  Firebase 

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email:'',
            password :''
        }
    }

    // add the state 
    login(e){
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(function(result) {
        // result.user.tenantId should be ‘TENANT_PROJECT_ID’.
      }).catch(function(error) {
        // Handle error.
      });
    }
    
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }



    render(){
        return(
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <input value = {this.state.email} onChange={this.handleChange} type = 'email' name = 'email' placeholder = "enterEmails"/>
  
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

        )
    }
}

export default LoginForm;