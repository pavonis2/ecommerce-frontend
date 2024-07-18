import axios from "axios";
import { credentials } from "../credentials";

export const makeRequest = axios.create({
  baseURL: credentials.REACT_APP_API_URL,
  headers: {
    Authorization: "bearer " + credentials.REACT_APP_API_TOKEN,
  },
})