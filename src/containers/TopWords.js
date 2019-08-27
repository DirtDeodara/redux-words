import { connect } from 'react-redux';
import { getFirstWords } from '../selectors/wordSelectors';
import Words from '../components/Words';


const mapStateToProps = state => ({
  words: getFirstWords(state)
});

export default connect(mapStateToProps)(Words);
