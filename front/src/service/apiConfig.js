
import axios from "axios";

export function setupAPIClient(ctx) {
  //const { "unidex-token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "http://localhost:1337/api/",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  });

  // if (token) {
  //   api.defaults.headers["Authorization"] = `Bearer ${token}`;
  // }

  return api;
}