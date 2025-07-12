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
    <div data-color="white" className="para section w-full flex items-center justify-center px-8  ">
        <div className="text sm:w-[80%] flex flex-col items-center sm:items-start justify-between ">
            <div className='hidden w-[50%] sm:flex items-center justify-center mb-12'>
                <hr className='bg-zinc-400 w-[20%] h-[.3vh]' />
            </div>    
            <h3 className='textpara sm:w-[50%] text-blue-600 font-[Sansita] tracking-wide text-[2.4vh] sm:text-[3.5vh] font-medium text-center leading-[5vh] mb-10'>Working with the Significo team has been such a pleasure! We took on a significant project to rebuild our entire platform and the team approached the project with our best interests in mind. They continue to prioritize the end user experience and offer amazing expertise in all of the areas we lack internally. I would personally be lost without this team, their ability to problem solve, their openness to feedback and desire to build the product like it is their own.</h3>
            <h3 className='textpara sm:w-[50%] text-purple-600 font-[Sansita] tracking-wide text-[2.4vh] sm:text-[3.5vh] font-medium text-center leading-[5vh] mb-10'>Trabalhar com a equipe da nossa agência tem sido um verdadeiro prazer! Assumimos um projeto significativo para reconstruir toda nossa plataforma e a equipe abordou o projeto sempre pensando no nosso melhor interesse. Eles continuam priorizando a experiência do usuário final e oferecem expertise incrível em todas as áreas que nos faltam internamente. Eu pessoalmente estaria perdido sem esta equipe, sua capacidade de resolver problemas, abertura ao feedback e desejo de construir o produto como se fosse deles.</h3>
            <div className="pers w-[50%] flex flex-col items-center justify-center gap-2 ">
                <div className="image w-24 h-24 overflow-hidden rounded-full ">
                    <img src={img1} />
                </div>
                <h1 className=' text-[2.8vh] sm:text-[3.8vh] font-medium'>Roberto Fernandes</h1>
                <h3 className='text-zinc-500 text-[2.4vh] whitespace-nowrap'>Gerente de Produto @ TechFlow360</h3>
            </div>
        </div>  
    </div>
  )
}

export default Para
