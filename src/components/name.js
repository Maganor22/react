import React, { Component } from 'react';

class MyName extends Component {
  state = {
    name: '',
    age: '',
  };

  handleText = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleAge = (e) => {
    this.setState({
      age: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.handleText} />
        <input type="text" value={this.state.age} onChange={this.handleAge} />
        <h1>Nom : {this.state.name} / Age : {this.state.age} ans</h1>
      </div>
    );
  }
}

export default MyName;





