
import './CustomTagsCss/App.css';
import './CustomTagsCss/Screen.css';
import Screen from './CustomTags/Screen';
import Spinreels from './CustomTags/Spinreels'
import './CustomTagsCss/Logo.css';
import './CustomTagsCss/Royale.css';

function App() {
  return(
  
    <header className='App-header'>
    <img src = "https://th.bing.com/th?q=Gold+Crown+Black+Background+Cartoon&dc=3&w=100&h=100&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-US&cc=US&setlang=en&adlt=moderate&t=1&mw=247" className= 'center-logo' alt="Crown"></img>
    <h1 className='title-style'>The Royale</h1>
    <div>
    <Screen />
    </div>
    </header>
  );
  }
  


export default App;
