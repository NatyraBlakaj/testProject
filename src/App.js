import logo from './logo.svg';
import './App.css';
import Component1 from "./components/Component1";
import {Provider} from "./components/Context";

function App() {
    return (
        <Provider>
            <div className="App">
                <Component1/>
            </div>
        </Provider>
    );
}

export default App;
