import AddNumber from '../components/AddNumber';
import { connect } from 'react-redux';

//mapReduxDispatchToReactProps
function mapDispatchToProps(dispatch: any) {
  return {
    onClick: (size: number) => {
      dispatch({ type: 'INCREMENT', size: size });
    }
  };
}

export default connect(null, mapDispatchToProps)(AddNumber);
/*
import React, { Component } from 'react';
import store from '../Store';
interface State {
  size: number;
}
export default class AddNumberWrapper extends React.Component {
  state: State = {
    size: 0
  };
  render() {
    return (
      <AddNumber
        onClick={size => {
          store.dispatch({ type: 'INCREMENT', size: size });
        }}
      ></AddNumber>
    );
  }
}*/
