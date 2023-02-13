import React, { Component } from 'react';

class MyCount extends Component {
    state = {
      count: 0,
    };
  
    handleClickMore = () => {
        let newCount = this.state.count + 1;
        if (newCount <= 5) {
            this.setState({
                count: newCount,
            });
        }else{
            alert("Limite atteinte")
        }
    };
  
    handleClickLess = () => {
      let newCount = this.state.count - 1;
      if (newCount >= 0) {
        this.setState({
          count: newCount,
        });
      }else{
        alert("Limite atteinte")
      }
    };
  
    render() {
      return (
        <div>
          <button onClick={this.handleClickMore}>+</button>
          <h1>{this.state.count}</h1>
          <button onClick={this.handleClickLess}>-</button>
        </div>
      );
    }
  }
  
  export default MyCount;
  




