import words from '../fixtures/words.json';
import { UPDATE_SEARCH_TERM } from '../actions/wordActions';

const initialState = {
  dictionary: [...words],
  searchTerm: ''
};

export default function wordsReducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
  }
  return state;
}
