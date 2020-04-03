import React, { Component } from 'react';
import DisplayNumberWrapper from '../containers/DisplayNumberWrapper';

//import DisplayNumberWrapper from './DisplayNumber';
export default class DisplayNumberRoot extends React.Component {
  render() {
    return (
      <div>
        <h1>Display Number Root</h1>
        <DisplayNumberWrapper unit="kg"></DisplayNumberWrapper>
      </div>
    );
  }
}
