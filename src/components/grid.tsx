import React from 'react';
import Photo from './photo';
import './grid.css'

interface IPhotoGridProps {
  imgSrcs: string[];
}

class PhotoGrid extends React.Component<IPhotoGridProps> {
  render() {
    return (
      <div className="PhotoGrid">
        {this.props.imgSrcs.map(imgSrc => {
          return (<Photo imgSrc={imgSrc} key={imgSrc} />)
        })}
        <div className="PhotoGrid"></div>
      </div>
    )
  }
}

export default PhotoGrid;
