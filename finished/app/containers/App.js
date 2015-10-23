import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App.jsx';
import * as ShipActions from '../actions/ship';

function mapStateToProps(state) {
  return {
    ship: state.ship
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ShipActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
