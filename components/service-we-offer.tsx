import React from 'react'

import PropTypes from 'prop-types'

const ServiceWeOffer = (props) => {
  return (
    <>
      <div className="service-we-offer-section gw-section-container">
        <div className="service-we-offer-max-width gw-max-width">
          <div className="service-we-offer-image">
            <img
              alt={props.hero_image_alt}
              src={props.hero_image_src}
              className="service-we-offer-hero-image"
            />
          </div>
          <div className="service-we-offer-content">
            <span className="service-we-offer-text before-Heading">
              {props.text}
            </span>
            <h1 className="service-we-offer-text1">{props.heading}</h1>
            <div className="service-we-offer-step">
              <div className="service-we-offer-number">
                <span className="service-we-offer-text2">{props.text1}</span>
              </div>
              <div className="service-we-offer-container">
                <span className="service-we-offer-title">{props.title}</span>
                <span className="service-we-offer-text3">{props.text2}</span>
              </div>
            </div>
            <div className="service-we-offer-step1">
              <div className="service-we-offer-number1">
                <span className="service-we-offer-text4">{props.text3}</span>
              </div>
              <div className="service-we-offer-container1">
                <span className="service-we-offer-title1">{props.title1}</span>
                <span className="service-we-offer-text5">{props.text4}</span>
              </div>
            </div>
            <div className="service-we-offer-step2">
              <div className="service-we-offer-number2">
                <span className="service-we-offer-text6">{props.text5}</span>
              </div>
              <div className="service-we-offer-container2">
                <span className="service-we-offer-title2">{props.title2}</span>
                <span className="service-we-offer-text7">{props.text6}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .service-we-offer-section {
            position: relative;
            background-color: var(--dl-color-scheme-green100);
          }
          .service-we-offer-max-width {
            align-items: stretch;
          }
          .service-we-offer-image {
            width: 50%;
          }
          .service-we-offer-hero-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 48px;
          }
          .service-we-offer-content {
            width: 40%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .service-we-offer-text {
            color: var(--dl-color-scheme-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .service-we-offer-text1 {
            color: var(--dl-color-scheme-white);
            font-size: 42px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.35;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .service-we-offer-step {
            display: flex;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .service-we-offer-number {
            flex: 0 0 auto;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-orange100);
          }
          .service-we-offer-text2 {
            font-size: 28px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
          }
          .service-we-offer-container {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .service-we-offer-title {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .service-we-offer-text3 {
            color: var(--dl-color-scheme-white);
            line-height: 1.5;
          }
          .service-we-offer-step1 {
            display: flex;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .service-we-offer-number1 {
            flex: 0 0 auto;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-orange100);
          }
          .service-we-offer-text4 {
            font-size: 28px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
          }
          .service-we-offer-container1 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .service-we-offer-title1 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .service-we-offer-text5 {
            color: var(--dl-color-scheme-white);
            line-height: 1.5;
          }
          .service-we-offer-step2 {
            display: flex;
            flex-direction: row;
          }
          .service-we-offer-number2 {
            flex: 0 0 auto;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-orange100);
          }
          .service-we-offer-text6 {
            font-size: 28px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
          }
          .service-we-offer-container2 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .service-we-offer-title2 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .service-we-offer-text7 {
            color: var(--dl-color-scheme-white);
            line-height: 1.5;
          }
          @media (max-width: 991px) {
            .service-we-offer-max-width {
              flex-direction: column;
            }
            .service-we-offer-image {
              width: 100%;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .service-we-offer-hero-image {
              width: 100%;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .service-we-offer-content {
              width: 100%;
              margin-left: 0px;
              margin-right: 0px;
            }
          }
          @media (max-width: 767px) {
            .service-we-offer-content {
              width: 100%;
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

ServiceWeOffer.defaultProps = {
  text5: '3',
  hero_image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ0fHxleHBlcnRzfGVufDB8fHx8MTY2MzExOTgxOQ&ixlib=rb-1.2.1&w=1200',
  text3: '2',
  text2:
    'GenesiaWood offers digital consulting services aimed at solving specific business challenges companies of different sizes and in different industries experience throughout the digital transformation of their services and processes.',
  text4:
    'With more than 10 years of expirience in the field we will develop you custom Mobile, Web, Native solutions',
  text: 'get started',
  heading: 'Services we offer',
  title2: 'Test automation',
  hero_image_alt: 'image',
  text6:
    'GenesiaWood offers full-range test automation services to help companies optimize testing time and costs and successfully shift testing left.',
  title: 'IT Consulting',
  text1: '1',
  title1: 'Software Development',
}

ServiceWeOffer.propTypes = {
  text5: PropTypes.string,
  hero_image_src: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  title2: PropTypes.string,
  hero_image_alt: PropTypes.string,
  text6: PropTypes.string,
  title: PropTypes.string,
  text1: PropTypes.string,
  title1: PropTypes.string,
}

export default ServiceWeOffer
