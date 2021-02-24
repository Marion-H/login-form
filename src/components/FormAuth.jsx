import { useState } from "react";

import { FaEye, FaArrowRight } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";

import "./css/formAuth.scss";

// FaEyeSlash

function FormAuth() {
  const [type, setType] = useState("password");

  const changeVisibilyPwd = () => {
    if (type === "password") {
        return setType("text")
    } else {
        return setType("password")
    }
  };

  return (
    <div className="formAuth">
      <form>
        <div className="inputName">
          <span className="fillPerson">
            <BsFillPersonFill />
          </span>
          <input type="text" />
        </div>
        <div className="inputPassword">
          <span className="lockPassword">
            <RiLockPasswordFill />
          </span>
          <input type={type} />
          <span class="eyePassword" onClick={() => changeVisibilyPwd()}>
            <FaEye />
          </span>
        </div>
        <span className="textUnderInput">
          <a href="#">Forgot your password ?</a>
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
