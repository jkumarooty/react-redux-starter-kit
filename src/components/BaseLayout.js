/* This should be a layout page */
import React, { PropTypes } from 'react';
import Header from '../utils/Header';

class BaseLayout extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        {this.props.children}
        <div>Footer here...</div>
      </div>
    );
  }
}

BaseLayout.propTypes = {
  children: PropTypes.object.isRequired
};

export default BaseLayout;