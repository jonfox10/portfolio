import React from 'react'
import './About.css'
import familypic from '../images/jon_fam-pic.jpg'

const About = () => {
    return(
        <div className='about-body' id='about-page'>
            <h2>ABOUT</h2>
            <h6>The Full Story</h6>
            <img id='familypic'src={familypic} alt='Jon Fox Family'/>
            <p>
                After 8 years working at a non-profit with teenagers, I made the courageous decision to switch careers, learn something new, and transition into web development. I have always enjoyed using my creativity and problem-solving skills, and both of those skill sets have translated well in this new pathway. I'm excited to start a new career as a front-end developer. As I continue my professional journey, I like to think of my career as one big learning experience that continuously grows with each project and collaboration. With a dedication to functionality and a curiosity for what’s ahead of the curve, I keep my work practical, relevant and creative. Have a look at my past projects, and feel free to reach out with any questions.

            </p>
        </div>
    )
}
export default About;
