import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const propTypes = {
  children: PropTypes.node.isRequired,
};

function CenterContainer({ children }) {
  return (
    <div className="centerContainer">
      { children }
    </div>
  );
}

CenterContainer.propTypes = propTypes;

export default CenterContainer;
