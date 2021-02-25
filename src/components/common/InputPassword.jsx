import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { setDataForm} from "../store/action/data";

function InputPassword({name}) {
  console.log(name)
  const [type, setType] = useState("password");
  const [iconEye, setIconEye] = useState("open");
  const dataForm = useSelector((state) => state.dataForm);
  const { password } = dataForm;
  const dispatch = useDispatch()

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
        onChange={(e) => dispatch(setDataForm(e, name))}
      />
      <span className="eyePassword" onClick={() => isShowPwd()}>
        {iconEye === "open" ? <FaEye /> : <FaEyeSlash />}
      </span>
    </div>
  );
}

export default InputPassword;
