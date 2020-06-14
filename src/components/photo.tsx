import React from 'react';
import './photo.css';

interface IPhotoProps {
  imgSrc: string;
}

class Photo extends React.Component<IPhotoProps> {
  imageClick() {
    console.log("Eventually bring up the image.")
  }

  render() {
    return (
      // A link to the image
      <div className="Photo">
        {/* <a href="/#"> */}
        <img src={this.props.imgSrc} alt="" onClick={this.imageClick} loading="lazy" />
        {/* </a> */}
      </div>
    )
  }
}

export default Photo;
