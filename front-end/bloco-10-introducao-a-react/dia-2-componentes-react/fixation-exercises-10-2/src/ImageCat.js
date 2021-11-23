import React from 'react';

class ImageCat extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default ImageCat;