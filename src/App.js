import React from 'react';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact'

import Navigation from './components/navigation/Navigation';
import { Route, Switch } from 'react-router-dom';
import ErrorMessage from './components/errormessage/ErrorMessage';

function App() {
  return (
    <div>
      {/* <Welcome name="Stephanie" />
      <Clock />
      <Contact /> */}
      
      <Navigation />
      <Switch>
      <Route exact path="/" render={(props)=><Welcome {...props} name="Stephanie"/>} />
      <Route path="/welcome/:name" component={Welcome} />
      <Route path="/clock" component={Clock} />
      <Route path="/contact" component={Contact} />
      <Route component={ErrorMessage} />
      </Switch>
    </div>
  );
}

export default App;
