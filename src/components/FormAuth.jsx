import { Link } from "react-router-dom"

import InputFormSignIn from "./InputFormSignIn";

import { FaArrowRight } from "react-icons/fa";

import "./css/formAuth.scss";

function FormAuth() {
  return (
    <div className="formAuth">
      <form>
        <InputFormSignIn />
        <span className="textUnderInput">
          <Link to="/forgotPassword">Forgot your password ?</Link>
        </span>
        <div className="signIn">
          <span className="textButton">Sign in</span>
          <button className="buttonSignIn">
            <span className="arrowButton">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormAuth;
