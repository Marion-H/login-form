import { ToastContainer } from "react-toastify";
import Router from "./components/Router";

import "react-toastify/dist/ReactToastify.css";
import "./app.scss";


function App() {
  return (
    <div className="app">
      <Router />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
