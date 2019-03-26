import React from 'react'
import Radium from 'radium'
import Link from 'gatsby-link'
import { genericHashLink } from 'react-router-hash-link'


import brand from '../res/favicon.ico'

import '../layouts/index.css'

const HashLink = (props) => genericHashLink(props, Link);
<HashLink
to="#about-me"
activeClassName="selected"
scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
>Link to Hash Fragment</HashLink>

const ListLink = props => (
        <Link 
            style={{ display: `inline`, 
                    margin: `1rem`,
            }}
            to={props.to}
        >
            {props.children}
        </Link>
);


const NavBar = ({ siteTitle }) => (
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

                    <a href="#about-me">Home</a>
                    <HashLink
                        to="#about-me"
                        activeClassName="selected"
                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                    >Link to Hash Fragment</HashLink>
                    <ListLink to="/#experience">Experience</ListLink>
                    <ListLink to="/#projects">Projects</ListLink>
                    <ListLink to="/#skills">Skills</ListLink>
                    <ListLink to="/#interests">Interests</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </ul>
        </div>
    </div>
)

// flux -> eventListener
// redux -> optimisation

export default NavBar
