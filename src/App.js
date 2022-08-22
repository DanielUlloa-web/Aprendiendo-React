import './App.css';

import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt='logo' className='logo'></img>
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on Github</li>
          <li>is maintained by Facebook</li>
          <li>Power thousands of enterprice apps, including mobile apps</li>
        </ul>
      </header>
    </div>
  );
}






export default App;
