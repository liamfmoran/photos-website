import React from 'react';
import './photo.css';

interface IPhotoProps {
  imgSrc: string;
  handleSelectPhoto: ((event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void) | undefined;
}

class Photo extends React.Component<IPhotoProps> {
  render() {
    return (
      <div className="photo">
        <img src={this.props.imgSrc} alt="" onClick={this.props.handleSelectPhoto} loading="lazy" />
      </div>
    )
  }
}

export default Photo;
