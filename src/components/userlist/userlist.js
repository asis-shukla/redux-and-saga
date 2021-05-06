import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { getUsersRequest } from "../../actions/users";

const UserListUI = ({ users }) => {
  return (
    <ListGroup>
      {users.map((user) => (
        <ListGroupItem key={user.id}>{user.firstName}</ListGroupItem>
      ))}
    </ListGroup>
  );
};

class userlist extends Component {
  constructor(props) {
    super(props);
    this.props.getUsersRequest();
  }
  render() {
    const users = this.props.users;
    console.log("users is", users);
    if (users && users.length > 0) {
      return (
        <div>
          <h1> UserList component </h1>
          <div style={{ width: "30%", marginLeft: "35%" }}>
            <UserListUI users={users} />
          </div>
        </div>
      );
    } else {
      return <div> NO DATA FOUND</div>;
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
})(userlist);
