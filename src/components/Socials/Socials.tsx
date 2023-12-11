/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './sass/Socials.scss';


export const Socials: React.FC = () => (
    <ul className="wrapper">
  
    <a href='https://www.linkedin.com/in/hubert-wiktor/'>
        <li className="icon linkedin">
            <span className="tooltip">Linked-In</span>
            <span><i className="fab fa-linkedin"></i></span>
        </li>
    </a>
  
    <a href='https://github.com/Sancz0pansa'>
        <li className="icon github">
            <span className="tooltip">Github</span>
            <span><i className="fab fa-github"></i></span>
        </li>
    </a>
 

</ul>
);
