import React, { useState } from 'react';
import './style.css';

function Search() {
  const [formInput, setFormInput] = useState('');

  const onSubmitHandler = (e) => {
    const searchURL = '//google.ca/search?q=';

    window.location.assign(`${searchURL}${formInput}`);

    e.preventDefault();
  };

  return (
    <>
      <form className="search" onSubmit={onSubmitHandler}>
        <label className="search__caret">&gt;</label>
        <input
          className="search__bar"
          placeholder="search >"
          onChange={(e) => setFormInput(e.target.value)}
          placeholder="search with google..."
        />
        <button
          type="submit"
          className="search__btn"
        />
      </form>
    </>
  );
}

export default Search;
