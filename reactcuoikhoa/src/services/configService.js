import axios from 'axios'
import { getLoginUserData } from '../utils/localStorageLogin'

const loginUser = getLoginUserData()
export const https = axios.create({
    baseURL: 'https://elearningnew.cybersoft.edu.vn',
    timeout: 50000,
    headers:{
        // Authorization: loginUser ? "Bearer " + loginUser.accessToken : loginUser,
        TokenCybersoft:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOSIsIkhldEhhblN0cmluZyI6IjE4LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNTk5MDQwMDAwMCIsIm5iZiI6MTY5MjI5MTYwMCwiZXhwIjoxNzE2MTM4MDAwfQ.qCglC_oyHM79HVc5mRXJfocVkww4VUpWO7ug7MWtJoY'
    }
})