import logo from './logo.svg';
import './App.css';
import SuperButton from "./components/Button";
import Lists from "./components/Lists";
import NiceButton from "./components/NiceButton";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <SuperButton name="Hansi" age="18"/>
                <SuperButton name="Ansi" age="18"/>
                <SuperButton name="UTF8i" age="18"/>
                <SuperButton name="AESI" age="18"/>

                <Lists listItem="Hallo"/>
                <Lists listItem="Test"/>
                <Lists listItem="Test3"/>

                <NiceButton buttonname="Sendar"/>
                <img src={logo} className="App-logo" alt="logo"/>
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
