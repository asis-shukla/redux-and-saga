import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllPosts } from "../../actions/blogs";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.props.fetchPosts();
  }

  render() {
    if (this.props.posts && this.props.posts.length > 0) {
      return (
        <div style={{ margin: "10px" }}>
          <h1> Posts </h1>
          {this.props.posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
