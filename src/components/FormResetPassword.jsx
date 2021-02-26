import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import InputForm from "./common/InputForm";
import ButtonSign from "./common/ButtonSign";

import "./scss/formAuth.scss";

function FormResetPassword() {

  const dataForm = useSelector((state) => state.dataForm);
  const { email } = dataForm
  const history = useHistory()

  
  return (
    <div className="formAuth">
      <form onSubmit="">
        <InputForm type="email" icon="aiOutlineMail" keyName="email" textPlaceHolder="Email"/>
        <ButtonSign text="Reset password" />
      </form>
    </div>
  );
}

export default FormResetPassword;
