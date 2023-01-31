import React from 'react'

import PropTypes from 'prop-types'

const Section = (props) => {
  return (
    <>
      <div className="section-section gw-section-container">
        <div className="section-max-width gw-max-width">
          <div className="section-image">
            <img
              alt={props.hero_image_alt}
              src={props.hero_image_src}
              className="section-hero-image"
            />
          </div>
          <div className="section-content">
            <span className="section-text before-Heading">{props.text}</span>
            <h1 className="section-text1">
              <span className="section-text2">
                Pay and get paid
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="section-text3">
                faster
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="section-text4">than ever.</span>
              <span className="section-text5"></span>
            </h1>
            <span className="section-text6">{props.text1}</span>
            <div className="section-container">
              <button className="gw-button-secondary button gw-bg-transparent">
                {props.button}
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .section-section {
            position: relative;
          }
          .section-max-width {
            align-items: stretch;
          }
          .section-hero-image {
            object-fit: contain;
            margin-left: -250px;
            border-radius: 48px;
          }
          .section-content {
            width: 50%;
            display: flex;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .section-text {
            color: var(--dl-color-scheme-green80);
            margin-bottom: var(--dl-space-space-unit);
          }
          .section-text1 {
            font-size: 42px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .section-text2 {
            font-family: Urbanist;
          }
          .section-text3 {
            color: var(--dl-color-scheme-orange100);
            font-family: Urbanist;
          }
          .section-text4 {
            font-family: Urbanist;
          }
          .section-text5 {
            font-family: Urbanist;
          }
          .section-text6 {
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .section-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          @media (max-width: 991px) {
            .section-max-width {
              flex-direction: column;
            }
            .section-image {
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .section-hero-image {
              width: 100%;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .section-content {
              width: 100%;
              margin-left: 0px;
              margin-right: 0px;
            }
          }
          @media (max-width: 767px) {
            .section-content {
              width: 100%;
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Section.defaultProps = {
  text1:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  text: 'how it works',
  hero_image_alt: 'image',
  button: 'Learn more',
  hero_image_src: '/playground_assets/group%2020-1200w.png',
}

Section.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  hero_image_alt: PropTypes.string,
  button: PropTypes.string,
  hero_image_src: PropTypes.string,
}

export default Section
