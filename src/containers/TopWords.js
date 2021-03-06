import { connect } from 'react-redux';
import { getTopWordsByTerm } from '../selectors/wordSelectors';
import Words from '../components/Words';


const mapStateToProps = (state, props) => ({
  words: getTopWordsByTerm(state, props.count)
});

export default connect(mapStateToProps)(Words);
