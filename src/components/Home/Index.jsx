import video from '../../assets/video/1ENIoa5sjq.mp4'
import Row from '../Row'
import {useEffect, useState, useRef} from 'react';
import {motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { gsap } from "gsap";
import styles from './Style.module.css';
import { Power2, Power4 } from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { BiMenu } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);

gsap.set(".slidesm", {scale: 5})

function Home() {

    const container = useRef(null);

    useEffect(() => {
        var clutter = "";
        const para = document.querySelector(".toptext")
        const characters = para.textContent.split("")
        characters.forEach(function(e) {
            
            clutter += `<span>${e}</span>`
        })
        para.innerHTML = clutter;   
        gsap.set(".toptext span", {opacity: .1})
        gsap.to(".toptext span", {
            scrollTrigger: {
                trigger: ".home",
                start: "top 50%",
                end: "bottom 90%",
                scrub: 1,
            },
            opacity: 1, 
            stagger: .03,
            
        })
    },[]);

    
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: .5,
            }
         });
         tl.to(".vdodiv", {
            clipPath: 'circle(0% at 50% 50%)',
            ease: Power4,
          }, "start")
          tl.to(".slidesm", {
            scale: 1,
            ease: Power2,
         }, 'start');
         tl.to(".lft", {
            xPercent: -10,
            stagger: .03,
            ease: Power4,
            duration: 1,
         }, 'start');
         tl.to(".rgt", {
            xPercent: 10,
            stagger: .03,
            ease: Power4,
            duration: 1,
         }, 'start');           
    }, container )

    const {scrollY} = useScroll();
    const [hidden, setHidden] = useState(false);
  
    useMotionValueEvent(scrollY, "change", (latest) => {

        const previous = scrollY.getPrevious() ?? 0;
        console.log(previous, latest);

        if(latest > previous) {
        setHidden(true);
        }
        else {
        setHidden(false);
        }
    });
   
    
    return (
    <div ref={container} data-color="black" className="home section w-full h-[200vh] relative  ">
        <div className='w-full sticky top-0 left-0 '>
            {/* navbar */}
            <motion.div 
                variants={{
                visible: {y: 0},
                hidden: {y: "-100%"},
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{duration: 0.35, ease: "easeInOut"}}
                className="section w-[100vw] sm:w-full px-6 fixed top-0 left-0 z-[9]"
            >
                <div className="w-full flex sm:flex items-center justify-between  ">
                    <div className="logo w-[12vh] h-[12vh] sm:w-[16vh] sm:h-[10vh] cursor-pointer z-[9] ">
                        {/* logo */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 141 41" fill="none">
                            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="24" fontWeight="bold" fill="currentColor">
                                Helpu
                            </text>
                        </svg>
                    </div>                   
                    <div className="sm:hidden block">
                        <BiMenu className="text-white text-3xl" />
                    </div>
                </div>
            </motion.div>
            
            {/* video */}
            <div className="vdodiv w-full h-screen absolute top-0 left-0 overflow-hidden" style={{clipPath: 'circle(70% at 50% 50%)'}}>
                <video 
                    autoPlay 
                    loop 
                    muted 
                    className="w-full h-full object-cover"
                    src={video}
                ></video>
            </div>
            <div className="slidesm h-screen w-full relative z-[2] bg-black flex flex-col items-center justify-center text-white px-8">
                <div className="text-content text-center max-w-4xl">
                    <h1 className="toptext font-[SansitaReg] text-[4vh] sm:text-[8vh] leading-[4.5vh] sm:leading-[9vh] mb-6 sm:mb-8">
                        Sites Que Não Entediam. Experiências Que Convertem.
                    </h1>
                    <p className="font-[Sansita] text-[2vh] sm:text-[2.4vh] leading-[2.8vh] sm:leading-[3.6vh] mb-8 sm:mb-12 opacity-80 px-4 sm:px-0">
                        Chega de sites mornos que ninguém lembra. Criamos experiências imersivas que transformam visitantes em clientes apaixonados.
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-4 justify-center text-[1.6vh] sm:text-[1.8vh] font-[Sansita] mb-8 sm:mb-12">
                        {["imersivo", "memorável", "persuasivo"].map((word, index) => (
                            <span key={index} className="lft text-[#8B5CF6] font-semibold">
                                {word}
                            </span>
                        ))}
                        {["conversivo", "impactante", "irresistível"].map((word, index) => (
                            <span key={index} className="rgt text-[#8B5CF6] font-semibold">
                                {word}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Row />
    </div>
    )
}

export default Home