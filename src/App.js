import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Login } from './Components/Login/Login';
import { Homepage } from './Components/Homepage/Homepage';

const App = withRouter(() => {
  if (!localStorage.getItem('token')) {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </div>
    );
  }
  return (
    <div className="App">
      <Switch>
        <Route path="/homepage" component={Homepage} />
      </Switch>
    </div>
  );
});

export default App;
