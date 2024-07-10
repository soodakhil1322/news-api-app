import React from 'react'
import './App.css';
import { HashRouter,Route,Routes } from 'react-router-dom';
import Home from './Home'


function App() {
 
return (
<HashRouter>
  <Routes>
    <Route path='/' element={<Home/>} >

    </Route>
  </Routes>
</HashRouter>
);

}

export default App;
