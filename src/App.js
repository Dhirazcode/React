import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './component/Header'; 
import Home from './component/Home';
import  {Footer}  from './component/Footer';
import  Contact  from './component/Contact';
import Services from "./component/Services";

import "./styles/header.scss";
import "./styles/app.scss";
import "./styles/Home.scss";
import "./styles/footer.scss";
import "./styles/Contact.scss";
import "./styles/mediaquery.scss"


const App = () => {
   return (
      <Router>
         <Header/>  
         {/* <Home/> */}
         <Routes>
            <Route path="/" element={<Home/>}/>;
            <Route path="/contact" element={<Contact/>}/>;
            <Route path="/services" element={<Services/>}/>;
         </Routes>
         <Footer/>
      </Router>
   );
};

export default App;
