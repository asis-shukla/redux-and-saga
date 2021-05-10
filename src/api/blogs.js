import axios from "axios";

export const fetchPosts = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

export const createNewPost = ({ post }) => {
  console.log("post in api is", post);
  return axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: post.title,
    body: post.body,
    userId: 1,
  });
};
