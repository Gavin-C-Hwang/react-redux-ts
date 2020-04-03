import React, { Component } from 'react';
interface Props {
  number?: number;
  unit: string;
}

export default class DisplayNumber extends React.Component<Props> {
  props: Props = {
    number: 0,
    unit: ''
  };

  render() {
    return (
      <div>
        <h1>Display Number</h1>
        <input type="text" value={this.props.number} readOnly />
        {this.props.unit}
      </div>
    );
  }
}
