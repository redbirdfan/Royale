import React, { useState } from 'react'
import axios from 'axios';




const LoginBox = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        console.log("front user:", username);
        console.log("front password:", password);
        try {
            const response = await axios.post('http://localhost:4000/login', {
                username: username,
                password: password
            });
            console.log("Frontend:", username, "password:", password)
            console.log('login correct');
            window.location.href = '/slots'
        } catch (error) {
            console.log("Frontend:", username, password)
            console.log("Login unsuccessful", error);
        }
    };

    const handleNewAccount = async (event) => {
        event.preventDefault();
        console.log("New user:", username)
        console.log("New password:", password);
        try {
            const response = await axios.post('http://localhost:4000/newUser', {
                username: username,
                password: password
            });
            console.log('login correct');
           if (response.status===200){
            alert("New account created successfully");
           } else {
            alert("Sorry, that username already exists, please try again!")
           }
        } catch (error) {
            console.log("NewAccount:", username, password)
            console.log("NewAccount unsuccessful", error);
        }
    };

    const inputChange = (event) => {
        if (event.target.name === 'user') {
            setUsername(event.target.value);
            console.log("User State:", username);
        } 
        if (event.target.name ==='password') {
            setPassword(event.target.value);
            console.log("Password State:", password);
        }
    };
    
    
    return (

        <form onSubmit = {handleLogin} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className='boxStyling' style={{background: 'black', textAlign: 'center', padding: '20px'}}> 
            <div style={{ paddingRight: '60px'}}>
                <label htmlFor="user"><b>Username</b></label>
                <input type="text" placeholder="Enter UserName" name="user" required onChange={inputChange} value={username}></input>
            </div>
            <div style={{marginBottom: '20px', paddingRight:'54px'}} >
                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required onChange={inputChange} value={password}></input>   
            </div>
            <div style={{paddingLeft: "15px"}}>
                <button type="submit">Login</button>
                <button type="button" onClick={handleNewAccount}>Create Account</button >
            </div>
        </div>
        </form>
    

    )
}

export default LoginBox;