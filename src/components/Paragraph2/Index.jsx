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
    <div data-color="white" className="para2 section w-full flex items-center mt-12 sm:mt-16 lg:mt-24 px-4 sm:px-6 lg:px-8
    justify-center py-12 sm:py-16 lg:py-20">
        <div className="text w-full lg:w-[80%] flex flex-col items-center lg:items-end justify-center">
            <div className='hidden lg:w-[40%] lg:flex items-center justify-center mb-8 lg:mb-12'>
                <hr className='bg-zinc-400 w-[20%] h-[.3vh]' />
            </div>    
            <h3 className='textpara2 w-full lg:w-[40%] text-purple-600 font-[Sansita] text-lg sm:text-xl lg:text-2xl font-medium text-center tracking-wide leading-relaxed mb-6 lg:mb-10 px-4 lg:px-0'>Eu já tinha trabalhado com outras agências antes, mas nunca vi nada parecido com o que a Helpu fez. O site que eles criaram para nós não é só visualmente impressionante, ele trabalha 24/7 como nosso melhor vendedor.</h3>
            <div className="pers w-full lg:w-[40%] flex flex-col items-center justify-center gap-2">
                <h1 className='text-xl sm:text-2xl lg:text-3xl font-medium'>Carlos Mendes</h1>
            </div>
        </div>  
    </div>
  )
}

export default Para2
