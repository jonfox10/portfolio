import React, { useState } from 'react'
import './CynModal.css'
import ttImage1 from '../images/teach-tools/Teach-Tools game demo.mp4'
import ttImage2 from '../images/teach-tools/Teach-Tools desktop home page.png'
import ttImage3 from '../images/teach-tools/Teach-Tools desktop game display.png'
import ttImage4 from '../images/teach-tools/Teach-Tools .png'
import ttImage5 from '../images/teach-tools/Teach-Tools mobile home page.png'
import ttImage6 from '../images/teach-tools/Teach-Tools tablet game control.png'
// import cynImage7 from '../images/cyn-project/CYN mobile rsvp page.png'
// import cynImage8 from '../images/cyn-project/CYN tablet home page.png'
// import cynImage9 from '../images/cyn-project/CYN tablet rsvp page.png'
// import rightArrow from '../images/round-arrow_forward_ios-24px.svg'
// import leftArrow from '../images/round-arrow_back_ios-24px.svg'

const TToolsModal = (props) => {

    const [slide, setSlide] = useState(1)

    // let cynImage = () => {
    //     if(slide === 1){
    //         cynImage = cynImage1
    //     }
    //     if(slide === 2){
    //         cynImage = cynImage2
    //     }
    // }

    return (
        <>
        {
            props.visableTt ? (

        
            <div className='gallery-body'>
                <h6 className='close-modal' onClick={() => props.setVisableTt(!props.visableTt)}>x</h6>
                <div className='images'>
                    <div className='cynSlides'>
                            <video id='wideimg' className='modal-vid' controls autoplay loop src={ttImage1}>
                            </video>
                    </div>
                    <div className='cynSlides'>
                            <img id='wideimg' className='modal-img'src={ttImage2}/>
                    </div>
                    <div className='cynSlides'>
                            <img id='wideimg' className='modal-img'src={ttImage3}/>
                    </div>
                    
                    <div className='cynSlides'>
                            <img  className='modal-img'src={ttImage5} style={{borderRadius: '5vh'}}/>
                    </div>
                    <div className='cynSlides'>
                            <img  className='modal-img'src={ttImage6} style={{borderRadius: '3.5vh'}}/>
                    </div>
                </div>    
            </div>

            ) : (
                <div/>
            )
        }
        </>
    )
}

export default TToolsModal