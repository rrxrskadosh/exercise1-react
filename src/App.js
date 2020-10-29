//import logo from './logo.svg';
import './styles.css';
import './App.css';
import Interests from './components/Interests';
import Profile from './components/Profile';
import Expectations from './components/Expectations';
import Learn from './components/Learn';


function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="container box1">
          <Profile />
        </div>
        <div className="container box2">
          <Expectations />
        </div>
        <div className="container box3">
          <Interests />
        </div>
        <div className="container box4">
          <Learn />
        </div>
      </div>
    </div>
  );
}















/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
