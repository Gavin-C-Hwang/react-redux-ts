import React, { Component } from 'react';
import AddNumberWrapper from '../containers/AddNumberWrapper';
//import AddNumberWrapper from './AddNumber';

export default class AddNumberRoot extends React.Component {
  render() {
    return (
      <div>
        <h1>Add Number Root</h1>
        <AddNumberWrapper></AddNumberWrapper>
      </div>
    );
  }
}
