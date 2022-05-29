import React from 'react'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Activity from './components/activities/Activity';

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Header />
      <Activity />
    </div>
  )
}

export default App;