// class component
//function component

import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Dang Phuong Linh", age: "18" },
      { id: 2, name: "Banh Bao", age: "26" },
      { id: 3, name: "Em be", age: "69" },
    ],
  };
  //jsx
  render() {
    //dry: dont repeat your self
    return (
      <div>
        <UserInfo></UserInfo>
        <br />
        <br />
        <DisplayInfo listUsers={this.state.listUsers}></DisplayInfo>
      </div>
    );
  }
}

export default MyComponent;
