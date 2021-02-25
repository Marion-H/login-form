import InputFormSignIn from "./InputFormSignIn";

import "./scss/formAuth.scss";
import InputForm from "./common/InputForm";
import ButtonSign from "./common/ButtonSign";

function FormCreate() {
  return (
    <div className="formAuth">
      <form>
        <InputFormSignIn />
        <InputForm type="email" icon="faPhoneAlt" />
        <InputForm type="tel" icon="aiOutlineMail" />
        <ButtonSign text="Create" />
      </form>
    </div>
  );
}

export default FormCreate;
