import InputFormSignIn from "./InputFormSignIn";

import "./css/formCreate.scss";
import InputForm from "./common/InputForm";

function FormCreate() {
  return (
    <div className="formCreate">
      <form>
        <InputFormSignIn />
        <InputForm type="email" icon="faPhoneAlt" />
        <InputForm type="text" icon="aiOutlineMail" />
      </form>
    </div>
  );
}

export default FormCreate;
