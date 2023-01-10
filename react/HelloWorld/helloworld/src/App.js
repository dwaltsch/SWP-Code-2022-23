import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import SuperButton from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SuperButton name="Hansi"/>
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
          ok cool
        </a>
      </header>
    </div>
  );
}

export default App;
