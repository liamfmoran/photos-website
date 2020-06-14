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
        <img className="modal-photo" src={this.props.imgSrc} alt="" />
      </div>
    )
  }
}

export default Modal;
