import React from 'react';
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Content from "./components/content/Content.jsx";
import BottomNav from "./components/BottomNav/BottomNav.jsx";
import Login from "./components/pages/Login/Login.jsx";

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
