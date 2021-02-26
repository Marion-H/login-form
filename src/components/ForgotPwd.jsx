import { Link } from "react-router-dom";
import FormResetPassword from "./FormResetPassword";

function ForgotPwd() {
  return (
    <div className="authentication">
      <div className="titleReset">
        <h1>Reset Password</h1>
      </div>
      <div className="paragraphReset">
        Enter your email address below and we'll send you a link to reset your
        password.
      </div>
      <FormResetPassword />
      <div className="textFooterForm">
        <Link to="/">Log in</Link> or <Link to="/create">Sign up</Link>
      </div>
    </div>
  );
}

export default ForgotPwd;
