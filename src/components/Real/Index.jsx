
import img1 from '../../assets/images/real4.jpg'
import img2 from '../../assets/images/real2.jpg'
import img3 from '../../assets/images/real3.jpg'
import img4 from '../../assets/images/real1.jpg'
import img5 from '../../assets/images/real5.jpg'
import icon1 from '../../assets/images/icon1.png';
import icon2 from '../../assets/images/icon2.png';
import icon3 from '../../assets/images/icon3.png';
import img6 from '../../assets/images/real6.jpg'
import img7 from '../../assets/images/real7.jpg'
import img8 from '../../assets/images/real8.jpg'
import img9 from '../../assets/images/real9.jpg'
import { useRef} from 'react';
import { gsap } from "gsap";
import { Power2,} from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Real() {

    const container = useRef(null);
    
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3,
            }
         });
         tl.to(".slide", {
            xPercent: -300,
            ease: Power2
         })
         tl.to(".image7", {
            opacity: 0,
         })              
    }, container );


  return (
    <div  
        data-color="salmon" 
        ref={container} 
        className="real section w-full px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-24"
    >
      <div 
        className="cont h-[300vh] sm:h-[350vh] lg:h-[400vh] relative"
    >
        <div  
            className="slides w-full h-screen overflow-hidden
             sticky top-0 left-0 flex"
        >
            {/* 1st slide */}
            <div 
                className="slide w-full flex flex-col sm:flex-row items-center 
                justify-center h-screen flex-shrink-0 "
            >
                
                <div 
                    className="text1 font-[SansitaReg] text-4xl sm:text-5xl lg:text-7xl xl:text-8xl leading-tight text-center lg:text-left
                    mb-6 lg:mb-0"
                >
                    <h1 className="">
                        Resultados Reais,    
                    </h1>
                    <h1 className="">
                        Clientes Reais
                    </h1>
                </div>
                <div 
                    className="image relative lg:absolute w-32 h-32 sm:w-40 sm:h-40 lg:w-60 lg:h-60 
                    lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-1/2 lg:right-0"
                >
                    <img 
                        src={img1}
                        className="w-full h-full object-contain rounded-full"
                    />

                </div>
            </div>
            {/* 2nd slide */}
            <div   
                className="slide w-full h-screen flex flex-col sm:flex-row items-center 
                justify-center flex-shrink-0 relative "
            >
                <div 
                    className="image absolute w-20 h-20 sm:w-32 sm:h-32 lg:w-48 lg:h-48 
                    top-4 lg:top-10 right-4 lg:right-1/6 lg:-translate-y-1/2"
                >
                    <img 
                        src={img2}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div className='w-[90%] lg:w-[60%] text-center font-[SansitaReg] relative px-4 lg:px-0'>
                    <h3 
                        className='font-[Sansita] w-full lg:w-1/3 text-center lg:text-left font-semibold 
                        tracking-tight text-sm sm:text-base lg:text-lg mb-4 lg:mb-0 lg:absolute lg:top-0 lg:left-0 z-[3] 
                        lg:-translate-y-1/2 lg:-translate-x-1/3'
                    >
                        Não são apenas números. São negócios que cresceram, marcas que se destacaram e pessoas que realizaram seus sonhos através de sites que realmente funcionam.
                    </h3>
                    <h1 className='font-semibold text-6xl sm:text-7xl lg:text-9xl leading-none text-white'>
                        847
                    </h1>
                    <h3 className='text-xl sm:text-2xl lg:text-4xl font-semibold leading-tight px-2 lg:px-0'>
                        Sites entregues que não entediam ninguém.
                    </h3>    
                </div>
                <div 
                    className="image absolute w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bottom-20 left-4
                    lg:top-2/3 lg:left-1/4 lg:-translate-x-1/2"
                >
                    <img 
                        src={img4}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute w-32 h-32 sm:w-40 sm:h-40 lg:w-60 lg:h-60 
                    lg:bottom-0 lg:right-1/6 right-0 lg:-translate-x-2/3 lg:translate-y-1/2
                    translate-y-20"
                >
                    <img 
                        src={img3}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute w-32 h-32 sm:w-40 sm:h-40 lg:w-60 lg:h-60 top-10 -right-2/3 lg:top-1/2 
                    lg:-translate-y-1/2 lg:translate-x-1/2
                    lg:right-0 "
                >
                    <img 
                        src={img5}
                        className="w-full h-full object-contain rounded-full"
                    />

                </div>
            </div>
            
            {/* 3rd slide */}
            <div 
                className="slide w-full h-screen flex sm:flex items-center justify-center 
                flex-shrink-0  relative"
            >
                <div 
                    className="image absolute w-32 h-32 sm:w-40 sm:h-40 lg:w-60 lg:h-60  
                    lg:top-20 lg:-translate-x-1/5 bottom-20 right-20
                    lg:-translate-y-1/2 lg:right-1/6"
                >
                    <img 
                        src={icon2}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div className='w-[80%] lg:w-[60%] text-center font-[SansitaReg] relative'>
                    <h1 className=' font-semibold text-6xl sm:text-7xl lg:text-9xl leading-none text-white'>
                        100%
                    </h1>
                    <h3 className='text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight'>
                        Focados em Converter.
                    </h3>    
                </div>
                <div 
                    className="image absolute w-48 h-48 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bottom-10 right-2/4 
                    translate-y-1/3 -translate-x-1/5"
                >
                    <img 
                        src={icon1}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="hidden lg:inline-block image absolute w-32 h-32 lg:w-64 lg:h-64 top-1/2 -translate-y-1/4 translate-x-1/3
                    right-0 "
                >
                    <img 
                        src={icon3}
                        className="w-full h-full object-contain rounded-full"
                    />

                </div>
            </div>

            {/* 4th slide */}
            <div 
                className="slide w-full h-screen flex  sm:flex items-center justify-center 
                relative flex-shrink-0 "
            >
                <div 
                    className="hidden lg:inline-block image absolute w-32 h-32 lg:w-48 lg:h-48 top-10 translate-x-1/2
                    -translate-y-1/2 right-2/3"
                >
                    <img 
                        src={img6}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div className='w-[80%] lg:w-[60%] text-center font-[SansitaReg] relative'>                   
                    <h1 className=' font-semibold text-6xl sm:text-7xl lg:text-9xl leading-none text-white'>
                        98%
                    </h1>
                    <h3 className='text-xl sm:text-2xl lg:text-4xl font-semibold leading-tight'>
                        Taxa de Satisfação dos <br/> Nossos Clientes.
                    </h3>    
                </div>
                <div 
                    className="image7 absolute w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 bottom-0 right-2/4 
                    translate-y-1/2 -translate-x-1/2"
                >
                    <img 
                        src={img7}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute top-0 -right-10 w-32 h-32 sm:w-40 sm:h-40 lg:w-60 lg:h-60 lg:top-0 lg:translate-y-1/5
                    lg:translate-x-2/3  lg:right-0 "
                >
                    <img 
                        src={img9}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute w-20 h-20 sm:w-24 sm:h-24 top-2/3 translate-y-1/5
                    -translate-x-1/3  right-1/4 "
                >
                    <img 
                        src={img8}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
            </div>   
        </div>
      </div>
    </div>
  )
}

export default Real;
