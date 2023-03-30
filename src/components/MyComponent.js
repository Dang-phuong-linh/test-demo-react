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

    //merge state => react class
    this.setState({
      name: "Linh",
      age: Math.floor(Math.random() * 100 + 1),
    });
    // this.setState({

    // });
  }

  handleonMoverOver(event) {
    // console.log(event.pageX);
  }
  //jsx
  render() {
    return (
      <div>
        My name is {this.state.name} and i'm {this.state.age}
        <button onMouseOver={this.handleonMoverOver}>Hover me</button>
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default MyComponent;
