import React from 'react'

import PropTypes from 'prop-types'

import Card from './card'

const Section3 = (props) => {
  return (
    <>
      <div className="section3-section gw-section-container">
        <div className="section3-max-width gw-max-width">
          <span className="section3-text before-Heading">{props.text}</span>
          <h1 className="section3-text1">
            <span>No matter what you do,</span>
            <br></br>
            <span>UpStart will save you money</span>
          </h1>
          <div className="section3-cards-container">
            <Card rootClassName="card-root-class-name2"></Card>
            <Card text="Personal" rootClassName="card-root-class-name"></Card>
            <Card text="Family" rootClassName="card-root-class-name1"></Card>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .section3-section {
            position: relative;
          }
          .section3-max-width {
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .section3-text {
            color: var(--dl-color-scheme-green80);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .section3-text1 {
            font-size: 42px;
            font-style: normal;
            text-align: center;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .section3-cards-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          @media (max-width: 991px) {
            .section3-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .section3-cards-container {
              flex-wrap: wrap;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Section3.defaultProps = {
  text: 'get started',
}

Section3.propTypes = {
  text: PropTypes.string,
}

export default Section3
