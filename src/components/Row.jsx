import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
import img5 from '../assets/images/img5.png';
import img6 from '../assets/images/img6.png';
import img7 from '../assets/images/img7.png';


import PropTypes from 'prop-types';

function Row({ translateClass, direction }) {

    const items = [
        { text: "imersivo", image: img7 },
        { text: "memorável", image: img2 },     
        { text: "persuasivo", image: img3 },     
        { text: "conversivo", image: img4 },     
        { text: "impactante", image: img5 },
        { text: "irresistível", image: img2 },
        { text: "imersivo", image: img4 },     
        { text: "persuasivo", image: img5 },
        { text: "memorável", image: img2 },     
        { text: "conversivo", image: img6 },
        { text: "impactante", image: img1 },      
        { text: "irresistível", image: img6 },
        { text: "imersivo", image: img5 },
        { text: "memorável", image: img2 },
        { text: "persuasivo", image: img4 },
                      
    ]

  return (
    <div 
        className={`${translateClass} ${direction} row w-full flex 
        items-center  
        gap-8 
        whitespace-nowrap mb-2`}
    >
        {items.map((item, index) => {
            return (
                <div 
                    key={index} 
                    className='elem flex items-center gap-8'
                >
                    <h1 
                        className='font-[SansitaBold] text-[6vh] sm:text-[8.4vh] 
                        leading-[6vh] sm:leading-[9vh]'
                    >
                        {item.text}
                    </h1>
                    <div className='imgdiv w-[5vh] h-[5vh]'>
                        <img 
                            className=''
                            src={item.image} 
                        />
                    </div>
                </div>
            )
        })}
    </div>
  )
}

Row.propTypes = {
    translateClass: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired
  };

export default Row
