import React from 'react';
import Link from './Link';
import links from '../../links.json';
import './style.css';

function LinksContainer() {
  return (
    <div className="links_container">
      {links.column.map((item) => (
        <ul key={item.name}>
          <h2 className="links_container__title">{item.name}</h2>
          {item.link.map((item, index) => <Link key={index} url={item.url} name={item.name} />)}
        </ul>
      ))}
    </div>
  );
}

export default LinksContainer;
