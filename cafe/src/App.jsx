import React, {useEffect} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import NavBar from './components/navbar/navbar';

// lo deje en el minuto 17:03 https://www.youtube.com/watch?v=VU2rjKwhY_s&t=276s

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
    </div>
  )
}

export default App;
