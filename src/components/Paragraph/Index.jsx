import img1 from '../../assets/images/review1.jpeg';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Para() {
    useEffect(() => {
        var clutter = "";
        const para = document.querySelector(".textpara")
        const characters = para.textContent.split("")
        characters.forEach(function(e) {
            
            clutter += `<span>${e}</span>`
        })
        para.innerHTML = clutter;   
        gsap.set(".textpara span", {opacity: .1})
        gsap.to(".textpara span", {
            scrollTrigger: {
                trigger: ".para",
                start: "top 70%",
                end: "bottom 90%",
                scrub: 1,
            },
            opacity: 1, 
            stagger: .03,
            
        })
    },[]);

    

  return (
    <div data-color="white" className="para section w-full flex items-center justify-center px-4 sm:px-8 py-8 sm:py-0">
        <div className="text w-full sm:w-[80%] flex flex-col items-center sm:items-start justify-between">
            <div className='hidden w-full sm:w-[50%] sm:flex items-center justify-center mb-12'>
                <hr className='bg-zinc-400 w-[20%] h-[.3vh]' />
            </div>    
            <h3 className='textpara w-full sm:w-[50%] text-purple-600 font-[Sansita] tracking-wide text-[2vh] sm:text-[3.5vh] font-medium text-center leading-[3vh] sm:leading-[5vh] mb-6 sm:mb-10 px-4 sm:px-0'>A Helpu entregou muito mais do que um site. Desde o primeiro contato, percebi que eles tinham algo de diferente, mas a real diferença eu percebi quando nossos leads nos trouxeram um resultado de mais de 200mil a mais de faturamento logo no segundo mês. Eles criaram uma experiência que realmente converte. Recomendo sempre que posso!</h3>
            <div className="pers w-full sm:w-[50%] flex flex-col items-center justify-center gap-2">
                <h1 className='text-[2.4vh] sm:text-[3.8vh] font-medium'>Mariana Souza</h1>
            </div>
        </div>  
    </div>
  )
}

export default Para
