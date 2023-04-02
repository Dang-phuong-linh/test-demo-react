import React from "react";
import "./DisplayInfo.scss";
// import logo from "./../logo.svg";

class DisplayInfo extends React.Component {
  constructor(props) {
    console.log(">> Call contrucstor: 1");
    super(props);
    //babel compiler
    this.state = {
      isShowListUser: true,
    };
  }

  componentDidMount() {
    console.log(">>>Call me component did mount");
    setTimeout(() => {
      document.title = "Trang cua Banh Bao";
    }, 3000);
  }
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log(">>> call me component did update", this.props, prevProps);
    if (this.props.listUsers !== prevProps.listUsers) {
      if (this.props.listUsers.length === 5) {
        alert("you got 5 users");
      }
    }
  }
  render() {
    console.log(">>>call me render");
    //destructuring array
    const { listUsers } = this.props;
    console.log(listUsers);
    //props = vt tat property

    //template + logic.js
    return (
      <div className="display-info-container">
        {/* <img src={logo} /> */}
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true
              ? "Hide list user:"
              : "Show list user: "}
          </span>
        </div>
        {this.state.isShowListUser && (
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
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
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
  }
}
export default DisplayInfo;
