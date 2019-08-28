import { connect } from 'react-redux';
import { getSearchTerm } from '../selectors/wordSelectors';
import SearchForm from '../components/SearchForm';
import { updateSearchTerm } from '../actions/wordActions';

const mapStateToProps = (state) => ({
  searchTerm: getSearchTerm(state)
});

const mapDispatchFromProps = dispatch => ({
  handleChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  }
}); 

export default connect(mapStateToProps, mapDispatchFromProps)(SearchForm);
