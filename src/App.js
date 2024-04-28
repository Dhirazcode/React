import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './component/Header'; 
import "./styles/header.scss"
import "./styles/app.scss"
import Home from './component/Home';
import "./styles/Home.scss"

const App = () => {
   return (
      <Router>
         <Header/>  
         <Home/>
         <Routes>
            <Route />
         </Routes>
      </Router>
   );
};

export default App;
