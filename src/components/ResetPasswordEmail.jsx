import { Link } from "react-router-dom";

function ResetPasswordEmail() {
  return (
    <div className="authentication">
      <div className="titleReset">
        <h1>Reset Password</h1>
      </div>
      <div className="paragraphReset">
        Check your inbox for the next steps. If you don't receive an email, and
        it's not in your spam folder this could mean you signed up with a
        different address.
      </div>

      <div className="textFooterForm">
      <Link to="/">Log in</Link> or <Link to="/create">Sign up</Link>
      </div>
    </div>
  );
}

export default ResetPasswordEmail;
