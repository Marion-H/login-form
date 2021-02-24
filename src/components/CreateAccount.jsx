import {FaFacebook, FaGooglePlus} from "react-icons/fa"
import { AiFillTwitterCircle} from "react-icons/ai"
import FormCreate from "./FormCreate";
import "./css/createAccount.scss";

function CreateAccount() {
  return (
    <div className="createAccount">
      <div className="titleForm">
        <h2>Create your account</h2>
      </div>
      <FormCreate />
      <div className="footerCreatePage">
        <span className="textFooterForm">
          Or create account using social media
        </span>
        <ul>
          <li><FaFacebook /></li>
          <li><AiFillTwitterCircle /></li>
          <li><FaGooglePlus /></li>
        </ul>
      </div>
    </div>
  );
}

export default CreateAccount;
