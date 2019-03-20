import React, { useState } from 'react'
import './CynModal.css'
import cynImage1 from '../images/cyn-project/CYN desktop home page.png'
import cynImage2 from '../images/cyn-project/CYN desktop HS event page.png'
import cynImage3 from '../images/cyn-project/CYN desktop news page.png'
import cynImage4 from '../images/cyn-project/CYN desktop rsvp page.png'
import cynImage5 from '../images/cyn-project/CYN mobile home page.png'
import cynImage6 from '../images/cyn-project/CYN mobile HS event page.png'
import cynImage7 from '../images/cyn-project/CYN mobile rsvp page.png'
import cynImage8 from '../images/cyn-project/CYN tablet home page.png'
import cynImage9 from '../images/cyn-project/CYN tablet rsvp page.png'
import rightArrow from '../images/round-arrow_forward_ios-24px.svg'
import leftArrow from '../images/round-arrow_back_ios-24px.svg'

const CynModal = (props) => {

    const [slide, setSlide] = useState(1)

    let cynImage = () => {
        if(slide === 1){
            cynImage = cynImage1
        }
        if(slide === 2){
            cynImage = cynImage2
        }
    }

    let showGallery = () => {
        if (props.visableCyn){
            showGallery = 'gallery-body'
        } else {
            showGallery = 'gallery-hidden'
        }
    }

    return (
        <div>
        {
            props.visableCyn ? (

                <div className='gallery-body'>

                    <div className='images'>
                        <div className='cynSlides'>
                            {/* <div className='slideNumber'> 1 / 9 </div> */}
                                <img className='modal-img'src={cynImage1}/>
                        </div>
                        <div className='cynSlides'>
                            {/* <div className='slideNumber'> 2 / 9 </div> */}
                                <img className='modal-img'src={cynImage2}/>
                        </div>
                        <div className='cynSlides'>
                            {/* <div className='slideNumber'> 3 / 9 </div> */}
                                <img className='modal-img'src={cynImage3}/>
                        </div>
                        <div className='cynSlides'>
                            {/* <div className='slideNumber'> 4 / 9 </div> */}
                                <img className='modal-img'src={cynImage4}/>
                        </div>
                        <div className='cynSlides'>
                            {/* <div className='slideNumber'> 5 / 9 </div> */}
                                <img className='modal-img'src={cynImage5} style={{borderRadius: '5vh'}}/>
                        </div>
                        <div className='cynSlides'>
                            {/* <div className='slideNumber'> 6 / 9 </div> */}
                                <img className='modal-img'src={cynImage6} style={{borderRadius: '5vh'}}/>
                        </div>
                        <div className='cynSlides'>
                            {/* <div className='slideNumber'> 7 / 9 </div> */}
                                <img className='modal-img'src={cynImage7}style={{borderRadius: '5vh'}}/>
                        </div>
                        <div className='cynSlides'>
                            {/* <div className='slideNumber'> 8 / 9 </div> */}
                                <img className='modal-img'src={cynImage8} style={{borderRadius: '3.5vh'}}/>
                        </div>
                        <div className='cynSlides'>
                            {/* <div className='slideNumber'> 9 / 9 </div> */}
                                <img className='modal-img'src={cynImage9} style={{borderRadius: '3.5vh'}}/>
                        </div>
                    </div>
                    <h6 className='close-modal' onClick={() => props.setVisableCyn(!props.visableCyn)}>x</h6>
                </div>  

            ) : (
                <div/>
            )
        }
        </div>

    )
}

export default CynModal