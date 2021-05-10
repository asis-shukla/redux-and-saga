import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Input, Label } from "reactstrap";
import {
  getUsersRequest,
  addNewUserRequest,
  deleteUserRequest,
} from "../../actions/users";
import { Button } from "reactstrap";
import UserListUI from "./userlist-ui";

class userlist extends Component {
  constructor(props) {
    super(props);
    this.props.getUsersRequest();
    this.state = { firstName: "", lastName: "" };
  }

  handleOnClickSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addNewUserRequest({ item: this.state });
  };

  handleOnChange = (e) => {
    console.log(e.target.value);
    this.setState({ ...this.state, [e.target.name]: e.target.value });
    console.log(this.state);
  };
  render() {
    const users = this.props.users;
    console.log("users is", users);
    if (users && users.length > 0) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "start",
            justifyContent: "space-around",
          }}
        >
          <div>
            <h1> Add New User</h1>
            <form onSubmit={this.handleOnClickSubmit}>
              <Label>New User FirstName</Label>
              <Input
                type="text"
                name="firstName"
                onChange={this.handleOnChange}
              />
              <br />
              <Label>New User LastName</Label>
              <Input
                type="text"
                name="lastName"
                onChange={this.handleOnChange}
              />
              <br />
              <Button type="submit">Submit</Button>
            </form>
          </div>
          <div style={{ width: "30%", marginLeft: "35%" }}>
            <h1> UserList component </h1>
            <UserListUI
              users={users}
              handleUserDelete={this.props.deleteUserRequest}
            />
          </div>
        </div>
      );
    } else {
      return <div> NO DATA FOUND OR DATA IS LOADING</div>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.items,
  };
};

export default connect(mapStateToProps, {
  getUsersRequest,
  addNewUserRequest,
  deleteUserRequest,
})(userlist);
