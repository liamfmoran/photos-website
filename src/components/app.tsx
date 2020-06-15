import React from 'react';
import './app.css';
import Header from './header';
import Modal from './modal';
import PhotoGrid from './grid';

import alligator from '../images/alligator.jpg';
import bear from '../images/bear.jpg';
import cat from '../images/cat.png';
import dog from '../images/dog.jpg';
import fox from '../images/fox.jpg';
import giraffe from '../images/giraffe.jpg';
import goat from '../images/goat.jpg';
import lion from '../images/lion.jpg';
import monkey from '../images/monkey.jpg';
import owl from '../images/owl.jpg';
import porcupine from '../images/porcupine.jpg';
import racoon from '../images/racoon.jpg';
import shiba from '../images/shiba.jpg';
import wide from '../images/wide.jpg';
import wolf from '../images/wolf.jpg';

interface IAppProps { }

interface IAppState {
  modalImgSrc?: string;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: Readonly<IAppProps>) {
    super(props);

    this.handleSelectModalPhoto = this.handleSelectModalPhoto.bind(this);
    this.handleClickOpenModal = this.handleClickOpenModal.bind(this);

    this.state = {
      modalImgSrc: undefined
    }
  }

  images = [
    alligator,
    bear,
    cat,
    dog,
    fox,
    giraffe,
    goat,
    lion,
    monkey,
    owl,
    porcupine,
    racoon,
    shiba,
    wide,
    wolf
  ]

  handleSelectModalPhoto(photoImgSrc?: string) {
    this.setState({
      modalImgSrc: photoImgSrc
    });
  }

  handleClickOpenModal() {
    this.setState({
      modalImgSrc: undefined
    });
  }

  render() {
    return (
      <div className="app">
        <Header websiteName="Photos" websiteAuthor="Liam Moran" />
        <body className="app-body">
          <PhotoGrid imgSrcs={this.images} handleSelectPhoto={this.handleSelectModalPhoto} />
          {this.state.modalImgSrc &&
            <Modal imgSrc={this.state.modalImgSrc} handleClickModal={this.handleClickOpenModal} />
          }
        </body>
      </div >
    )
  }
}

export default App;
