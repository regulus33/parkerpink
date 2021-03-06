import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import aries from '../images/paintings/aries.jpg'
import BackButton from '../components/BackButton'

const paragraphStyle = {
 padding: 20
}

const headingStyle = {
  textAlign: 'center'
}

const Aries = () => (
  <Layout>
    <div className="projectContainer">
    <div>
      <img className="projectImage" src={aries}/>
    </div>
    <div className="artTalk">
      <h3 style={headingStyle}>Aries</h3>
      <p style={paragraphStyle}>
        Part one of a Zodiac Illustration project. Graphite on paper, acrylic background and additional coloring applied digitially. Aries is associated with Mars thus the red planet in the center of the composition. I chose a ram skull to evoke a sense of war, another major domain of rule for those born under this sign.

        Antlers are a powerful symbol of perseverence. When antlers are broken in battle they grow back longer. The antlers in Aries represent the miraculous resurgance of spring despite the crule, long winters covering the planet year after year since the beginning of Earth.
      </p>
      <BackButton/>
    </div>
    </div>
  </Layout>
)

export default Aries
