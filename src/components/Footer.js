import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">                
                <li><a href="https://facebook.com/ttbui11" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.linkedin.com/in/ttbui11" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                <li><a href="https://github.com/ttbui11" className="icon fa-github"><span className="label">Test</span></a></li>
                <li><a href="https://www.wordpress.com" className="icon fa-wordpress"><span className="label">Wordpress</span></a></li>
                <li><a href="https://medium.com/@ttbui11" className="icon fa-medium"><span className="label">Medium</span></a></li>
                <li><a href="https://www.instagram.com/ththanhbui" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
        </ul>
        <p className="copyright">Copyright &copy; 2019 Thanh Bui. Designed by: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
