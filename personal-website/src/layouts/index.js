import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import NavBar from '../components/navbar'
import NavBarBS from '../components/navbarbs'
import AboutMe from '../components/about-me'
import Contact from '../pages/contact'

import { genericHashLink } from 'react-router-hash-link'
import Link from 'gatsby-link'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css';

import icon32 from '../res/favicon.ico'

const HashLink = (props) => genericHashLink(props, Link);


const Layout = ({ children, data }) => (
    <div>
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                { name: 'description', content: 'Personal Website' },
                { name: 'keywords', content: 'software engineer, cambridge' },
            ]}
            link={[
                { rel: 'shortcut icon', type: 'image/ico', href: `${icon32}` }
            ]}
        />
        <HashLink
to="#about-me"
activeClassName="selected"
scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
>Link to Hash Fragment</HashLink>
        <NavBar siteTitle={data.site.siteMetadata.title} />
        
        <div
            style={{
                margin: '0 auto',
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
            }}
        >        
            {children()}
        </div>
        <h3 id="#about-me">Question 1</h3>
        <AboutMe siteTitle={data.site.siteMetadata.title}/>
        <Contact />
    </div>
)

export default Layout

Layout.propTypes = {
    children: PropTypes.func,
}

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`





