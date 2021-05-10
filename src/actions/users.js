export const Types = {
  GET_USERS_REQUEST: "users/get_users_request",
  GET_USERS_SUCCESS: "users/get_users_success",
  ADD_USER_REQUEST: "users/add_users_request",
  ADD_USER_SUCCESS: "users/add_users_success",
  DELETE_USER_REQUEST: "users/delete_user_request",
  USERS_ERROR: "users/user_error",
};

export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST,
});

export const getUsersSuccess = ({ items }) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: {
    items,
  },
});

export const addNewUserRequest = ({ item }) => {
  return {
    type: Types.ADD_USER_REQUEST,
    payload: {
      firstName: item.firstName,
      lastName: item.lastName,
    },
  };
};

export const deleteUserRequest = (userId) => {
  return {
    type: Types.DELETE_USER_REQUEST,
    payload: {
      userId,
    },
  };
};

export const usersError = ({ error }) => {
  return {
    type: Types.USERS_ERROR,
    payload: {
      error,
    },
  };
};
