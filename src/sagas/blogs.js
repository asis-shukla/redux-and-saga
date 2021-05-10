import {
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "@redux-saga/core/effects";
import * as actions from "../actions/blogs";
import * as api from "../api/blogs";

function* getBlogs() {
  try {
    const result = yield call(api.fetchPosts);
    console.log("blogs result data is", result.data);
    yield put(actions.fetchPostsSuccess({ posts: result.data }));
  } catch (error) {
    console.log("error in getting the blogs");
  }
}

function* watchGetBlogsRequest() {
  yield takeEvery(actions.Types.FETCH_ALL_POSTS, getBlogs);
}

function* createNewPost({ payload }) {
  try {
    const resultStatus = yield call(api.createNewPost, {
      post: payload.post,
    });
    console.log(resultStatus);
    yield call(getBlogs);
  } catch (error) {
    console.log("some errror occured while creating new blog");
  }
}

function* watchCreateNewPostRequest() {
  yield takeLatest(actions.Types.CREATE_NEW_POST, createNewPost);
}

function* deletePost({ payload }) {
  try {
    yield call(api.deletePost, {
      postId: payload.postId,
    });
    yield call(getBlogs);
  } catch (error) {
    console.error("ERROR while deleting the post", error);
  }
}
function* watchDeletePostRequest() {
  yield takeLatest(actions.Types.DELETE_POST_REQUEST, deletePost);
}
const blogsSaga = [
  fork(watchGetBlogsRequest),
  fork(watchCreateNewPostRequest),
  fork(watchDeletePostRequest),
];

export default blogsSaga;
