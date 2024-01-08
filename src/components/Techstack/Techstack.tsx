import React from 'react';
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

type Props = {
    readMore: boolean;
}

export const Techstack: React.FC<Props> = React.memo(({readMore}) => (
    <><div className='container__section--techstack'>
        <img src={htmlLogo} alt="html logo" width={`64px`} />
        <img src={cssLogo} alt="css logo" width={`64px`} />
        <img src={sassLogo} alt="sass logo" width={`64px`} />
        <img src={jsLogo} alt="js logo" width={`64px`} />
        <img src={tsLogo} alt="ts logo" width={`64px`} />
        <img src={phpLogo} alt="php logo" width={`64px`} />
        <img src={reactLogo} alt="react logo" width={`64px`} />
        <img src={reduxLogo} alt="redux logo" width={`64px`} />
        <img src={mysqlLogo} alt="mysql logo" width={`72px`} />
        <img src={postgresqlLogo} alt="postgresql logo" width={`60px`} />
        <img src={nodeLogo} alt="node logo" width={`64px`} />
        <img src={sequelizeLogo} alt="sequelize logo" width={`64px`} />
    </div><div className={`container__section--more ${readMore ? 'show' : ''}`}>
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
        </div></> 
));
