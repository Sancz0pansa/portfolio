/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './sass/Header.scss';
import linkedInLogo from '../../images/linkedIn.png';
import gitHubLogo from '../../images/gitHub.png';

export const Header: React.FC = () => (
    <header className='header'>
        <div className='header__nav'>
            {/* <span className='header__nav--initials'>Hubert Wiktor</span> */}
            <div className='header__nav--container'>
                <ul className='header__nav--list'>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#'>Portfolio</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                {/* <img src={linkedInLogo} width='50px' height='50px' alt='LinkedIn logo' />
                <img src={gitHubLogo} width='43px' height='43px' alt='GitHub logo' /> */}
            </div>
        </div>
    </header>
);
