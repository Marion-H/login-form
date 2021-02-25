import { FaFacebook, FaGooglePlus } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import FormCreate from "./FormCreate";
import "./scss/createAccount.scss";

const renderListFooter = () => {
  return (
    <div className="footerCreatePage">
      <span className="textFooterForm">
        Or create account using social media
      </span>
      <ul>
        <li>
          <FaFacebook />
        </li>
        <li>
          <AiFillTwitterCircle />
        </li>
        <li>
          <FaGooglePlus />
        </li>
      </ul>
    </div>
  );
};

function CreateAccount() {
  return (
    <div className="createAccount">
      <div className="titleForm">
        <h2>Create your account</h2>
      </div>
      <FormCreate />
      {renderListFooter()}
    </div>
  );
}

export default CreateAccount;
