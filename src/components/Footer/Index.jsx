
import styles from './Style.module.css';
import { LuArrowUpRight } from "react-icons/lu";
import Button from  '../Button'

function Footer() {
  const whatsappNumber = "5517996533627";
  const message = "Vi seu site tenho interesse em entender mais";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  return (
    <div className="section w-full sm:mt-30 ">
      <div className="topfoot bg-[#8B5CF6] pt-12 pb-12 sm:pt-16 sm:pb-16 flex flex-col sm:flex-row items-center justify-between">
        <div className="left w-full sm:w-1/2 px-4 sm:px-8 mb-8 sm:mb-0">
          <div className="first order-1 font-[SansitaReg] text-[4vh] leading-[4.5vh] sm:text-[4.2rem] w-full sm:w-1/3 sm:leading-[5rem] mb-6 sm:mb-10">
            <h1 className="text-white">Seu Site Não Deveria Entediar.</h1>
          </div>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className='middle order-3 sm:order-2 w-full sm:w-fit text-center px-4 py-3 sm:px-4 sm:py-[1.6vh] bg-[--black] text-white whitespace-nowrap'
          >
            <div 
              className= {`${styles.masker} flex items-center 
              gap-2 overflow-hidden 
              relative cursor-pointer`}
            >
              <span 
                className={`${styles.spanMask} font-[Sansita] 
                text-[1.8vh] sm:text-[2.1vh] capitalize tracking-normal 
                font-semibold `}
              >
                FAZER MEU SITE
              </span>
              <LuArrowUpRight 
                style={{
                  fontSize: "24px", 
                  color: "white", 
                }} 
                className={`${styles.iconMask}`} 
              /> 
            </div>
          </a>
        </div>

        <div className="right order-2 sm:order-3 flex w-full sm:w-1/2 items-center justify-between px-4 sm:px-10">
          <div className="rght1 w-full sm:w-2/3 flex flex-col items-center sm:items-end">
            <h3 className="text-[1.8vh] sm:text-[1.4rem] font-[Sansita] font-medium text-white text-center sm:text-right">
              Vamos criar uma experiência digital que faça
              seus clientes pararem, prestarem atenção e
              tomarem ação. Porque experiências incríveis convertem.
            </h3>
          </div>
          <div className="hidden sm:inline-block rght2 relative w-[150px] h-[150px] overflow-hidden">
            <div className={`${styles.loopFoot} `}></div>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="icon w-[120px] h-[120px] rounded-full border-black border-[1px] px-10 py-10 absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 overflow-hidden"
            >
              <div className="w-10 h-10 absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2">
                <svg width="100%" height="100%" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 0.703124C16 9.53968 8.83656 16.7031 0 16.7031" stroke="black" strokeWidth="2"></path>
                  <path d="M16 0.703124C16 9.53968 23.1634 16.7031 32 16.7031" stroke="black" strokeWidth="2"></path>
                  <path d="M16 0.703125L16 37.2746" stroke="currentColor" strokeWidth="2"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>


      <div className="downfoot w-full h-fit bg-[var(--black)] px-4 sm:px-8 py-8 sm:py-32">
        <div className='flex flex-col sm:flex-row sm:items-start justify-between space-y-6 sm:space-y-0 sm:space-x-4'>
          <div className=' hidden sm:inline-block '>
            {["Home", "Soluções", "Sobre", "Equipe", "Contato"].map((item, index) => {
              return (
                <div key={index} className='pb-4'>
                  <h3 className='font-[SansitaReg] text-[2.5vh] text-white font-semibold'>
                    {item}
                  </h3>  
                </div>
              ) 
            })}
          </div>
          <div className='w-full sm:w-auto'>
            <h1 className='text-white pb-6 sm:pb-10 font-[SansitaReg] text-[2.2vh] sm:text-[2.8vh] font-semibold text-center sm:text-left'>Receba cases e dicas que realmente convertem.</h1>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input 
                type="text" 
                placeholder="Digite seu endereço de email" 
                className="bg-[var(--light)] w-full sm:w-[350px] h-[5vh] sm:h-[5.9vh] px-4 text-[1.8vh] sm:text-[2vh]"
              />
              <Button text="INSCREVER-SE" bgColor="bg-[#8B5CF6]" />
            </div>
            </div>
          <div className=' hidden sm:inline-block '>
            {["Cases", "Blog", "Recursos", "Vagas", "Contato"].map((item, index) => {
              return (
                <div key={index} className='pb-4'>
                  <h3 className='font-[SansitaReg] text-[2.5vh] text-white font-semibold'>
                    {item}
                  </h3>  
                </div>
              ) 
            })}
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Footer
