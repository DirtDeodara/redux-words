import { connect } from 'react-redux';
import { getFirstWords } from '../selectors/wordSelectors';
import Words from '../components/Words';


const mapStateToProps = (state, props) => ({
  words: getFirstWords(state, props.match.params.count)
});

export default connect(mapStateToProps)(Words);
