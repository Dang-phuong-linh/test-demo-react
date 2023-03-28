// class component
//function component

import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Banh Bao",
    address: "Ha Noi",
    age: 19,
  };
  handleClick(event) {
    console.log("Click me button");
    console.log("My name is ", this.state.name); //sau fix loi
  }

  handleonMoverOver(event) {
    console.log(event.pageX);
  }
  //jsx
  render() {
    return (
      <div>
        My name is {this.state.name} and i'm from {this.state.address}
        <button onMouseOver={this.handleonMoverOver}>Hover me</button>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;
