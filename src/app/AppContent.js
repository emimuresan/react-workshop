import React, { Component } from 'react';

class AppContent extends Component {
  render() {
    return (
      <div className="app-content">
        <div className="app-content__session">{this.props.children}</div>
      </div>
    );
  }
}

export default AppContent;
