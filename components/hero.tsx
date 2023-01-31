import React from 'react'

import PropTypes from 'prop-types'

const Hero = (props) => {
  return (
    <>
      <div className="hero-hero gw-section-container gw-hero-container">
        <div className="hero-max-width gw-max-width">
          <div className="hero-content">
            <span className="hero-subtitle before-Heading">
              {props.subtitle}
            </span>
            <h1 className="hero-title">
              <span>Quality,</span>
              <br></br>
              <span>
                Trustworthiness,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="hero-text3">Expertise &amp; Flexibility</span>
            </h1>
            <span className="hero-description">{props.description}</span>
            <div className="hero-button-container">
              <button className="button gw-button-gradient">
                {props.button}
              </button>
              <button className="button gw-button-transparent">
                {props.button1}
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img
              alt={props.hero_image_alt}
              src={props.hero_image_src}
              loading="lazy"
              className="hero-hero-image"
            />
            <img
              alt={props.graphic_top_alt}
              src={props.graphic_top_src}
              loading="lazy"
              className="hero-graphic-top"
            />
            <img
              alt={props.image_alt}
              src={props.image_src}
              loading="lazy"
              className="hero-image1"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-hero {
            position: relative;
          }
          .hero-max-width {
            align-items: center;
          }
          .hero-content {
            flex: 0 0 auto;
            width: 45%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .hero-subtitle {
            color: var(--dl-color-scheme-orange100);
            margin-bottom: var(--dl-space-space-unit);
          }
          .hero-title {
            color: var(--dl-color-scheme-white);
            font-size: 52px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 600;
            line-height: 1.2;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .hero-text3 {
            color: var(--dl-color-scheme-lightgreen);
          }
          .hero-description {
            color: var(--dl-color-scheme-white);
            font-size: 18px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .hero-button-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .hero-image {
            position: relative;
            padding-bottom: var(--dl-space-space-eightunits);
          }
          .hero-hero-image {
            flex: 1;
            max-width: 550px;
            object-fit: cover;
            border-radius: 48px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
          .hero-graphic-top {
            top: 0px;
            right: -170px;
            width: 100%;
            height: 100%;
            position: absolute;
            max-width: 359px;
            max-height: 359px;
            object-fit: contain;
            object-position: center;
          }
          .hero-image1 {
            right: -170px;
            bottom: 0px;
            position: absolute;
            object-fit: contain;
          }
          @media (max-width: 991px) {
            .hero-content {
              width: 50%;
              margin-right: var(--dl-space-space-unit);
            }
            .hero-image {
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .hero-hero-image {
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .hero-max-width {
              flex-direction: column-reverse;
            }
            .hero-content {
              width: 100%;
              margin-right: 0px;
            }
            .hero-hero-image {
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  image_src: '/playground_assets/group%2018-1200w.png',
  button: 'Get started',
  hero_image_alt: 'image',
  description:
    'Through our years of experience and knowledge, the InfoSec+ team is capable of conducting services in various fields of information security.',
  subtitle: 'GenesiaWood was found to provide this necessity with',
  graphic_top_src: '/playground_assets/union-400w.png',
  image_alt: 'image',
  button1: 'Log in',
  graphic_top_alt: 'image',
  hero_image_src: '/playground_assets/hero-600w.png',
}

Hero.propTypes = {
  image_src: PropTypes.string,
  button: PropTypes.string,
  hero_image_alt: PropTypes.string,
  description: PropTypes.string,
  subtitle: PropTypes.string,
  graphic_top_src: PropTypes.string,
  image_alt: PropTypes.string,
  button1: PropTypes.string,
  graphic_top_alt: PropTypes.string,
  hero_image_src: PropTypes.string,
}

export default Hero
