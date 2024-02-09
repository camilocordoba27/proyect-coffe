import React, {useEffect} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import NavBar from './components/navbar/navbar';
import Home from './components/home/home.jsx'
import Services from './components/services/services.jsx';


const App = () => {
  useEffect (() => {
    AOS.init(
      {
        offset: 100,
        duration: 700,
        easing: "ease-in",
        delay: 100
      }
    );
  })
  return (
    <div className='overflow-x-hidden'>
      <NavBar />
      <Home />
      <Services />
    </div>
  )
}

export default App;
