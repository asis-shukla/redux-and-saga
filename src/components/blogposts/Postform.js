import React, { Component } from "react";
import { createPost } from "../../actions/blogs";
import { connect } from "react-redux";
import { Form, Label, Input, Button } from "reactstrap";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }

  onChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createPost(this.state);
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>

        <Form onSubmit={this.onSubmit}>
          <Label> Title: </Label>
          <Input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.state.title}
          />
          <br />
          <Label> Body: </Label>
          <Input
            name="body"
            onChange={this.onChange}
            value={this.state.body}
            type="textarea"
          />
          <br />
          <Button color="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, { createPost })(Postform);
