import './App.css';
import React from 'react';
import Home from './Home';
import Bookmarks from './Bookmarks';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Bookmarklist from './components/Bookmarks/bookmarklist';

function App() {


  return (

    <Router>
      <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/bookmarks' exact element={<Bookmarks/>}/>
      </Routes>
    </Router>
  );
}

export default App;
