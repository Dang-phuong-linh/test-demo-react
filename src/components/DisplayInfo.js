import React from "react";

class DisplayInfo extends React.Component {
  state = {
    isShowListUser: true,
  };

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    //destructuring array
    const { listUsers } = this.props;
    console.log(listUsers);
    //props = vt tat property
    return (
      <div>
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
          <div>
            {listUsers.map((user, index) => {
              console.log(">>> Check map user", user);

              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div>My age is {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default DisplayInfo;
