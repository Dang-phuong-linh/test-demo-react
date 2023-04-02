// class component
//function component

import React, { useState } from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";
// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "Dang Phuong Linh", age: "18" },
//       { id: 2, name: "Banh Bao", age: "26" },
//       { id: 3, name: "Em be", age: "69" },
//     ],
//   };

//   handleAddNewUser = (userObj) => {
//     console.log("check data from parent: ", userObj);
//     this.setState({ listUsers: [userObj, ...this.state.listUsers] });
//     // this.setState({ listUsers: [...this.state.listUsers, userObj] }); //this is the last obj
//   };

//   handleDeleteUser = (userId) => {
//     let listUsersClone = [...this.state.listUsers];
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId); //lọc với những cái trùng
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };
//   //jsx
//   render() {
//     //dry: dont repeat yourself
//     return (
//       <>
//         <div className="a">
//           <AddUserInfo handleAddNewUser={this.handleAddNewUser}></AddUserInfo>
//           <br />
//           <br />
//           <DisplayInfo
//             listUsers={this.state.listUsers}
//             handleDeleteUser={this.handleDeleteUser}
//           ></DisplayInfo>
//         </div>
//         <div className="b"></div>
//       </>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUsers, setListUser] = useState([
    { id: 1, name: "Dang Phuong Linh", age: "18" },
    { id: 2, name: "Banh Bao", age: "26" },
    { id: 3, name: "Em be", age: "69" },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUser([userObj, ...listUsers]);
    // this.setState({ listUsers: [userObj, ...this.state.listUsers] });
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId); //lọc với những cái trùng
    setListUser(listUsersClone);
    // this.setState({
    //   listUsers: listUsersClone,
    // });
  };
  return (
    <>
      <div className="a">
        <AddUserInfo handleAddNewUser={handleAddNewUser}></AddUserInfo>
        <br />
        <br />
        <DisplayInfo
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        ></DisplayInfo>
      </div>
      <div className="b"></div>
    </>
  );
};
export default MyComponent;
