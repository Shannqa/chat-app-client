let API_URL = "https://chat-app-server-i6o1.onrender.com";

if (process.env.NODE_ENV === "development") {
  API_URL = "http://localhost:3003";
}
export { API_URL };
