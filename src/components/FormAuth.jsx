import { Link } from "react-router-dom";
import Axios from "axios";
import { useSelector } from "react-redux";

import InputFormSignIn from "./InputFormSignIn";
import ButtonSign from "./common/ButtonSign";
import apiUrl from "../variable/apiUrl";

import "./scss/formAuth.scss";

function FormAuth() {
  const dataForm = useSelector((state) => state.dataForm);
  const { name, password } = dataForm;

  const getUser = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post(`${apiUrl}/login/`, {
        name,
        password,
      });
      console.log(res);
    } catch (error) {
      console.log(error)
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
