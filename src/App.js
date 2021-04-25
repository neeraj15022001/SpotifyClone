import React from 'react';
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Content from "./components/content/Content.jsx";
import BottomNav from "./components/BottomNav/BottomNav.jsx";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Content />
      <BottomNav />
    </div>
  )
}

export default App
