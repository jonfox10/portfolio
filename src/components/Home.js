import React from 'react';
import './Home.css'
import jfwd from '../images/jfwd.svg'



const Home = () => {
    return(
        <div className='home-body'>
            <div className='home-content'>
                <img src={jfwd} alt='jon fox web developer'/>
            </div>
        </div>

    )
}
export default Home