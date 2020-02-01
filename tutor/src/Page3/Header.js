import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


class Header extends Component{
    render(){

        return(
            <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                Giving student's the help the despertly need 
                </Typography>
            </Toolbar>
        </AppBar>
        );
    }
}


export default Header;
