import React from 'react';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';


function App() {
  return (
    <div>
      <Welcome name="Stephanie" />
      <Clock />
    </div>
  );
}

export default App;
