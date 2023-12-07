import React, { useEffect, useState } from 'react';
import './sass/HomePage.scss';
import jsLogo from '../../images/techstack/jsLogo.png';
import htmlLogo from '../../images/techstack/htmlLogo.png';
import cssLogo from '../../images/techstack/cssLogo.png';
import sassLogo from '../../images/techstack/sassLogo.png';
import tsLogo from '../../images/techstack/tsLogo.png';
import reactLogo from '../../images/techstack/reactLogo.png';
import reduxLogo from '../../images/techstack/reduxLogo.png';
import phpLogo from '../../images/techstack/phpLogo.png';
import mysqlLogo from '../../images/techstack/mysqlLogo.png';
import postgresqlLogo from '../../images/techstack/postgresqlLogo.png';
import nodeLogo from '../../images/techstack/nodeLogo.png';
import sequelizeLogo from '../../images/techstack/sequelizeLogo.png';
import gitLogo from '../../images/techstack/gitLogo.png';
import arrowsDown from '../../images/arrows-down.png'; 
import arrowsUp from '../../images/arrows-up.png'; 
import { EmployButton } from '../EmployButton/EmployButton';
import { Footer } from '../Footer/Footer';



export const HomePage: React.FC = () => {
const [readMore, setReadMore] = useState(false);

     useEffect(() => {

    document.addEventListener("scroll", function () {
      var sideParagraphs = document.querySelectorAll(".side-paragraph");
      var techstack = document.querySelector(".container__section--techstack");
    
      sideParagraphs.forEach(function (sideParagraph) {
        var positionFromTop = sideParagraph.getBoundingClientRect().top;
    
        if (positionFromTop - window.innerHeight < -140) {
          sideParagraph.classList.add("appear");
        }
      });

      if (techstack) {
        var positionFromTop = techstack.getBoundingClientRect().top;
    
        if (positionFromTop - window.innerHeight < 160) {
          techstack.classList.add("appear");
        }
      }
    });

  }, []);

  
  
    return(
    <>

        <div className="container">
            <h1>HUBERT WIKTOR</h1>
            <h2>FULL-STACK DEVELOPER</h2>
            <div className='container__picture' ></div>
            <section id='about' className='container__section'>
                <h1 className='small'>ABOUT</h1>

                <p id='side-paragraph' className='side-paragraph hidden-paragraph-down'><span className='colorfull'>Hello, my name is Hubert and welcome to my digital space!</span><br/><br/></p>
                <p id='side-paragraph' className='side-paragraph hidden-paragraph-left'>My journey into the world of programming began at the age of 15, ignited by a passion that has since grown into a dedicated pursuit of excellence in both front-end and back-end development.<br/><br/></p>
                <p id='side-paragraph' className='side-paragraph hidden-paragraph-right'>For me, crafting software goes beyond creating visually appealing interfaces; it's a deep dive into the intricacies of application functionality. I am committed to the continual expansion of my knowledge and skills, ensuring that the software I develop not only looks great but operates efficiently, leading to user satisfaction.<br/><br/></p>
                <p id='side-paragraph' className='side-paragraph hidden-paragraph-left'>My expertise spans a spectrum of technologies, including HTML, CSS (SCSS), JavaScript (TypeScript), React, Node.js, and a nuanced understanding of the Redux framework. In every project, I seek to harmonize technical challenges with a creative mindset, constantly pushing the boundaries of what's possible.<br/><br/></p>
                <p id='side-paragraph' className='side-paragraph hidden-paragraph-right'>Outside the realm of code, I embrace challenges and adventures. My dual passions—sculpting my physique and indulging in mixed martial arts—reveal my commitment to discipline, resilience, and personal growth. These qualities, cultivated through martial arts, transcend into both my professional and personal life, fostering self-confidence and perseverance.<br/><br/></p>
                <p id='side-paragraph' className='side-paragraph hidden-paragraph-left'>I firmly believe that life is a balance between work and the pursuit of passions. In my world, these elements coalesce seamlessly, contributing to my growth as both a professional and an individual. Join me on this journey of continuous improvement and exploration—it's not just about writing code; it's about crafting a fulfilling life.</p>
            <h3>TECH - STACK:</h3>
            <div className='container__section--techstack'>
            <img src={htmlLogo} alt="" width={`64px`}/>
            <img src={cssLogo} alt="" width={`64px`}/>
            <img src={sassLogo} alt="" width={`64px`}/>
            <img src={jsLogo} alt="" width={`64px`}/>
            <img src={tsLogo} alt="" width={`64px`}/>
            <img src={phpLogo} alt="" width={`64px`}/>
            <img src={reactLogo} alt="" width={`64px`}/>
            <img src={reduxLogo} alt="" width={`64px`}/>
            <img src={mysqlLogo} alt="" width={`72px`}/>
            <img src={postgresqlLogo} alt="" width={`60px`}/>
            <img src={nodeLogo} alt="" width={`64px`}/>
            <img src={sequelizeLogo} alt="" width={`64px`}/>
            <img src={gitLogo} alt="" width={`64px`}/>
            </div>
        <div className={`container__section--more ${readMore ? 'show' : ''}`}>
              <ul className='container__section--more-list'>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>SASS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Redux (toolkit)</li>
                <li>React Native</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Sequelize</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>NPM</li>
                <li>REST API</li>
                <li>BEM methodology</li>
                <li>Error handling</li>
                <li>Responsive Web Design</li>
                <li>GIT/GITHUB</li>
                <li>VS Code</li>
                <li>Postman</li>
                <li>Scrum</li>
                <li>Trello</li>
                <li>PHP - basics</li>
              </ul>
            </div>
            
            
            <button onClick={() => setReadMore(!readMore)} className='container__section--button'>{readMore ? <div className='container__section--button-content'><img src={arrowsUp} alt='arrows-down'  width={'32px'} /> SEE LESS</div> : <div className='container__section--button-content'><img src={arrowsDown} alt='arrows-down'  width={'32px'}/> SEE MORE</div>}</button>
            </section>
            
            <section id='portfolio' className='container__section'>
            <h1 className='small'>PORTFOLIO</h1>
            <p><span><a href='https://github.com/Sancz0pansa?tab=repositories' target='_blank' rel="noreferrer">HERE</a> you can checkout all my repositories (around 60 project's both comprehensive applications and task-based projects, including team projects).<br/><br/> Let's check the most interesting ones:</span></p>
            <div className='container__section--portfolioaxis'>
                <div className='container__section--column'>
                    <div className='container__section--column-element mybike side-paragraph hidden-paragraph-left' onClick={() => window.open('https://sancz0pansa.github.io/MyBike-Landing/', '_blank')}></div>

                    <div className='container__section--column-element side-paragraph hidden-paragraph-left'>
                    <p>App (task manager) done by using React.</p>
                        <div>
                            <a href='https://sancz0pansa.github.io/todo-app-project/' className='demo' target='_blank' rel="noreferrer">DEMO </a>AND
                            <a href='https://github.com/Sancz0pansa/todo-app-project' className='code' target='_blank' rel="noreferrer"> CODE</a>
                        </div>
                        
                    </div>
                    <div className='container__section--column-element nicegadgets side-paragraph hidden-paragraph-left' onClick={() => window.open('https://fe-may23-bugbusters.github.io/product_catalog/', '_blank')}></div>
                </div>
                <div className='container__section--arrow '></div>
                <div className='container__section--column'>
                    <div className='container__section--column-element side-paragraph hidden-paragraph-right'>
                    <p>Landing page for a bicycle retail company.<br/>
                        Project made using: HTML5, SCSS, BEM.</p>
                        <div>
                          <a href='https://sancz0pansa.github.io/MyBike-Landing/' className='demo' target='_blank' rel="noreferrer">DEMO</a> AND 
                        <a href='https://github.com/Sancz0pansa/MyBike-Landing' className='code' target='_blank' rel="noreferrer"> CODE</a>
                          </div>
                    </div>

                    <div className='container__section--column-element todo side-paragraph hidden-paragraph-right' onClick={() => window.open('https://sancz0pansa.github.io/todo-app-project/', '_blank')}></div>
                    
                    <div className='container__section--column-element side-paragraph hidden-paragraph-right'>
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

            <section id='employ' className='container__section'>
            {/* <a className='container__section--employ' href='mailto:hubertwiktor0@gmail.com' rel='noreferrer' target='_blank'><h1 className='small'>EMPLOY ME</h1></a> */}
            <EmployButton />
            </section>
            <Footer />
        </div>
    </>
)};
