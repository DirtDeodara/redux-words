import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ searchTerm, handleChange }) {
  return (
    <form>
      <input type="text" name="searchTerm" value={searchTerm} onChange={handleChange}></input>
    </form>
  );
}

SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchForm;
