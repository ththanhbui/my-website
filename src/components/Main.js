import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Welcome!  My name is Thanh Bui.</p>
          <p>I am a 3<sup>rd</sup>-year Computer Scientist at Downing College, University of Cambridge and a recipient of the <a href="https://www.jardines.com/en/community/foundation.html">Jardine Foundation Scholarship Award 2016</a> from Jardine Matheson. </p>
          <p>I am currently a senior advisor for <a href="https://www.facebook.com/baygiotinhh/">Bay Gio Tinh</a>, a student-initiated organization that provide soft-skills training through camps for high school students in Ho Chi Minh, Vietnam.</p>
          <p>I  have always been a numbers person, spending my high school years major in Mathematics and Physics, but I decided to challenge myself by taking Computer Science in university. The start was difficult, but I managed to excel eventually, and now I love it! There is nothing greater than learning new knowledge that is crucial and highly applicable in today's world.</p>
          <p>When I have free time, I play the guitar and (learn to) take photographs. I also enjoy video games, football, badminton, swimming and travelling whenever I'm awarded the opportunity.</p>
          <p>I love meeting new people and learning new things, so please feel free to <a href="javascript:;" onClick={() => {this.props.onCloseThenOpenArticle('contact')}}>say hello</a> and share a story with me. I am thrilled, and truly blessed to be a part of your life!</p>
          <p>I am currently looking for a Software Engineering internship. If you have a position that you think I am a good fit, please <a href="javascript:;" onClick={() => {this.props.onCloseThenOpenArticle('contact')}}>contact</a> me!</p>

          {close}
        </article>

        <article id="experience" className={`${this.props.article === 'experience' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Experience</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projects</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="skills" className={`${this.props.article === 'skills' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Skills</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <p>The easiest way to reach me is via email at <a href='#'>thienthanh.bui96@gmail.com</a>.</p>
          <p>I always endeavour to respond quickly to emails but my inbox does sometimes get rather full. Feel free to follow up your email if you don’t get a reply in a day or two – I will probably appreciate the reminder!</p>
          <form name="contact" method="post" action="#" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="contact-me" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="subject">Subject</label>
              <textarea name="subject" id="subject" rows="1"></textarea>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send" className="special" /></li>
              <li><input type="reset" value="Clear" /></li>
            </ul>
          </form>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  onCloseThenOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main