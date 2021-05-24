import React from 'react';
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Content from "./components/Content/Content";
import BottomNav from "./components/BottomNav/BottomNav.jsx";
import Login from "./components/pages/Login/Login";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Content />
      <BottomNav />
      {/* <Login /> */}
    </div>
  )
}

export default App
