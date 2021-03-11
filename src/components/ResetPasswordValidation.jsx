import { Link } from "react-router-dom";

function ResetPasswordValidation() {
  return (
    <div className="authentication">
      <div className="titleReset">
        <h1>Reset Password</h1>
      </div>
      <div className="paragraphReset">
      Your password has been reset. You can log in with your new password.
      </div>

      <div className="textFooterForm">
      <Link to="/">Log in</Link> or <Link to="/create">Sign up</Link>
      </div>
    </div>
  );
}

export default ResetPasswordValidation;
