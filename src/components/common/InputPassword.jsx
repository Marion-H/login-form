import { useState } from "react";

import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

function InputPassword() {
  const [type, setType] = useState("password");
  const [iconEye, setIconEye] = useState("open");
  const dataForm = useSelector((state) => state.dataForm);
  const { password } = dataForm;
  const dispatch = useDispatch();

  const setPassword = (e) => {
    e.preventDefault();
    return dispatch({
      type: "ADD-DATA",
      payload: { ...dataForm, password: e.target.value },
    });
  };

  const isShowPwd = () => {
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
      <input
        type={type}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e)}
      />
      <span className="eyePassword" onClick={() => isShowPwd()}>
        {iconEye === "open" ? <FaEye /> : <FaEyeSlash />}
      </span>
    </div>
  );
}

export default InputPassword;
