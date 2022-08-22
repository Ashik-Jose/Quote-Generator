import './App.css';
import React from 'react';
import Home from './Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {


  return (

    <Router>
      <Routes>
      <Route path='/' exact element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
