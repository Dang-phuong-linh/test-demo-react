// class component
//function component

import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Banh Bao",
    address: "Ha Noi",
    age: 19,
  };
  //jsx
  render() {
    return (
      <div>
        My name is {this.state.name} and i'm from {this.state.address}
      </div>
    );
  }
}

export default MyComponent;
