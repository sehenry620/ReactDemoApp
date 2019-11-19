import React from 'react';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact'

import Navigation from './components/navigation/Navigation';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Welcome name="Stephanie" />
      <Clock />
      <Contact /> */}
      <Navigation />
      <Route exact path="/" render={(props)=><Welcome {...props} name="Stephanie"/>} />
      <Route path="/clock" component={Clock} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
