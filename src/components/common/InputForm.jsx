import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";

function InputForm({ icon, type }) {
    
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
        <input type={type} />
      </div>
    </>
  );
}

export default InputForm;
