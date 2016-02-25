
import React, { Component } from 'react-native';
import Counter from '../components/counter';
import {bindActionCreators} from 'redux';
import * as counterActions from '../actions/counteractions';
import { connect } from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;

    return (
      <Counter
        counter={state} increment = {actions.increment} decrement={actions.decrement} />
    );
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(App);