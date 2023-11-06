// Import necessary components and libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import HomeMain from "./components/HomeMain"




export default function AppRouter() {
  return (
    <div>
    
      <Router>
        <Routes>
    
          <Route path="/" element={<HomeMain />} />
          

        </Routes>     
      </Router>

    </div>
  );
}
