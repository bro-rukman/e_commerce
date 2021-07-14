import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Dashboard from 'Pages/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Dashboard}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
