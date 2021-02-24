import { useState } from "react";

import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function InputPassword() {
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
    <div className="inputPassword">
      <span className="lockPassword">
        <RiLockPasswordFill />
      </span>
      <input type={type} />
      <span class="eyePassword" onClick={() => showPwd()}>
        {iconEye === "open" ? <FaEye /> : <FaEyeSlash />}
      </span>
    </div>
  );
}

export default InputPassword;
