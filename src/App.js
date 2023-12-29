import React from 'react';
import './app.css';
import Topbar from './component/topbar/Topbar';
import Homepage from './pages/Homepage/Homepage';
import Post from './pages/Post/Post';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Posts from './component/posts/Posts';

function App() {
  return (
    
      <div className="App">
        <Topbar />
         <Homepage />
  
      </div>
    
  );
}

export default App;