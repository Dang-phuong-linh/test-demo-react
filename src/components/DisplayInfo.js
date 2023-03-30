import React from "react";

class DisplayInfo extends React.Component {
  render() {
    //destructuring array
    const { age, name } = this.props;
    //props = vt tat property
    return (
      <div>
        <div>My name is {name}</div>
        <div>My age is {age}</div>
      </div>
    );
  }
}
export default DisplayInfo;
