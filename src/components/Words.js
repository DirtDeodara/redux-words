import React from 'react';
import PropTypes from 'prop-types';

function Words({ words }) {
  const wordList = words.map((word, i) => (
    <li key={i}>
      <p>{word}</p>
    </li>
  ));

  return (
    <ul>{wordList}</ul>
  );
}

Words.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Words;
