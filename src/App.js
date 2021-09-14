import React from 'react';
import './App.module.css';
import Body from './componentes/Body';
import Footer from './componentes/Footer';
import Sidebar from './componentes/Sidebar';



function App() {
  
  return (
    <div>
    <div className="fuzzyBody">  
      <Sidebar />
      <Body />
      </div>
      <Footer />
      </div>
  );
}

export default App;
