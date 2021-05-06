import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postactions";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchAllPosts();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});
const mapDispatchToProps = {
  fetchAllPosts: fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
