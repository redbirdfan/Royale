import React from 'react';
import axios from 'axios';
import "../CustomTagsCss/LoginBox.css"



const LoginBox = () => {

    const handleLogin=async (event) => {
        event.preventDefault();

        const username = event.target.user.value;
        const password = event.target.password.value;

        try {
            const response = await axios.post('http://your-backend-api/login', {
                username: username,
                password: password
            });
            console.log('login correct');
        } catch (error) {
            console.log("Login unsuccessful", error);
        }
    };
    
    return (
        <form onSubmit = {handleLogin}>
        <div className='boxStyling'> 
            <div style={{paddingRight: '20px'}}>
                <label for="user"><b>Username</b></label>
                <input type="text" placeholder="Enter UserName" name="user" required></input>
            </div>
            <div style={{paddingRight: '15px'}}>
                <label for="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required></input>
            </div>
        </div>
            <div>
                <button type="submit">Login</button>
                <button>Create Account</button>
            </div>
        </form>
    

    )
}

export default LoginBox;