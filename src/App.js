import React from 'react'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Header />
    </div>
  )
}

export default App;