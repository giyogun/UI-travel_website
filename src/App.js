import React from 'react';
import './App.css';
import Activity from './components/activities/Activity';
import Blog from './components/blog/Blog';
import Deals from './components/deals/Deals';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Testimonials from './components/testimonials/Testimonials';
import Vacation from './components/vacation plans/Vacation';

const App = () => {
  return (
    <>
      <div className='main'>
      <Navbar />
      <Header />
      <Activity />
      <Deals />
      <Vacation />
      <Testimonials />
      <Blog />
      <Footer />
      </div>
    </>
  )
}

export default App;