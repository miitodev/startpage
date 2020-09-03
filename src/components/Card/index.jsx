import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const propTypes = {
  children: PropTypes.node.isRequired,
};

function Card({ children }) {
  return (
    <>
      <div className="card">
        { children }
      </div>
    </>
  );
}

Card.propTypes = propTypes;

export default Card;
