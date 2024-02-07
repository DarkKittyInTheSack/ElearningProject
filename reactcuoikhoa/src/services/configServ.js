import axios from "axios";
import { getLocalStore } from "../utils/local";

const dataUser = getLocalStore("user_info");
export const https = axios.create({
  baseURL: "https://elearningnew.cybersoft.edu.vn",
  timeout: 50000,
  headers: {
    Authorization: dataUser ? "Bearer "+dataUser.accessToken : dataUser,
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOSIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNjQyMjQwMDAwMCIsIm5iZiI6MTY5MjI5MTYwMCwiZXhwIjoxNzE2NTcwMDAwfQ.NQieE27CstspN_9LUFiYBtyMo9mq5MI8l9Uvt4nc6qg"
  },
});
