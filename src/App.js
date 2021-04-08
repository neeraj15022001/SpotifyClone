import React from 'react';
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Content from "./components/content/Content.jsx";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  )
}

export default App
