import React from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Regform from "./Components/Regform";
import Login from "./Components/Loginform";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
      <React.Fragment>
          <HashRouter>
              <Route path="/" exact component={Login}/>
              <Route path="/sign_up" component={Regform} />
              <Route path="/dashboard" component={Dashboard} />
          </HashRouter>
      </React.Fragment>


  );
}

export default App;
