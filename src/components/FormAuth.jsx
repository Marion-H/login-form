import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import ButtonSign from "./common/ButtonSign";
import apiUrl from "../variable/apiUrl";
import { notifyError, notifySuccess } from "./common/toastifyFunction";

import "./scss/formAuth.scss";
import InputForm from "./common/InputForm";
import { DELETE_DATA, LOGIN, USERNAME, UUID } from "./store/action/actionType";

function FormAuth() {
  const dataForm = useSelector((state) => state.dataForm);
  const { username, password } = dataForm;
  const history = useHistory();
  const dispatch = useDispatch();

  const getLoginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post(`${apiUrl}/login`, {
        username,
        password,
      });
      const { token, uuid} = res.data;
      await dispatch({ type: LOGIN, payload: token });
      await dispatch({ type: UUID, payload: uuid });
      await dispatch({type: USERNAME, payload: username })
      await dispatch({ type: DELETE_DATA });
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("uuid", uuid);
      const message = "Connected";
      notifySuccess(message);
      history.push("/welcome");
    } catch (error) {
      const { message } = error.response.data;
      notifyError(message);
    }
  };

  return (
    <div className="formAuth">
      <form onSubmit={getLoginUser}>
        <InputForm
          type="text"
          icon="BsFillPersonFill"
          keyName="username"
          placeholder="Username"
        />
        <InputForm
          type="password"
          icon="RiLockPasswordFill"
          keyName="password"
          placeholder="Password"
        />
        <span className="textUnderInput">
          <Link to="/forgotPassword">Forgot your password ?</Link>
        </span>
        <ButtonSign text="Sign in" action="login" />
      </form>
    </div>
  );
}

export default FormAuth;
