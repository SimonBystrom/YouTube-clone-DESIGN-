import React from 'react';
import './App.css';

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Categories from "./components/Categories"
import Content from "./components/Content"

function App() {
  return (
    <div className="GridContainer">
      <div className="Navbar">
        <Navbar></Navbar>
      </div>
      <div className="Sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="Categories">
        <Categories></Categories>
      </div>
      <div className="Content">
        <Content></Content>
      </div>
    </div>
  );
}

export default App;
