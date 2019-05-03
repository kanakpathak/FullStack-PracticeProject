import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const Section = styled.div`
    color: lightgrey
`;
const Header = styled.h2`
    color: black
`;

const TextInput = styled.input`
    color: black
`;
const Button = styled.button`
    color: blue
`;
const Paragraph = styled.p`
    color: red
`;
const DisplayLogin = ({user, password, handleLogin, handlePassword, onLogin, item})=>{
    return(
        <Section>
            <Header>Login</Header>
            <Paragraph>hello {user} <span>your password is </span> {password} {item}</Paragraph>
            <table>
                <tbody>
                    <tr>
                        <td>UserName:</td>
                        <td><TextInput type="text" name="user" onChange={handleLogin} value={user} /></td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><TextInput type="password" name="password" onChange={handlePassword} value={password} /></td>
                    </tr>
                    <tr>
                        <td colSpan="2" align="center"><Button onClick={onLogin}>Login</Button></td>
                    </tr>    
                </tbody>
            </table>

        </Section>
    );
}


export default DisplayLogin;