import React from 'react';
import './modal.css';

interface IModalProps {
  imgSrc: string;
  handleClickModal: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
}

class Modal extends React.Component<IModalProps> {
  render() {
    return (
      <div className="modal" onClick={this.props.handleClickModal}>
        <a href={this.props.imgSrc} target="_blank" rel="noopener noreferrer">
          <img className="modal-photo" src={this.props.imgSrc} alt="" />
        </a>
      </div>
    )
  }
}

export default Modal;
