//rafce
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
//import Dashboard from './Dashboard';
import '../../css/index.css';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/BlossomCafeFINAl/public/" element={<Home />}> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
  }