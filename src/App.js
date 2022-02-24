import React from "react";
import "./App.css";
import { db } from "./firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import CardComponent from "./Components/CardComponent";

// REACT - ROUTER - DOM
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//views

import Home from "./Views/Home/Home";
import About from "./Views/Contact/Contact";
import Contact from "./Views/About/About";

function App() {
  
  

  return (
    <Router>
      <div className="App">
        {celularesData.map((data) => {
          return <CardComponent celularesData={data} key={data.id} />;
        })}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
