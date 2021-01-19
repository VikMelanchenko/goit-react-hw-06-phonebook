import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactActions from '../../redux/contacts-actions';

const Filter = ({ value, filter, onChange }) => (
  <label>
    Find contacts by name
    <input type="text" value={value} name={filter} onChange={onChange} />
  </label>
);

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   filter: PropTypes.string,
// };

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) =>
    dispatch(contactActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
