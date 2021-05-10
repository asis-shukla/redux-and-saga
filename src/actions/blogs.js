export const Types = {
  FETCH_ALL_POSTS: "blogs/fetch_posts_request",
  CREATE_NEW_POST: "blogs/create_new_post",
  FETCH_POSTS_SUCCESS: "blogs/fetch_posts_success",
  DELETE_POST_REQUEST: "blogs/delete_post_request",
  DELETE_POST_SUCCESS: "blogs/delete_post_success",
};

export const fetchAllPosts = () => {
  return {
    type: Types.FETCH_ALL_POSTS,
    payload: {},
  };
};

export const fetchPostsSuccess = ({ posts }) => {
  return {
    type: Types.FETCH_POSTS_SUCCESS,
    payload: {
      posts,
    },
  };
};

export const createPost = (post) => {
  return {
    type: Types.CREATE_NEW_POST,
    payload: {
      post,
    },
  };
};

export const deletePost = (postId) => {
  return {
    type: Types.DELETE_POST_REQUEST,
    payload: {
      postId: postId,
    },
  };
};
