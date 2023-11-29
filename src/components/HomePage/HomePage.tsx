import React from 'react';
import './sass/HomePage.scss';
import meImg from '../../images/me.png';

export const HomePage: React.FC = () => (
    <>

        <div className="container">
            <h1>HUBERT WIKTOR</h1>
            <h2>FULL-STACK DEVELOPER</h2>
            <div className='container__picture' ></div>
            <section id='about' className='container__section'>
                <h1 className='small'>ABOUT</h1>

                <p><span><span className='colorfull'>Hello, my name is Hubert and welcome to my digital space!</span></span><br/><br/>
                My journey into the world of programming began at the age of 15, ignited by a passion that has since grown into a dedicated pursuit of excellence in both front-end and back-end development.<br/><br/>
For me, crafting software goes beyond creating visually appealing interfaces; it's a deep dive into the intricacies of application functionality. I am committed to the continual expansion of my knowledge and skills, ensuring that the software I develop not only looks great but operates efficiently, leading to user satisfaction.<br/><br/>
My expertise spans a spectrum of technologies, including HTML, CSS (SCSS), JavaScript (TypeScript), React, Node.js, and a nuanced understanding of the Redux framework. In every project, I seek to harmonize technical challenges with a creative mindset, constantly pushing the boundaries of what's possible.<br/><br/>
Outside the realm of code, I embrace challenges and adventures. My dual passions—sculpting my physique and indulging in mixed martial arts—reveal my commitment to discipline, resilience, and personal growth. These qualities, cultivated through martial arts, transcend into both my professional and personal life, fostering self-confidence and perseverance.<br/><br/>
I firmly believe that life is a balance between work and the pursuit of passions. In my world, these elements coalesce seamlessly, contributing to my growth as both a professional and an individual. Join me on this journey of continuous improvement and exploration—it's not just about writing code; it's about crafting a fulfilling life.</p>
            </section>
            <section id='portfolio' className='container__section'>
            <h1 className='small'>PORTFOLIO</h1>
            <p><span><a href='https://github.com/Sancz0pansa?tab=repositories' target='_blank' rel="noreferrer">HERE</a> you can checkout all my repositories (around 60 project's both comprehensive applications and task-based projects, including team projects).<br/><br/> Let's check the most interesting ones:</span></p>
            <div className='container__section--portfolioaxis'>
                <div className='container__section--column'>
                    <div className='container__section--column-element mybike'></div>
                </div>
                <div className='container__section--arrow'></div>
                <div className='container__section--column'>
                    <div className='container__section--column-element'>
                        <p>Landing page for a bicycle retail company.<br/>
                        Project made using: HTML5, SCSS, BEM.</p>
                        <a href='https://sancz0pansa.github.io/MyBike-Landing/' className='demo' target='_blank' rel="noreferrer">DEMO</a>AND
                        <a href='https://github.com/Sancz0pansa/MyBike-Landing' className='code' target='_blank' rel="noreferrer">CODE</a>
                    </div>
                </div>
            </div>
            
            
            
            </section>
        </div>
    </>
);
