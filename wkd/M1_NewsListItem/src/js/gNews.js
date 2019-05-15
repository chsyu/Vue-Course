import axios from "axios";
const apiKey = "127c5255e73042c29827cffc2091d4bf";

export default axios.create({
  method: "get",
  baseURL: "https://newsapi.org/v2/everything",
  params: {
    pageSize: 4,
    page: 1
  },
  headers: {
    Authorization: apiKey
  }
});
