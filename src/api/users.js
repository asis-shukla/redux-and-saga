import axios from "axios";

const URL = "http://rem-rest-api.herokuapp.com/api";

export const getUsers = () => {
  return axios.get(URL + "/users", {
    params: {
      limit: 100,
    },
  });
};

export const createUser = ({ firstName, lastName }) => {
  return axios.post(URL + "/users", {
    firstName,
    lastName,
  });
};

export const deleteUser = ({ userId }) => {
  return axios.delete(URL + `/users/${userId}`);
};
