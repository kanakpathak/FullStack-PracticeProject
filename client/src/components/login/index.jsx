import React, {Component} from 'react';
import ReactDom from 'react-dom';
import DisplayLogin from './DisplayLogin.jsx';
import axios from 'axios';

export default class Login extends Component{
    newUser='';
    newPass='';
    constructor(){
        super();
        this.state = {
            user:'',
            password:'',
            initUser:'examplegmail.com',
            initPass:'1234'
        };
    }    

    handleUser = event=>{
        console.log("event in user=", event.target.value)
        // this.setState({initUser:''});
        this.newUser = event.target.value;
        this.setState({initUser:this.newUser});
    };

    handlePassword = event => {
        console.log("event in pass=", event.target.value)
        // this.setState({initPass:''});
        this.newPass = event.target.value;
        this.setState({initPass:this.newPass});
    };

    onLogin = event => {
        console.log('event in login');
        this.setState({user:this.state.initUser, password:this.state.initPass, initUser:'',initPass:''});


        const user = {
            userId: this.state.initUser,
            password: this.state.initPass
        }


        
        axios.post('http://localhost:3000/sign-up', {user})

    };

    render(){

        return(
            <DisplayLogin 
                user={this.state.initUser} 
                password={this.state.initPass}
                handleUser={this.handleUser.bind(this)}
                handlePassword={this.handlePassword.bind(this)}
                onLogin={this.onLogin.bind(this)}
                item={this.state.item}
            />
        );


    }
}