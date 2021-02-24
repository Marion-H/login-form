import { Link } from "react-router-dom"

import InputFormSignIn from "./InputFormSignIn";



import "./css/formAuth.scss";
import ButtonSign from "./common/ButtonSign";

function FormAuth() {
  return (
    <div className="formAuth">
      <form>
        <InputFormSignIn />
        <span className="textUnderInput">
          <Link to="/forgotPassword">Forgot your password ?</Link>
        </span>
        <ButtonSign text="Sign in" />
      </form>
    </div>
  );
}

export default FormAuth;
