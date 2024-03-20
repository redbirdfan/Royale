import React from 'react';
import './CustomTagsCss/App.css';
import './CustomTagsCss/Screen.css';
import Logo from './CustomTags/logo';
import './CustomTagsCss/Logo.css';
import './CustomTagsCss/Royale.css';
import './CustomTagsCss/OnSpinReels.css';
import LoginBox from './CustomTags/LoginBox';

const NewAccount = () => {
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
                <button type="submit">Create Account</button>
            </div>
        </form>
    )
}