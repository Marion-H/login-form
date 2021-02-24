import InputFormSignIn from "./InputFormSignIn";

import "./css/formAuth.scss";
import InputForm from "./common/InputForm";
import ButtonSign from "./common/ButtonSign";

function FormCreate() {
  return (
    <div className="formAuth">
      <form>
        <InputFormSignIn />
        <InputForm type="email" icon="faPhoneAlt" />
        <InputForm type="text" icon="aiOutlineMail" />
        <ButtonSign text="Create" />
      </form>
    </div>
  );
}

export default FormCreate;
