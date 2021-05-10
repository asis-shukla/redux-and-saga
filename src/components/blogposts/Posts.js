import { Button } from "reactstrap";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllPosts, deletePost } from "../../actions/blogs";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.props.fetchPosts();
  }

  handleClickDelete = (postId) => {
    this.props.deletePost(postId);
  };

  render() {
    if (this.props.posts && this.props.posts.length > 0) {
      return (
        <div>
          <h1> Posts </h1>
          {this.props.posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <Button
                color="danger"
                onClick={() => this.handleClickDelete(post.id)}
              >
                Delete Post
              </Button>
              <hr />
            </div>
          ))}
        </div>
      );
    } else {
      return <div> The data is loading </div>;
    }
  }
}
const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  newPost: state.posts.item,
});
const mapDispatchToProps = {
  fetchPosts: fetchAllPosts,
  deletePost: deletePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
