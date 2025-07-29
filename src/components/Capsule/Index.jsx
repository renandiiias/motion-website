import Button from "../Button";
import {useRef} from 'react';
import cap1 from '../../assets/images/cap1.png';
import cap2 from '../../assets/images/cap2.jpg';
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
        });
        tl.to(".capsule:nth-child(1)", {
            marginTop: 32,
            ease: Power4
        });
    }, { scope: container });


  return (
    <div data-color="white" ref={container} className="capsules section w-full lg:h-auto 
        mb-12 sm:mb-16 lg:mb-24 flex flex-col lg:flex-row items-start justify-between mt-12 sm:mt-16 lg:mt-24 px-4 sm:px-6 lg:px-8 gap-8 lg:gap-20"
    >
        <div className="left w-full lg:w-1/3 h-full flex flex-col lg:justify-between py-6 lg:py-10 items-start">
            <h1 className="w-full lg:w-2/3 font-[Sansita] text-base sm:text-lg lg:text-xl leading-relaxed font-medium mb-6 lg:mb-8">
                Veja como criamos
                experiências que fazem
                a diferença no mundo
                real dos negócios.
            </h1>
            <div className="heading">
                <h1 className="font-[SansitaReg] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight py-4 lg:py-5">Nossos <br/> Cases</h1>
                <Button bgColor="bg-[#8B5CF6]" text="VER TODOS OS SITES" />
            </div>
        </div>
        <div className="right font-[SansitaReg] mt-6 lg:mt-10 w-full lg:w-2/3 space-y-8 lg:space-y-10 h-full flex flex-col lg:flex-row items-start justify-start gap-8 lg:gap-12">
            {/* 1st capsule */}
            <div   
                className="capsule flex flex-col items-center gap-4 p-4 sm:p-6 lg:-rotate-[16deg] lg:translate-y-10
                rounded-full border-[1px] border-black w-full lg:w-auto">
                <div className="image w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden">
                    <img className="h-full w-full object-cover" src={cap1} />
                </div>
                <div className="text text-center text-lg sm:text-xl lg:text-2xl font-semibold mt-6 lg:mt-10 leading-tight">
                    <h3>
                        Case de Sucesso <br/>
                        em Conversão <br/> 
                        Digital
                    </h3>
                </div>
                <a 
                  href="https://wa.me/5517996533627?text=Vi%20seu%20site%20tenho%20interesse%20em%20entender%20mais"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#8B5CF6] text-white px-4 rounded-full text-sm sm:text-base py-2 sm:py-3 mb-6 lg:mb-10 mt-6 lg:mt-10 font-semibold"
                >
                  Case de Sucesso
                </a>


            </div>
            {/* 2nd capsule */}
            <div   
                className="capsule flex flex-col items-center gap-4 p-4 sm:p-6 lg:-rotate-[16deg] lg:translate-y-40
                rounded-full border-[1px] border-black w-full lg:w-auto"
            >
                    <a 
                      href="https://wa.me/5517996533627?text=Vi%20seu%20site%20tenho%20interesse%20em%20entender%20mais"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#8B5CF6] text-white px-4 rounded-full text-sm sm:text-base py-2 sm:py-3 mb-4 sm:mb-6 mt-6 lg:mt-10 font-semibold"
                    >
                      Case de Sucesso
                    </a>
                
                <div className="text text-center text-lg sm:text-xl lg:text-2xl flex flex-col gap-4 sm:gap-6 mb-4 sm:mb-6 font-semibold leading-tight">
                    <h3>
                        E-commerce Que Não <br/>
                        Vende, Seduz: Como <br/>Aumentamos 850% as <br/>Conversões
                    </h3>
                    <h4 className="text-sm sm:text-base lg:text-lg leading-relaxed">
                        A história de como um design estratégico <br/> e uma experiência imersiva transformaram <br/>
                        visitantes curiosos em clientes fiéis
                    </h4>
                </div>
                <div className="image w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden">
                    <img className="h-full w-full object-cover" src={cap2} />
                </div>
                

            </div>
        </div>
    </div>
  );
}

export default Capsule;

