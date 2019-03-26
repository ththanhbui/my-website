import React from 'react'
import Radium from 'radium'
import Link from 'gatsby-link'
// import {
//     Collapse,
//     Navbar,
    
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem
// } from 'reactstrap';

import brand from '../res/favicon.ico'


const ListLink = props =>
    <li style={{ display: `inline`, margin: `1rem` }}>
        <Link
            to={props.to}>
            {props.children}
        </Link>
    </li>


const AboutMe = ({ siteTitle }) => (
    <div
        style={{
            background: '#000000',
        }}
    >
        <div
            style={{
                padding: '0.0001rem 0.005rem',
            }}
        >
                <ul style ={{marginBottom: `0rem`}}>
                    <a href="/"> 
                        <img src={brand} style={{width:70, margin: 10}} />
                    </a>

                    <ListLink to="/#">Home</ListLink>
                    <ListLink to="/#about-me">About Me</ListLink>
                    <ListLink to="/#experience">Experience</ListLink>
                    <ListLink to="/#projects">Projects</ListLink>
                    <ListLink to="/#skills">Skills</ListLink>
                    <ListLink to="/#interests">Interests</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </ul>
        </div>
    </div>
)

export default AboutMe
