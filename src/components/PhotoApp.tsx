import React from 'react';
import './PhotoApp.css';
import PhotoGrid from './grid';

import alligator from '../images/alligator.jpg'
import cat from '../images/cat.png'
import dog from '../images/dog.jpg'
import goat from '../images/goat.jpg'
import porcupine from '../images/porcupine.jpg'
import racoon from '../images/racoon.jpg'
import shiba from '../images/shiba.jpg'
import wolf from '../images/wolf.jpg'

class PhotoApp extends React.Component {
  images = [alligator, cat, dog, goat, porcupine, racoon, shiba, wolf]

  render() {
    return (
      <div className="PhotoApp">
        <header className="PhotoApp-header">
          <PhotoGrid imgSrcs={this.images} />
        </header>
      </div >
    )
  }
}

export default PhotoApp;
