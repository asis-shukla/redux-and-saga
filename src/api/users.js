import axios from "axios";

export const getUsers = () => {
  return axios.get("/users", {
    params: {
      limit: 1000,
    },
  });
};

export const postUser = (item) => {
  return axios.post("/users", {
    item,
  });
};
