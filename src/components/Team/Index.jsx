import List from "../List"
import Button from "../Button"



function Team() {

  return (
    <div data-color="white" className='team section font-[SansitaReg] py-12 sm:py-16 lg:py-20'>
      <div className="head1">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-center tracking-tight px-4 sm:px-0">
          Nosso Time
        </h1>
      </div>
      <div className="list mt-6 sm:mt-8 lg:mt-10 w-full px-4 sm:px-6 lg:px-8">
        {/* //single list */}
        <List />
        <div className='flex items-center justify-center py-8 sm:py-12 lg:py-16'>
          <Button bgColor="bg-[#8B5CF6]" text="CONHEÇA TODO O TIME" />
        </div>
      </div>
    </div>
  )
}

export default Team
