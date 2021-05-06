import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => (dispatch) => {
    console.log("fetchposts");
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      })
      
    );
    console.log("fetchposts completed");
};


export const createPosts = (postData) => (dispatch) => {
    console.log("createPosts called ");
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers : {
                'content-type': 'application/json'
            },
            body : JSON.stringify(postData),
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post,
          }))
    console.log("createPosts completed");
};

