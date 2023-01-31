import React from 'react'

import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <div className="navbar-navbar gw-navbar-container">
        <div className="gw-max-width">
          <div className="navbar-logo">
            <img
              alt={props.image_alt1}
              src={props.image_src}
              className="navbar-image"
            />
          </div>
          <div className="navbar-links">
            <span className="navbar-text navbar-Link">{props.Text}</span>
            <span className="navbar-text1 navbar-Link">{props.text}</span>
            <span className="navbar-text2 navbar-Link">{props.text1}</span>
            <span className="navbar-text3 navbar-Link">{props.text2}</span>
            <button className="gw-button-secondary button">
              {props.button}
            </button>
            <button className="button gw-button-primary">
              {props.button1}
            </button>
          </div>
          <div className="navbar-burger-menu gw-navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navbar-navbar {
            position: relative;
          }
          .navbar-logo {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-image {
            width: 100px;
            object-fit: cover;
          }
          .navbar-links {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navbar-text {
            color: var(--dl-color-scheme-white);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-text1 {
            color: var(--dl-color-scheme-white);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-text2 {
            color: var(--dl-color-scheme-white);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-text3 {
            color: var(--dl-color-scheme-white);
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-burger-menu {
            fill: #105749;
            width: 24px;
            height: 24px;
          }
          @media (max-width: 1200px) {
            .navbar-navbar {
              background-color: var(--dl-color-scheme-green80);
            }
          }
          @media (max-width: 767px) {
            .navbar-links {
              display: none;
            }
            .navbar-icon {
              fill: var(--dl-color-scheme-green100);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  image_alt1: 'image',
  text: 'Features',
  text2: 'Pricing',
  button1: 'Get started',
  image_src: '/playground_assets/genesiawoodlogo.svg',
  Text: 'How it works',
  button: 'Log in',
  text1: 'Blog',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Navbar.propTypes = {
  image_alt1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  button1: PropTypes.string,
  image_src: PropTypes.string,
  Text: PropTypes.string,
  button: PropTypes.string,
  text1: PropTypes.string,
  image_src1: PropTypes.string,
}

export default Navbar
