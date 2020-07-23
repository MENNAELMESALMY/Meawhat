import React from 'react';
import NavBar from './component/ui/NavBar';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../src/component/Container/Home'
import About from '../src/component/ui/About'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <NavBar/>
          <Route exact path='/' component={Home}/>
          <Route path='/About' component={About}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
