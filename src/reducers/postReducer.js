import * as actions from "../actions/postactions";

const initialState = {
  items: [],
  item: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case actions.Types.FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case actions.Types.NEW_POST:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}
