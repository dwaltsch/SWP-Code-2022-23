import './App.css';

import ClosingButton from "./components/ClosingButton";
import Todo from "./components/todo";
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ClosingButton/>
                <Todo/>
            </header>
        </div>
    );
}

export default App;
