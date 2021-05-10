import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {
  getAllFilters, 
  changeSearchPhrase,
  changeDurationFrom,
  changeDurationTo,
  addTag,
  removeTag,
} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeDurationFrom: duration => dispatch(changeDurationFrom(duration)),
  changeDurationTo: duration => dispatch(changeDurationTo(duration)),
  addTag: tags => dispatch(addTag(tags)),
  removeTag: tags => dispatch(removeTag(tags)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
