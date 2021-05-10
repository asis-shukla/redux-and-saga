import * as actions from "../actions/blogs";

const initialState = {
  posts: [],
  item: {},
};

export default function blogs(state = initialState, action) {
  switch (action.type) {
    case actions.Types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.posts,
      };
    case actions.Types.CREATE_NEW_POST:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}
