import axios from "../config/axios";

export const requestCreator = ({ method, url, data }) => {
  try {
    return axios({
      method,
      url,
      data,
    });
  } catch (error) {
    return error;
  }
};
