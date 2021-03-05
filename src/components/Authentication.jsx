import { Link } from "react-router-dom";

import FormAuth from "./FormAuth";

import "./scss/authentication.scss";

function authentication() {
  return (
    <div className="authentication">
      {/* <span className="illustrationTopRight"></span> */}
      <div className="titleAuth">
        <h1>Hello</h1>
        <h2>Sign in to your account</h2>
      </div>
      <FormAuth />
      <div className="textFooterForm">
        Don't have an account ?{" "}
        <span>
          <Link to="/create">Create</Link>
        </span>
      </div>
    </div>
  );
}

export default authentication;
