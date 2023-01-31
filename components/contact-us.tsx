import React from 'react'

import PropTypes from 'prop-types'

const ContactUs = (props) => {
  return (
    <>
      <div className="contact-us-section gw-section-container">
        <div className="contact-us-max-width gw-max-width">
          <div className="contact-us-form">
            <div className="contact-us-questions">
              <h1 className="contact-us-text">
                <span className="contact-us-text01">
                  Frequently Asked
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="contact-us-text03">Questions</span>
              </h1>
              <form className="contact-us-form1">
                <div className="contact-us-container">
                  <span className="contact-us-text04">Email</span>
                  <input type="text" className="contact-us-textinput input" />
                  <span className="contact-us-text05">Content</span>
                  <textarea
                    cols={20}
                    className="contact-us-textarea textarea"
                  ></textarea>
                </div>
              </form>
            </div>
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="contact-us-image"
            />
          </div>
          <div className="contact-us-banner">
            <span className="contact-us-text06 before-Heading">
              {props.text}
            </span>
            <h1 className="contact-us-text07">
              <span>Push your finances to</span>
              <br></br>
              <span></span>
              <span></span>
              <span> the next level.</span>
            </h1>
            <span className="contact-us-text13">
              <span>
                Amet minim mollit non deserunt ullamco est sit
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                aliqua dolor do amet sint.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="contact-us-btns">
              <button className="contact-us-button button gw-button-transparent">
                {props.button}
              </button>
              <button className="contact-us-button1 button gw-button-gradient">
                {props.button1}
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact-us-section {
            position: relative;
            padding-top: 0px;
          }
          .contact-us-max-width {
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-us-form {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-eightunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .contact-us-questions {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-us-text {
            font-size: 42px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .contact-us-text01 {
            font-family: Urbanist;
          }
          .contact-us-text03 {
            color: var(--dl-color-scheme-orange100);
            font-family: Urbanist;
          }
          .contact-us-form1 {
            width: 100%;
            height: auto;
          }
          .contact-us-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-us-text04 {
            width: 100%;
            font-size: 14px;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Urbanist;
            font-weight: 800;
            line-height: 1.15;
            margin-bottom: var(--dl-space-space-halfunit);
            letter-spacing: 0.12px;
            text-transform: uppercase;
          }
          .contact-us-textinput {
            width: 100%;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .contact-us-text05 {
            width: 100%;
            font-size: 14px;
            font-style: normal;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Urbanist;
            font-weight: 800;
            line-height: 1.15;
            margin-bottom: var(--dl-space-space-halfunit);
            letter-spacing: 0.12px;
            text-transform: uppercase;
          }
          .contact-us-textarea {
            width: 100%;
            height: 259px;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .contact-us-image {
            width: 50%;
            object-fit: cover;
            margin-right: -200px;
          }
          .contact-us-banner {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            border-radius: 48px;
            flex-direction: column;
            background-size: cover;
            background-image: url('/playground_assets/group%2011-1200w.png');
          }
          .contact-us-text06 {
            color: var(--dl-color-scheme-lightgreen);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .contact-us-text07 {
            color: var(--dl-color-scheme-white);
            font-size: 42px;
            font-style: normal;
            text-align: center;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .contact-us-text13 {
            color: rgba(255, 255, 255, 0.6);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .contact-us-btns {
            flex: 0 0 auto;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .contact-us-button {
            font-size: 16px;
            padding-top: 12px;
            margin-right: var(--dl-space-space-unit);
            padding-left: 24px;
            padding-right: 24px;
            padding-bottom: 12px;
          }
          .contact-us-button1 {
            padding-top: 12px;
            margin-right: 0px;
            padding-left: 24px;
            padding-right: 24px;
            padding-bottom: 12px;
          }
          @media (max-width: 991px) {
            .contact-us-max-width {
              flex-direction: column;
            }
            .contact-us-questions {
              width: 60%;
            }
            .contact-us-image {
              margin-right: -100px;
            }
          }
          @media (max-width: 767px) {
            .contact-us-form {
              margin-bottom: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .contact-us-questions {
              width: 100%;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .contact-us-image {
              width: 100%;
              margin-right: 0px;
            }
            .contact-us-banner {
              padding: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .contact-us-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

ContactUs.defaultProps = {
  text10: 'Text',
  button: 'See all plans',
  text11: 'Text',
  button1: 'Get started',
  textinput_placeholder: 'placeholder',
  image_src: '/playground_assets/group%202-1200w.png',
  text: 'get started',
  image_alt: 'image',
  textarea_placeholder: 'placeholder',
}

ContactUs.propTypes = {
  text10: PropTypes.string,
  button: PropTypes.string,
  text11: PropTypes.string,
  button1: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  textarea_placeholder: PropTypes.string,
}

export default ContactUs
