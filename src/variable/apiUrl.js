let apiUrl;

if (process.env.NODE_ENV === "development") {
  apiUrl = "http://localhost:8080"
} else {
  apiUrl = "https://login-form-back.marion.hourdou.dev"
}

export default apiUrl
