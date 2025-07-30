import Button from "../Button";
import {useRef} from 'react';
import cap1 from '../../assets/images/cap1.png';
import cap2 from '../../assets/images/cap2.jpg'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { Power4} from 'gsap/gsap-core';
gsap.registerPlugin(ScrollTrigger);

 function Capsule() {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: ".capsules",
            start: "top 60%",
            end: "bottom bottom",
            scrub: .5,
            }
        });
        tl.to(".capsule:nth-child(2)", {
            y: 0,
            marginTop:32,
            ease: Power4
        })
        tl.to(".capsule:nth-child(1)", {
            marginTop: 32,
            ease: Power4
        })
    }, container);


  return (
    <div data-color="white" ref={container} className="capsules section w-full sm:h-[115vh] 
        sm:overflow-hidden mb-16 sm:mb-32 flex flex-col sm:flex-row items-start justify-between mt-16 sm:mt-60 px-4 sm:px-8 gap-8 sm:gap-40"
    >
        <div className="left w-full sm:w-1/3 h-full flex flex-col sm:justify-between py-6 sm:py-10 items-start">
            <h1 className="w-full sm:w-2/3 font-[Sansita] text-[2.2vh] sm:text-[2.8vh] leading-[3vh] sm:leading-[4vh] font-medium mb-6 sm:mb-0">
                Veja como criamos
                experiências que fazem
                a diferença no mundo
                real dos negócios.
            </h1>
            <div className="heading">
                <h1 className="font-[SansitaReg] text-[4vh] leading-[4.5vh] sm:text-[8vh] py-4 sm:py-5 sm:leading-[9vh]">Nossos <br/> Cases</h1>
                <Button bgColor="bg-[#8B5CF6]" text="VER TODOS OS SITES" />
            </div>
        </div>
        <div className="right font-[SansitaReg] mt-6 sm:mt-10 w-full sm:w-2/3 space-y-8 sm:space-y-10 h-full flex flex-col sm:flex-row items-start justify-start gap-8 sm:gap-20">
            {/* 1st capsule */}
            <div   
                className="capsule flex flex-col items-center gap-4 p-4 sm:p-6 sm:-rotate-[16deg] sm:translate-y-10
                rounded-full border-[1px] border-black w-full sm:w-auto">
                <div className="image w-[60vw] h-[60vw] sm:w-[40vh] sm:h-[40vh] rounded-full overflow-hidden">
                    <img className="h-full w-full object-cover" src={cap1} />
                </div>
                <div className="text text-center text-[4vw] sm:text-[3.2vh] font-semibold mt-6 sm:mt-10 leading-[3vh] sm:leading-[4.8vh]">
                    <h3>
                        Case de Sucesso <br/>
                        em Conversão <br/> 
                        Digital
                    </h3>
                </div>
                <button className="bg-[#8B5CF6] text-white px-4 rounded-full text-medium py-3 mb-10 mt-10 font-semibold">Case de Sucesso</button>
                <a 
                  href="https://wa.me/5517996533627?text=Vi%20seu%20site%20tenho%20interesse%20em%20entender%20mais"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#8B5CF6] text-white px-4 rounded-full text-sm sm:text-medium py-2 sm:py-3 mb-6 sm:mb-10 mt-6 sm:mt-10 font-semibold"
                >
                  Case de Sucesso
                </a>


            </div>
            {/* 2nd capsule */}
            <div   
                className="capsule flex flex-col items-center gap-4 p-4 sm:p-6 sm:-rotate-[16deg] sm:translate-y-40
                rounded-full border-[1px] border-black w-full sm:w-auto"
            >
                    <a 
                      href="https://wa.me/5517996533627?text=Vi%20seu%20site%20tenho%20interesse%20em%20entender%20mais"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#8B5CF6] text-white px-4 rounded-full text-sm sm:text-medium py-2 sm:py-3 mb-4 sm:mb-6 mt-6 sm:mt-10 font-semibold"
                    >
                      Case de Sucesso
                    </a>
                
                <div className="text text-center text-[2.4vh] sm:text-[3.2vh] flex flex-col gap-4 sm:gap-6 mb-4 sm:mb-6 font-semibold leading-[3vh] sm:leading-[4.8vh]">
                    <h3>
                        E-commerce Que Não <br/>
                        Vende, Seduz: Como <br/>Aumentamos 850% as <br/>Conversões
                    </h3>
                    <h4 className="text-[1.8vh] sm:text-[2.2vh] leading-[2.4vh] sm:leading-[3vh]">
                        A história de como um design estratégico <br/> e uma experiência imersiva transformaram <br/>
                        visitantes curiosos em clientes fiéis
                    </h4>
                </div>
                <div className="image w-[60vw] h-[60vw] sm:w-[40vh] sm:h-[40vh] rounded-full overflow-hidden">
                    <img className="h-full w-full object-cover" src={cap2} />
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Capsule

