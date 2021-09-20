import axios from "axios";

export const requestGet = (endpoint) => {
  const { url, params } = endpoint;
  return axios.get(url, { params });
}