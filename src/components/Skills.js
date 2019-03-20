import React from 'react'
import './Skills.css'
import cssIcon from '../images/tech-icons/css3-original-wordmark.svg'
import htmlIcon from '../images/tech-icons/html5-original-wordmark.svg'
import jsIcon from '../images/tech-icons/javascript-original.svg'
import reactIcon from '../images/tech-icons/react-original-wordmark.svg'
import reduxIcon from '../images/tech-icons/redux-original.svg'
import nodeIcon from '../images/tech-icons/nodejs-original-wordmark.svg'
import sassIcon from '../images/tech-icons/sass-original.svg'
import pgsqlIcon from '../images/tech-icons/postgresql-original-wordmark.svg'
import npmIcon from '../images/tech-icons/npm-original-wordmark.svg'
import exIcon from '../images/tech-icons/express-original-wordmark.svg'
import figmaIcon from '../images/tech-icons/figma-1.svg'
import moodleIcon from '../images/tech-icons/moodle-original.svg'


const Skills = () => {
    return(
        <div>
            <div className='skills-body' id='skills-page'>
                <h2>SKILLS</h2>
                <div className='icon-body'>
                    <img className='techLogo' src={cssIcon} alt='css 3 logo'/>
                    <img className='techLogo' src={htmlIcon} alt='css 3 logo'/>
                    <img className='techLogo' src={jsIcon} alt='css 3 logo'/>
                    <img className='techLogo' src={reactIcon} alt='css 3 logo'/>
                    <img className='techLogo' src={reduxIcon} alt='css 3 logo'/>
                    <img className='techLogo' src={nodeIcon} alt='css 3 logo'/>
                    <img className='techLogo' src={sassIcon} alt='css 3 logo'/>
                    <img className='techLogo' src={pgsqlIcon} alt='css 3 logo'/>
                    <img className='techLogo' src={npmIcon} alt='css 3 logo'/>
                    <img className='techLogo' src={exIcon} alt='css 3 logo'/>
                    <img className='techLogo' src={figmaIcon} alt='css 3 logo'/>
                    <img className='techLogo' src={moodleIcon} alt='css 3 logo'/>
                </div> 
                
            
            </div>
        </div>
    )
}
export default Skills;