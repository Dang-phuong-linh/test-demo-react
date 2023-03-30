// class component
//function component

import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";
class MyComponent extends React.Component {
  //jsx
  render() {
    const myInfo = ["ab", "c", "c"];
    return (
      <div>
        <UserInfo></UserInfo>
        <br />
        <br />
        <DisplayInfo name="Dang Phuong Linh" age="30"></DisplayInfo>
        <hr />
        <DisplayInfo name="Banh Bao" age={11} myInfo={myInfo}></DisplayInfo>
      </div>
    );
  }
}

export default MyComponent;
