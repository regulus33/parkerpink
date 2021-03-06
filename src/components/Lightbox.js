import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';

const LightboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
`;

export default class Lightbox extends Component {
  static propTypes = {
    paintingImages: PropTypes.array.isRequired, // eslint-disable-line
  }

  static state = {
    open: false,
  }

  render() {
    const { paintingImages } = this.props;
    return (
      <LightboxContainer>
        {paintingImages.map(image => (
          <Img
            key={image.node.childImageSharp.fluid.src}
            fluid={image.node.childImageSharp.fluid}
          />
        ))}
      </LightboxContainer>
    );
  }
}