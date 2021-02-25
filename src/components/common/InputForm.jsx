import { useDispatch, useSelector } from "react-redux";

import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";

import { setDataForm } from "../store/action/data";

function InputForm({ icon, type, keyName, textPlaceHolder }) {
  const dataForm = useSelector((state) => state.dataForm);
  const stateKeyName = dataForm[keyName];
  const dispatch = useDispatch();

  const renderIcon = (icon) => {
    switch (icon) {
      case "aiOutlineMail":
        return <AiOutlineMail />;
      case "faPhoneAlt":
        return <FaPhoneAlt />;
      case "riLockPasswordFill":
        return <RiLockPasswordFill />;
      case "bsFillPersonFill":
        return <BsFillPersonFill />;
      default:
        break;
    }
  };
  return (
    <>
      <div className="inputName">
        <span className="fillPerson">{renderIcon(icon)}</span>
        <input
          type={type}
          placeholder={textPlaceHolder}
          value={stateKeyName}
          onChange={(e) => dispatch(setDataForm(e, keyName))}
        />
      </div>
    </>
  );
}

export default InputForm;
