import React from 'react'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Activity from './components/activities/Activity';
import Deals from './components/deals/Deals';
import Vacation from './components/vacation plans/Vacation';

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Header />
      <Activity />
      <Deals />
      <Vacation />
    </div>
  )
}

export default App;