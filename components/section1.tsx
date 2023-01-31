import React from 'react'

import PropTypes from 'prop-types'

const Section1 = (props) => {
  return (
    <>
      <div className="section1-section gw-section-container">
        <div className="section1-max-width gw-max-width">
          <div className="section1-content">
            <span className="section1-text before-Heading">{props.text}</span>
            <h1 className="section1-text1">
              <span className="section1-text2">Earn cashback</span>
              <br></br>
              <span className="section1-text4">from your favorite brands</span>
            </h1>
            <span className="section1-text5">{props.text1}</span>
            <div className="section1-container">
              <button className="gw-button-secondary button gw-bg-transparent">
                {props.button}
              </button>
            </div>
          </div>
          <div className="section1-image">
            <img
              alt={props.hero_image_alt}
              src={props.hero_image_src}
              className="section1-hero-image"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .section1-section {
            position: relative;
            background-color: rgba(255, 199, 139, 0.14);
          }
          .section1-max-width {
            align-items: stretch;
          }
          .section1-content {
            width: 50%;
            display: flex;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .section1-text {
            color: var(--dl-color-scheme-green80);
            margin-bottom: var(--dl-space-space-unit);
          }
          .section1-text1 {
            font-size: 42px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .section1-text2 {
            color: var(--dl-color-scheme-orange100);
            font-family: Urbanist;
          }
          .section1-text4 {
            font-family: Urbanist;
          }
          .section1-text5 {
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .section1-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .section1-hero-image {
            object-fit: contain;
            margin-right: -250px;
            border-radius: 48px;
          }
          @media (max-width: 991px) {
            .section1-max-width {
              flex-direction: column;
            }
            .section1-content {
              width: 100%;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .section1-image {
              padding-bottom: 0px;
            }
            .section1-hero-image {
              width: 100%;
              margin-left: 0px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .section1-content {
              width: 100%;
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Section1.defaultProps = {
  hero_image_alt: 'image',
  text1:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  button: 'See how',
  hero_image_src: '/playground_assets/group%2021-1200w.png',
  text: 'save money',
}

Section1.propTypes = {
  hero_image_alt: PropTypes.string,
  text1: PropTypes.string,
  button: PropTypes.string,
  hero_image_src: PropTypes.string,
  text: PropTypes.string,
}

export default Section1
