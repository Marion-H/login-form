import { useDispatch, useSelector } from "react-redux";

import { AiOutlineMail } from "react-icons/ai";
import { FaEye, FaEyeSlash, FaPhoneAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";

import { setChangePassword, setDataForm } from "../store/action/data";
import { useState } from "react";

function InputForm({ icon, type, keyName, placeholder }) {
  const dataForm = useSelector((state) => state.dataForm);
  const stateKeyName = dataForm[keyName];
  const [typeInput, setTypeInput] = useState(type);
  const [iconEye, setIconEye] = useState("open");
  const dispatch = useDispatch();

  const isShowPwd = () => {
    if (typeInput === "password") {
      setIconEye("close");
      return setTypeInput("text");
    } else {
      setIconEye("open");
      return setTypeInput("password");
    }
  };

  const renderIcon = (icon) => {
    switch (icon) {
      case "AiOutlineMail":
        return <AiOutlineMail />;
      case "FaPhoneAlt":
        return <FaPhoneAlt />;
      case "RiLockPasswordFill":
        return <RiLockPasswordFill />;
      case "BsFillPersonFill":
        return <BsFillPersonFill />;
      case "FaEye":
        return <FaEye />;
      case "FaEyeSlash":
        <FaEyeSlash />;
        break;
      default:
        break;
    }
  };

  const checkKeyName = (e) => {
    if (keyName === "newPassword" || keyName === "confirmPassword") {
      return dispatch(setChangePassword(e, keyName));
    } else {
      return dispatch(setDataForm(e, keyName));
    }
  };
  return (
    <>
      <div className="inputStyle">
        <span className="iconeStyle">{renderIcon(icon)}</span>
        <input
          type={typeInput}
          placeholder={placeholder}
          value={stateKeyName}
          onChange={(e) => checkKeyName(e)}
        />
        {type === "password" && (
          <span className="eyePassword" onClick={() => isShowPwd()}>
            {iconEye === "open" ? <FaEye /> : <FaEyeSlash />}
          </span>
        )}
      </div>
    </>
  );
}

export default InputForm;
