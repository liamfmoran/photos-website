import React from 'react';
import './header.css';

interface IHeaderProps {
  websiteName: string;
  websiteAuthor: string;
}

class Header extends React.Component<IHeaderProps> {
  render() {
    return (
      <header className="app-header">
        <h1><strong>{this.props.websiteName.toUpperCase()}</strong> by {this.props.websiteAuthor.toUpperCase()}</h1>
      </header>
    )
  }
}

export default Header;
