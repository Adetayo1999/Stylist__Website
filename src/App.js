import React from 'react';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import HomePage from './HomePage';


function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path ="/">
                      <HomePage />
                    </Route>
                    <Route path="/about">
                        About Me
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
