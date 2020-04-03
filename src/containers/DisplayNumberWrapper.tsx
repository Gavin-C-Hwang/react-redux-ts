import DisplayNumber from '../components/DisplayNumber';
import { connect } from 'react-redux';

//mapReduxStateToReactProps
//이것과 같은 효과
//state: any = { number: store.getState().number };
//store.subscribe(() => {
//    this.setState({ number: store.getState().number });
//});
//DisplayNumber number={this.state.number}
function mapStateToProps(state: any) {
  return {
    number: state.number
  };
}

export default connect(mapStateToProps)(DisplayNumber);
/*
import store from '../Store';
import React, { Component } from 'react';
import Store from '../Store';

interface iProps {}
export default class DisplayNumberWrapper extends React.Component {
  state: any = { number: store.getState().number };

  constructor(props: iProps) {
    super(props);
    store.subscribe(() => {
      this.setState({ number: store.getState().number });
    });
  }
  render() {
    return <DisplayNumber number={this.state.number} unit={this.state.unit}></DisplayNumber>;
  }
}
*/
