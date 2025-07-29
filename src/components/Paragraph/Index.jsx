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
    <div data-color="white" className="para section w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text w-full lg:w-[80%] flex flex-col items-center lg:items-start justify-between">
            <div className='hidden lg:w-[50%] lg:flex items-center justify-center mb-8 lg:mb-12'>
                <hr className='bg-zinc-400 w-[20%] h-[.3vh]' />
            </div>    
            <h3 className='textpara w-full lg:w-[50%] text-purple-600 font-[Sansita] tracking-wide text-lg sm:text-xl lg:text-2xl font-medium text-center leading-relaxed mb-6 lg:mb-10 px-4 lg:px-0'>A Helpu entregou muito mais do que um site. Desde o primeiro contato, percebi que eles tinham algo de diferente, mas a real diferença eu percebi quando nossos leads nos trouxeram um resultado de mais de 200mil a mais de faturamento logo no segundo mês. Eles criaram uma experiência que realmente converte. Recomendo sempre que posso!</h3>
            <div className="pers w-full lg:w-[50%] flex flex-col items-center justify-center gap-2">
                <h1 className='text-xl sm:text-2xl lg:text-3xl font-medium'>Mariana Souza</h1>
            </div>
        </div>  
    </div>
  )
}

export default Para
