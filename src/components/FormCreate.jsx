import InputFormSignIn from "./InputFormSignIn";
import InputFormSignUp from "./InputFormSignUp";

import "./css/formCreate.scss"

function FormCreate() {
  return (
    <div className="formCreate">
      <form >
        <InputFormSignIn />
        <InputFormSignUp />
      </form>
    </div>
  );
}

export default FormCreate;
