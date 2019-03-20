import React, { useState } from 'react'
import './Projects.css'
import cynHomeGif from '../images/cyn-project/CYN desktop home page.gif'
import ttGame from '../images/teach-tools/Teach-Tools desktop game display.png'
import CynModal from './CynModal.js'
import TToolsModal from './TToolsModal.js'

const Projects = () => {

    const [visableCyn, setVisableCyn] = useState(false);
    const [visableTt, setVisableTt] = useState(false);
    return(
        <div className='projects-body' id='projects-page'>
                <h2>MY WORK</h2>
            {
                visableCyn || visableTt ? (
                    <>
                    <CynModal visableCyn={visableCyn} setVisableCyn={setVisableCyn}/>
                    <TToolsModal visableTt={visableTt} setVisableTt={setVisableTt} />
                    </>
                ) : (
                    <div/>
                )
            }
            <div className='projects-container'>
                <div className='project-content'>
                    <img src={cynHomeGif} alt='cyn.jonfox.info home page video walkthrough'onClick={() => setVisableCyn(!visableCyn)}/>
                    <h6>CYN</h6>
                    <p>Event RSVP and landing page for Utah based youth worker network. Mobile responsive Full CRUD web app that allows admins to dynamically update announcement page. The front end is built in React and is styled using SCSS. Node-mailer was implemented to auto email user upon RSVP. The backend is running on Node and uses Express as server and Massive to connect to a PostgreSQL database.</p> 
                    <button className='seeMoreBtn' onClick={() => setVisableCyn(!visableCyn)}>CLICK TO SEE GALLERY</button>
                    <div className='link-container'>
                        <h4><a href='https://cyn.jonfox.info/' target='_blank'>LIVE SITE</a></h4>
                        <h4><a href='https://github.com/jonfox10/PersonalProject/' target='_blank'>GITHUB</a></h4>
                    </div>
                </div>
                <div className='project-content'>
                    <img src={ttGame} alt='teach tools game display walkthrough' onClick={() => setVisableTt(!visableTt)}/>
                    <h6>TEACH TOOLS</h6>
                    <p>A full CRUD web app that allows teachers to dynamically input their content in a "Jeopardy" type trivia game. The front end was built with React and styled using SCSS and AntD. Socket.io was used heavily for functionality. The backend is running on Node, uses Express and Massive and socket.io to connect to PostgreSQL database. I lead the planning and styled over 80% of this group project. </p> 
                    <button className='seeMoreBtn' onClick={() => setVisableTt(!visableTt)}>CLICK TO SEE GALLERY</button>
                    <div className='link-container'>
                        <h4><a href='https://www.teach-tools.com/' target='_blank'>LIVE SITE</a></h4>
                        <h4><a href='https://github.com/TTTMLMGAMF/Group' target='_blank'>GITHUB</a></h4>
                    </div>
                </div>
            </div>
            
            
        </div>

    )
}
export default Projects