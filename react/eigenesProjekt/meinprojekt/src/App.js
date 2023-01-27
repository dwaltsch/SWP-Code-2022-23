import './App.css';
import BTC from "./components/BTC";
import ClosingButton from "./components/ClosingButton";
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ClosingButton/>
                <BTC/>
            </header>
        </div>
    );
}

export default App;
