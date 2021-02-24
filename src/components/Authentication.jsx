import "./css/authentication.scss";
import FormAuth from "./FormAuth";

function authentication() {
  return (
    <div className="authentication">
      <div className="titleAuth">
        <h1>Hello</h1>
        <h2>Sign in to your account</h2>
      </div>
      <FormAuth />
      <p>
        Don't have an account ? <span>Create</span>
      </p>
    </div>
  );
}

export default authentication;
