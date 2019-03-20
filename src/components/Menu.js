import React, {useState} from 'react'
import './Menu.css'
import githubLogo from '../images/icon-github.svg';
import linkedinLogo from '../images/icon-linkedin.svg';
import jfwd from '../images/jfwd.svg'
import menuIcon from '../images/round-menu-24px.svg'
import closeIcon from '../images/round-close-24px.svg'





const Menu = () => {

    const [className, setClassName] = useState('menuList');

    let homeScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }

    const showModal = () => {

    }


    return(
        <div>
            <div className='menu-container'>
                <div className='name-logo'> 
                    <img src={jfwd} alt='jon fox web developer'/>
                    {/* <h3>JON <b>FOX</b></h3>
                    <hr/>
                    <p>web developer</p> */}
                </div>
                <div>
                    <button onClick={() => setClassName(className = 'menuVisable')}><img id='mobileMenu' src={menuIcon}/></button>
                </div>
                <div>
                    <ul className={`${className}`}>
                        {/* <li><img id='mobileMenu' src={menuIcon}/></li> */}
                        <li onClick={homeScroll} id='home-btn'>HOME</li>
                        <li><a href='#about-page'>ABOUT</a></li>
                        <li><a href='#skills-page'>SKILLS</a></li>
                        <li><a href='#projects-page'>PROJECTS</a></li>
                        <li><a href='#contact-page'>CONTACT</a></li>
                        <li id='menuIcon'>
                        <a      href='https://www.linkedin.com/in/jonfox-info/'
                        target='_blank' ><img src={linkedinLogo} alt='github logo'/></a></li>
                        <li id='menuIcon'>
                        <a 
                        href='https://github.com/jonfox10/'
                        target='_blank' ><img src={githubLogo} alt='github logo'/></a></li>
                        {/* <img className='menuIcon' src={menuIcon}/> */}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Menu