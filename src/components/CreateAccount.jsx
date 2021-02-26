import { FaFacebook, FaGooglePlus, FaArrowLeft } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

import FormCreate from "./FormCreate";

import "./scss/createAccount.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DELETE_DATA } from "./store/action/actionType";

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

  const dispatch = useDispatch()

  const deleteDataForm = () => {
    return dispatch({type: DELETE_DATA})
  }
  return (
    <div className="createAccount">
      <Link to="/">
        <button className="buttonBack" onClick={()=>deleteDataForm()}>
          <span className="arrowButton">
            <FaArrowLeft />
          </span>
        </button>
      </Link>
      <div className="titleForm">
        <h2>Create your account</h2>
      </div>
      <FormCreate />
      {renderListFooter()}
    </div>
  );
}

export default CreateAccount;
