import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Axios from "axios";

import InputFormSignIn from "./InputFormSignIn";
import InputForm from "./common/InputForm";
import ButtonSign from "./common/ButtonSign";
import apiUrl from "../variable/apiUrl";
import { notifyError, notifySuccess } from "./common/toastifyFunction";

import "./scss/formAuth.scss";

function FormCreate() {

  const dataForm = useSelector((state) => state.dataForm);
  const history = useHistory()

  const postNewUser = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(`${apiUrl}/users`, dataForm);
      const message = "User is created"
      notifySuccess(message)
      history.push("/")
    } catch (error) {
      const { message } = error.response.data;
      notifyError(message)
    }
  };
  
  return (
    <div className="formAuth">
      <form onSubmit={postNewUser}>
        <InputFormSignIn />
        <InputForm type="tel" icon="faPhoneAlt" keyName="mobile" textPlaceHolder="Mobile"/>
        <InputForm type="email" icon="aiOutlineMail" keyName="email" textPlaceHolder="Email"/>
        <ButtonSign text="Create" />
      </form>
    </div>
  );
}

export default FormCreate;
