
import styles from './Style.module.css';
import { LuArrowUpRight } from "react-icons/lu";
import Button from  '../Button'

function Footer() {
  const whatsappNumber = "5517996533627";
  const message = "Vi seu site tenho interesse em entender mais";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  return (
    <div className="section w-full">
      <div className="topfoot bg-[#8B5CF6] pt-12 pb-12 sm:pt-16 sm:pb-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="left w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 mb-8 lg:mb-0">
          <div className="first order-1 font-[SansitaReg] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight w-full lg:w-2/3 mb-6 lg:mb-10">
            <h1 className="text-white">Seu Site Não Deveria Entediar.</h1>
          </div>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className='middle order-3 lg:order-2 w-full lg:w-fit text-center px-4 py-3 lg:px-4 lg:py-4 bg-black text-white whitespace-nowrap'
          >
            <div 
              className= {`${styles.masker} flex items-center 
              gap-2 overflow-hidden 
              relative cursor-pointer`}
            >
              <span 
                className={`${styles.spanMask} font-[Sansita] 
                text-base sm:text-lg capitalize tracking-normal 
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

        <div className="right order-2 lg:order-3 flex w-full lg:w-1/2 items-center justify-between px-4 sm:px-6 lg:px-10">
          <div className="rght1 w-full lg:w-2/3 flex flex-col items-center lg:items-end">
            <h3 className="text-base sm:text-lg lg:text-xl font-[Sansita] font-medium text-white text-center lg:text-right">
              Vamos criar uma experiência digital que faça
              seus clientes pararem, prestarem atenção e
              tomarem ação. Porque experiências incríveis convertem.
            </h3>
          </div>
          <div className="hidden lg:inline-block rght2 relative w-[150px] h-[150px] overflow-hidden">
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


      <div className="downfoot w-full h-fit bg-black px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-24">
        <div className='flex flex-col lg:flex-row lg:items-start justify-between space-y-6 lg:space-y-0 lg:space-x-4'>
          <div className=' hidden lg:inline-block '>
            {["Home", "Soluções", "Sobre", "Equipe", "Contato"].map((item, index) => {
              return (
                <div key={index} className='pb-4'>
                  <h3 className='font-[SansitaReg] text-lg text-white font-semibold'>
                    {item}
                  </h3>  
                </div>
              ) 
            })}
          </div>
          <div className='w-full lg:w-auto'>
            <h1 className='text-white pb-6 lg:pb-10 font-[SansitaReg] text-lg sm:text-xl font-semibold text-center lg:text-left'>Receba cases e dicas que realmente convertem.</h1>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-0">
              <input 
                type="text" 
                placeholder="Digite seu endereço de email" 
                className="bg-white w-full lg:w-[350px] h-12 lg:h-14 px-4 text-base"
              />
              <Button text="INSCREVER-SE" bgColor="bg-[#8B5CF6]" />
            </div>
          </div>
          <div className='hidden lg:inline-block'>
            {["Cases", "Blog", "Recursos", "Vagas", "Contato"].map((item, index) => {
              return (
                <div key={index} className='pb-4'>
                  <h3 className='font-[SansitaReg] text-lg text-white font-semibold'>
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
