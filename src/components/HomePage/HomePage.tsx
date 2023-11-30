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
                    <div className='container__section--column-element mybike' onClick={() => window.open('https://sancz0pansa.github.io/MyBike-Landing/', '_blank')}></div>

                    <div className='container__section--column-element'>
                    <p>App (task manager) done by using React.</p>
                        <div>
                            <a href='https://sancz0pansa.github.io/todo-app-project/' className='demo' target='_blank' rel="noreferrer">DEMO </a>AND
                            <a href='https://github.com/Sancz0pansa/todo-app-project' className='code' target='_blank' rel="noreferrer"> CODE</a>
                        </div>
                        
                    </div>
                    <div className='container__section--column-element nicegadgets' onClick={() => window.open('https://fe-may23-bugbusters.github.io/product_catalog/', '_blank')}></div>
                </div>
                <div className='container__section--arrow'></div>
                <div className='container__section--column'>
                    <div className='container__section--column-element'>
                    <p>Landing page for a bicycle retail company.<br/>
                        Project made using: HTML5, SCSS, BEM.</p>
                        <div>
                          <a href='https://sancz0pansa.github.io/MyBike-Landing/' className='demo' target='_blank' rel="noreferrer">DEMO</a> AND 
                        <a href='https://github.com/Sancz0pansa/MyBike-Landing' className='code' target='_blank' rel="noreferrer"> CODE</a>
                          </div>
                    </div>

                    <div className='container__section--column-element todo' onClick={() => window.open('https://sancz0pansa.github.io/todo-app-project/', '_blank')}></div>
                    
                    <div className='container__section--column-element'>
                    <p>Led a team of five programmers developing a responsive front-end for a phone retail application.
                         Implemented a secure, in-house server and database for authentication and transactions.
                          Achieved project success through collaboration and a strong security focus, documented for future updates.</p>
                          <div>
                          <a href='https://fe-may23-bugbusters.github.io/product_catalog/' className='demo' target='_blank' rel="noreferrer">DEMO</a> AND 
                        <a href='https://github.com/orgs/fe-may23-BugBusters/repositories' className='code' target='_blank' rel="noreferrer"> CODE</a>
                          </div>
                        
                    </div>
                </div>
            </div>
            
            
            
            </section>

            <section id='contact' className='container__section'>
            <h1 className='small'>CONTACT</h1>
            </section>
        </div>
    </>
);
