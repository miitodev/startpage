import React from 'react';

function Link({ url, name }) {
  return (
    <li>
      <a href={url}>{name}</a>
    </li>
  );
}

export default Link;
