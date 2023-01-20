import './App.css';
import SuperButton from "./components/Button";
import Lists from "./components/Lists";
import NiceButton from "./components/NiceButton";
import Peoplecard from "./components/Peoplecard";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Peoplecard name="John Doe" smalltext="Hallo ich bin John"
                            src="https://www.w3schools.com/howto/img_avatar.png"/>
                <Peoplecard name="John Doe" smalltext="Hallo ich bin John"
                            src="https://www.w3schools.com/howto/img_avatar.png"/>
                <SuperButton name="Hansi" age="18"/>
                <SuperButton name="Ansi" age="18"/>
                <Lists listItem="Hallo"/>
                <Lists listItem="Test"/>
                <NiceButton buttonname="Sendar"/>
            </header>
        </div>
    );
}

export default App;
