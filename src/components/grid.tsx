import React from 'react';
import Photo from './photo';
import './grid.css';

interface IPhotoGridProps {
  imgSrcs: string[];
  handleSelectPhoto: (arg0: string) => void;
}

class PhotoGrid extends React.Component<IPhotoGridProps> {
  constructor(props: Readonly<IPhotoGridProps>) {
    super(props);

    this.handleSelectPhoto = this.handleSelectPhoto.bind(this);
  }

  // Handle photo selection by setting index of selected photo
  handleSelectPhoto(photoIndex?: number) {
    if (photoIndex != null) {
      this.props.handleSelectPhoto(this.props.imgSrcs[photoIndex])
    }
  }

  render() {
    return (
      <div className="photo-grid">
        {this.props.imgSrcs.map((imgSrc, index) => {
          return (
            <Photo imgSrc={imgSrc} handleSelectPhoto={() => this.handleSelectPhoto(index)} key={index} />
          )
        })}
      </div>
    )
  }
}

export default PhotoGrid;
