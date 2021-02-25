import { Link } from "react-router-dom";
import Axios from "axios";
import { useSelector } from "react-redux";
// import { useState } from "react";

import InputFormSignIn from "./InputFormSignIn";
import ButtonSign from "./common/ButtonSign";
import apiUrl from "../variable/apiUrl";
import { notifyError, notifySuccess } from "./common/toastifyFunction";

import "./scss/formAuth.scss";

function FormAuth() {
  // const [error, setError] = useState("");
  const dataForm = useSelector((state) => state.dataForm);
  const { name, password } = dataForm;

  const getUser = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post(`${apiUrl}/login`, {
        name,
        password,
      });
      const { token, uuid } = res.data;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("uuid", uuid);
      notifySuccess()
    } catch (error) {
      const { message } = error.response.data;
      // setError(message)
      notifyError(message);
    }
  };

  return (
    <div className="formAuth">
      <form onSubmit={getUser}>
        <InputFormSignIn />
        <span className="textUnderInput">
          <Link to="/forgotPassword">Forgot your password ?</Link>
        </span>
        <ButtonSign text="Sign in" action="login" />
      </form>
    </div>
  );
}

export default FormAuth;
