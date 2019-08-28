export const getWords = state => state.words.dictionary;

export const getFirstWords = (state, count = 1000) => {
  return getWords(state).slice(0, count);
};

export const getSearchTerm = (state) => {
  return state.words.searchTerm;
};

export const getTopWordsByTerm = (state, count) => {
  const searchTerm = getSearchTerm(state);
  return getWords(state).filter(word => {
    return word.includes(searchTerm);
  }).slice(0, count);
};
