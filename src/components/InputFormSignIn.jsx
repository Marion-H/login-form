import { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";


function InputFormSignIn() {

  const [type, setType] = useState("password");
  const [iconEye, setIconEye] = useState("open");

  const showPwd = () => {
    if (type === "password") {
      setIconEye("close");
      return setType("text");
    } else {
      setIconEye("open");
      return setType("password");
    }
  };

  return (
    <>
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
        <span class="eyePassword" onClick={() => showPwd()}>
          {iconEye === "open" ? <FaEye /> : <FaEyeSlash />}
        </span>
      </div>
    </>
  );
}

export default InputFormSignIn;
