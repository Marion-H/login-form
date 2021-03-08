import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import InputForm from "./common/InputForm";
import ButtonSign from "./common/ButtonSign";

import "./scss/formAuth.scss";
import Axios from "axios";
import apiUrl from "../variable/apiUrl";

function FormResetPassword() {
  const dataForm = useSelector((state) => state.dataForm);
  const { email } = dataForm;
  const history = useHistory();

  const postEmailForReset = async (e) => {
    e.preventDefault();
    try {
      const emailSend = await Axios.post(`${apiUrl}/recover`, {
        email,
      });
      await history.push("/check-email");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="formAuth">
      <form onSubmit={postEmailForReset}>
        <InputForm
          type="email"
          icon="AiOutlineMail"
          keyName="email"
          textPlaceHolder="Email"
        />
        <ButtonSign text="Reset password" type="submit" />
      </form>
    </div>
  );
}

export default FormResetPassword;
