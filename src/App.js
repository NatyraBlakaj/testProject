import logo from './logo.svg';
import './App.css';
import Component1 from "./components/Component1";
import {Provider} from "./components/Context";
import{BrowserRouter as Router,Route,Switch} from'react-router-dom';
import Adduser from "./components/Adduser";

function App() {
    return (
        <Provider>
            <Router>
            <div className="App">
                <Switch>
                <Route exact path = "/" component={Component1}/>
                <Route path={'/Adduser'} component={Adduser}/>
                </Switch>
            </div>
            </Router>
        </Provider>
    );
}

export default App;
