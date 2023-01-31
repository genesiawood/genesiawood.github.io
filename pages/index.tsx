import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Section from '../components/section'
import Section1 from '../components/section1'
import ServiceWeOffer from '../components/service-we-offer'
import Section3 from '../components/section3'
import ContactUs from '../components/contact-us'
import Footer from '../components/footer'

const Index = (props) => {
  return (
    <>
      <div className="index-container">
        <Head>
          <title>GenesiaWood Home</title>
          <meta property="og:title" content="GenesiaWood Home" />
        </Head>
        <Navbar image_src="/playground_assets/genesiawoodlogo.svg"></Navbar>
        <Hero></Hero>
        <Section></Section>
        <Section1></Section1>
        <ServiceWeOffer></ServiceWeOffer>
        <Section3></Section3>
        <ContactUs></ContactUs>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .index-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Index
