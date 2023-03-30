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

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state); //in ra obj cua state
  };
  //jsx
  render() {
    return (
      <div>
        My name is {this.state.name} and i'm {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
