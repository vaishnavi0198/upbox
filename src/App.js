import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Socialpost from './Components/Socialpost/Socialpost';
import Pickplan from './Components/Pickplan/Pickplan';
import Work from './Components/Work/Work';
// import Banner from './Components/Banner/Banner';
 


function App() {
  return (
    <>
      <Navbar/>
      {/* <Banner /> */}
      <Pickplan />
      <Work />
      <Socialpost />
      <Footer />
    </>
    
  )
}



export default App;
