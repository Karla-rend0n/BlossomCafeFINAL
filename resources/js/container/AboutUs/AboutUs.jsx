//#region Imports
import React from 'react'
import B from '../../../assets/B.png';
import spoon from '../../../assets/spoon.svg';
import baguette from '../../../assets/baguette.png';
import './AboutUs.css'
//#endregion

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
        <div className='app__aboutus-overlay flex__center'>
            <img src={B} alt='g letter'/>
        </div>
        <div className='app__aboutus-content flex__center'>
            <div className='app__aboutus-content_about'>
                <h1 className='headtext__cormorant'>About Us</h1>
                <img src={spoon} alt='about_spoon' className='spoon__img'/>
                <p className='p__opensans'>Ejemplo</p>
                <button type='button' className='custom__button'>Know More</button>
            </div>
            <div className='app__aboutus-content_knife flex__center'>
              <img src={baguette} alt='about-knife'/>
            </div>
            <div className='app__aboutus-content_history'>
                <h1 className='headtext__cormorant'>Our History</h1>
                <img src={spoon} alt='about_spoon' className='spoon__img'/>
                <p className='p__opensans'>Ejemplo</p>
                <button type='button' className='custom__button'>Know More</button>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
