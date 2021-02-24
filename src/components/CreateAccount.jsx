import "./css/createAccount.scss";
import FormCreate from "./FormCreate";

function CreateAccount() {
  return (
    <div className="createPage">
      <div className="titleForm">
        <h2>Create your account</h2>
      </div>
      <FormCreate />
      <span className="textFooterForm">
        Or create account using social media
      </span>
    </div>
  );
}

export default CreateAccount;
