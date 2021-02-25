let apiUrl;

if (process.env.NODE_ENV === "development") {
  apiUrl = "http://localhost:8080"
}

export default apiUrl
