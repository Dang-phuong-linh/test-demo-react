import React, { useEffect, useState } from "react";
import "./DisplayInfo.scss";
// import logo from "./../logo.svg";

//stateless vs stateful

const DisplayInfo = (props) => {
  const { listUsers } = props;

  const [isShowHideListUser, setShowHideListUser] = useState(true);
  // this.state = {
  //   isShowHideListUser: true,
  // };

  const handleShowHideListUser = () => {
    // alert("click me");
    setShowHideListUser(!isShowHideListUser);
  };
  console.log("call me render");
  useEffect(() => {
    if (listUsers.length === 0) alert("you delete all user");
    console.log(">>>call me useEffect");
  }, [listUsers]);

  return (
    <div className="display-info-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "hide list users" : "show list user"}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user, index) => {
            console.log(user);
            console.log(">>> Check map user", user);
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>
                  <div>My name is {user.name}</div>
                  <div>My age is {user.age}</div>
                </div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
export default DisplayInfo;
