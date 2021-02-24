import { Link } from "react-router-dom"

import FormAuth from "./FormAuth";

import "./css/authentication.scss";

function authentication() {
  return (
    <div className="authentication">
      {/* <span className="illustrationTopRight"></span> */}
      <div className="titleAuth">
        <h1>Hello</h1>
        <h2>Sign in to your account</h2>
      </div>
      <FormAuth />
      <span className="textFooterForm">
        Don't have an account ?{" "}
        <span>
          <Link to="/create">Create</Link>
        </span>
      </span>
    </div>
  );
}

export default authentication;
