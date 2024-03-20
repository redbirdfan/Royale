
import './CustomTagsCss/App.css';
import './CustomTagsCss/Screen.css';
import Logo from './CustomTags/logo';
import './CustomTagsCss/Logo.css';
import './CustomTagsCss/Royale.css';
import './CustomTagsCss/OnSpinReels.css';
import LoginBox from './CustomTags/LoginBox';
import { useEffect } from 'react';

function App() {
    useEffect(()=> {
      fetch('localhost4000/users')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log("oops, something went wrong"))
    })
  return(
    <div>  
      <Logo />  
      <LoginBox />
    </div>
  
  );
  }
  


export default App;
