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

    handleUser = event =>{
        console.log("event in user=", event.target.value)
        this.newUser = event.target.value;
        this.setState({initUser: ''});
    
    };

    handleLogin = event=>{
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
        console.log(this.state.initUser);
        console.log(this.state.initPass);
        const user = {
            userId: this.state.initUser,
            password: this.state.initPass
        }
        

        console.log('**********');
        console.log(user.userId);
        console.log(user.password);
        console.log('**********');

        axios.post('http://localhost:3000/sign-up', {user})
        .then(function(response){
            console.log(response);
        })
        .catch(function(err){
            console.log(err);
        });

    };

    render(){

        return(
            <DisplayLogin 
                user={this.state.initUser} 
                password={this.state.initPass}
                handleLogin={this.handleLogin.bind(this)}
                handlePassword={this.handlePassword.bind(this)}
                onLogin={this.onLogin.bind(this)}
                item={this.state.item}
            />
        );


    }
}