import React from "react";
import "./DisplayInfo.scss";
// import logo from "./../logo.svg";

//stateless vs stateful
// class DisplayInfo extends React.Component {
//   render() {
//     console.log(">>>call me render");
//     //destructuring array
//     const { listUsers } = this.props;
//     console.log(listUsers);
//     //props = vt tat property

//     //template + logic.js
//     return (
//       <div className="display-info-container">
//         {true && (
//           <>
//             {listUsers.map((user, index) => {
//               console.log(user);
//               console.log(">>> Check map user", user);

//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>
//                     <div>My name is {user.name}</div>
//                     <div>My age is {user.age}</div>
//                   </div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfo = (props) => {
  const { listUsers } = props;

  return (
    <div className="display-info-container">
      {true && (
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
