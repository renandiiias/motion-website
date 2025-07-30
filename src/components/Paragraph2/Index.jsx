import img1 from '../../assets/images/review2.jpg'
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



function Para2() {
    useEffect(() => {
        var clutter = "";
        const para = document.querySelector(".textpara2")
        const characters = para.textContent.split("")
        characters.forEach(function(e) {
           
            clutter += `<span>${e}</span>`
        })
        para.innerHTML = clutter;   
        gsap.set(".textpara2 span", {opacity: .1})
        gsap.to(".textpara2 span", {
            scrollTrigger: {
                trigger: ".para2",
                start: "top 60%",
                end: "bottom 90%",
                scrub: 1,
            },
            opacity: 1, 
            stagger: .03,   
        })
    },[]);
  return (
    <div data-color="white" className="para2 section w-full flex items-center mt-16 sm:mt-32 px-4 sm:px-8
    justify-center py-8 sm:py-0">
        <div className="text w-full sm:w-[80%] flex flex-col items-center sm:items-end justify-center">
            <div className='hidden w-full sm:w-[40%] sm:flex items-center justify-center mb-12'>
                <hr className='bg-zinc-400 w-[20%] h-[.3vh]' />
            </div>    
            <h3 className='textpara2 w-full sm:w-[40%] text-purple-600 font-[Sansita] text-[2vh] sm:text-[3.5vh] font-medium text-center tracking-wide leading-[3vh] sm:leading-[5vh] mb-6 sm:mb-10 px-4 sm:px-0'>Eu já tinha trabalhado com outras agências antes, mas nunca vi nada parecido com o que a Helpu fez. O site que eles criaram para nós não é só visualmente impressionante, ele trabalha 24/7 como nosso melhor vendedor.</h3>
            <div className="pers w-full sm:w-[40%] flex flex-col items-center justify-center gap-2">
                <h1 className='text-[2.4vh] sm:text-[3.8vh] font-medium'>Carlos Mendes</h1>
            </div>
        </div>  
    </div>
  )
}

export default Para2
