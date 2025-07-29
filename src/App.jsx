import './App.css'
import Capsule from './components/Capsule/Index'
import Craft from './components/Craft/Index'
import { useEffect, useRef } from 'react';
import Home from './components/Home/Index'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Para from './components/Paragraph/Index'
import Para2 from './components/Paragraph2/Index'
import Real from './components/Real/Index'
import Team from './components/Team/Index'
import Footer from './components/Footer/Index';

function App() {

  useEffect(() => {
    const list = document.querySelectorAll('.section')
    list.forEach(function(e) {
      ScrollTrigger.create({
        trigger: e,
        start: "top 90%",
        end: "bottom 90%",
        onEnter: function(){
          document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: function() {
          document.body.setAttribute("theme", e.dataset.color);
        }
      })
    })
  })
      


  return (
    
    <div className='section main w-full overflow-x-hidden'>
      <Home  />
      <Craft />
      <Real />
      <Team  />
      <Para  />
      <Para2 />
      <Capsule />
      <Footer />
    </div>    
  )
}

export default App
