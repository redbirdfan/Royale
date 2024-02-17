import React from 'react';
import "../CustomTagsCss/LoginBox.css"

const LoginBox = () => {
    return (
        <div className='boxStyling'> 
             <div style={{paddingRight: '5px'}}>
                <label for="User"><b>Username</b></label>
                <input type="text" placeholder="Enter UserName" name="User" required></input>
            </div>
            <div>
                <label for="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required></input>
            </div>
        </div>

    )
}

export default LoginBox;