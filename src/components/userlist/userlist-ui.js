import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Button } from "reactstrap";

const UserListUI = ({ users }) => {
  return (
    <ListGroup>
      {users.map((user) => (
        <ListGroupItem
          key={user.id}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {`${user.firstName} ${user.lastName}`}
          <Button color="danger">Delete</Button>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default UserListUI;
