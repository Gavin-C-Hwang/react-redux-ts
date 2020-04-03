import React, { Component } from 'react';

//state와 props의 선언

interface iProps {
  size: number;
  onClick: (size: number) => void;
}

interface iState {
  size: number;
}
export default class AddNumber extends React.Component {
  //state와 props의 초기값
  state: iState = { size: 0 };
  props: iProps = {
    onClick: function(size: number) {},
    size: 0
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Add Number</h1>
        <input
          type="button"
          value="+"
          onClick={(e: React.MouseEvent) => {
            this.props.onClick(this.state.size);
          }}
        />
        <input
          type="text"
          value={this.props.size}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ size: e.target.value });
          }}
        />
      </div>
    );
  }
}
