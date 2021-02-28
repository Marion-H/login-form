import { Link } from "react-router-dom";
import Axios from "axios";
import { useSelector } from "react-redux";

import ButtonSign from "./common/ButtonSign";
import apiUrl from "../variable/apiUrl";
import { notifyError, notifySuccess } from "./common/toastifyFunction";

import "./scss/formAuth.scss";
import InputForm from "./common/InputForm";

function FormAuth() {
  const dataForm = useSelector((state) => state.dataForm);
  const { name, password } = dataForm;

  const getLoginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post(`${apiUrl}/login`, {
        name,
        password,
      });
      const { token, uuid } = res.data;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("uuid", uuid);
      const message = "Connected"
      notifySuccess(message)
    } catch (error) {
      const { message } = error.response.data;
      notifyError(message);
    }
  };

  return (
    <div className="formAuth">
      <form onSubmit={getLoginUser}>
      <InputForm type="text" icon="BsFillPersonFill" keyName="name" placeholder="Username"/>
      <InputForm type="password" icon="RiLockPasswordFill" keyName="password" placeholder="Password"/>
        <span className="textUnderInput">
          <Link to="/forgotPassword">Forgot your password ?</Link>
        </span>
        <ButtonSign text="Sign in" action="login" />
      </form>
    </div>
  );
}

export default FormAuth;
