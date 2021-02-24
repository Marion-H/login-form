import { FaEye } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import "./css/formAuth.scss";

// FaEyeSlash

function FormAuth() {
  return (
    <div className="formAuth">
      <form>
        <div className="inputName">
          <span className="fillPerson">
            <BsFillPersonFill />
          </span>
          <input />
        </div>
        <div className="inputPassword">
          <span className="lockPassword">
            <RiLockPasswordFill />
          </span>
          <input />
          <span class="eyePassword">
            <FaEye />
          </span>
        </div>
        <span>Forgot your password ?</span>
        <button>Sign in</button>
      </form>
    </div>
  );
}

export default FormAuth;
