import React from "react";

class DisplayInfo extends React.Component {
  render() {
    //destructuring array
    const { listUsers } = this.props;
    console.log(listUsers);
    //props = vt tat property
    return (
      <div>
        {listUsers.map((user) => {
          // console.log(user);
          return (
            <div key={user.id}>
              <div>My name is {user.name}</div>
              <div>My age is {user.age}</div>
              <hr />
            </div>
          );
        })}
        {/* <div>My name is </div>
        <div>My age is </div>
        <hr />
        <div>My name is </div>
        <div>My age is</div>
        <hr />
        <div>My name is</div>
        <div>My age is</div> */}
      </div>
    );
  }
}
export default DisplayInfo;
