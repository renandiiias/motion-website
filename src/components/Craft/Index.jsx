
import Card from "../Card";
import Button from "../Button";
import {useRef, useEffect, useState} from 'react';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power4, } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

function Craft() {

    // const [isMobile, setIsMobile] = useState(false);
    const container = useRef(null);
    const textRef = useRef();

    // useEffect(() => {
    //     const handleResize = () => {
    //       setIsMobile(window.innerWidth <= 768);
    //     };
    
    //     // Attach the event listener
    //     window.addEventListener("resize", handleResize);
    
    //     // Clean up the event listener when the component unmounts
    //     return () => {
    //       window.removeEventListener("resize", handleResize);
    //     };
    //   }, [isMobile]);

    useEffect(() => {
        var clutter = "";
        const para = document.querySelector(".texthead")
        const characters = para.textContent.split("")
        characters.forEach(function(e) {
            if(e === " ") clutter += `<span>&nbsp;</span>`
            clutter += `<span>${e}</span>`
        })
        para.innerHTML = clutter;
        gsap.set('.texthead span', {display: 'inline-block'});
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: ".ltext",
            start: "top 100%",
            end: "bottom 50%",
            scrub: .5,
            
            }
        });
        tl.from('.texthead span', {
            y: 100,
            opacity: 0,
            duration: 0.5,
            stagger: .1, 

        }) 
    },[]);

    useGSAP(() => {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                trigger: ".cards",
                start: "top 10%",
                scrub: 1,   
                }
            });
            tl.fromTo('.card', {
                y: 600,
                scale: .9,
            }, {
                y: 0,
                scale: 1.1,
                duration: .5,
                ease: Power4,
                transformOrigin: "bottom 50% -50",
            });
        })                           
    }, container );

   
  return (
    <div 
        data-color="cyan" 
        className="craft section w-full flex flex-col lg:flex-row gap-8 lg:gap-x-20 justify-between 
          items-start px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative"
    >
        <div className="ltext w-full lg:sticky lg:top-[10%] left-0 lg:w-1/2 mb-8 lg:mb-0">
            <p 
                className="ptag font-[Sansita] text-base sm:text-lg lg:text-xl 
                font-medium leading-relaxed mb-6 lg:mb-8"
            >
                Somos a Helpu, e acreditamos que o seu site não deveria ser apenas mais um na multidão.
                Criamos experiências digitais que fazem as pessoas pararem, prestarem atenção e tomarem ação.
                Porque no final das contas, experiências incríveis geram mais leads, mais vendas e mais sucesso.
            </p>
            <h1 className="texthead font-[SansitaReg] text-3xl sm:text-4xl lg:text-6xl xl:text-7xl leading-tight mt-6 mb-6 lg:mt-10 lg:mb-10">
                Sites Que Não Entediam.<br/>
                Experiências Que Convertem.
            </h1>
            {/* button */}
            <Button  bgColor="bg-none" text="NOSSOS SITES" />
        </div>
        <div
            ref={container} 
            className="right cards w-full lg:w-1/2 flex items-center justify-center">                
            <Card />
        </div>
    </div>
  )
}

export default Craft



