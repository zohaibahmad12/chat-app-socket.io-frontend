import { io } from "socket.io-client";
const URL = "http://localhost:3000";
const user = localStorage.getItem("user");
export const socket = io(URL, { query: { user } });
