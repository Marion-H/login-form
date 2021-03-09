import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Axios from "axios";

import ButtonSign from "./common/ButtonSign";
import InputForm from "./common/InputForm";
import apiUrl from "../variable/apiUrl";

function FormPasswordChange() {
  const { resetPasswordToken } = useParams();
  const [pwdIsSame, setPwsIsSame] = useState(false);
  const changePassword = useSelector((state) => state.changePassword);
  const { newPassword, confirmPassword } = changePassword;

  useEffect(() => {
    if (newPassword.length > 0) {
      if (newPassword === confirmPassword) {
        return setPwsIsSame(true);
      } else {
        setPwsIsSame(false);
      }
    }
    console.log(resetPasswordToken);
  }, [newPassword, confirmPassword, pwdIsSame]);

  const postNewPassword = async (e) => {
    e.preventDefault();
    try {
      const passwordSend = await Axios.post(`${apiUrl}/reset/${resetPasswordToken}`, {
        newPassword,
      });
      console.log(passwordSend);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="authentication">
      <div className="titleReset">
        <h1>Reset Password</h1>
      </div>
      <div className="formAuth">
        <form onSubmit={postNewPassword}>
          <InputForm
            type="password"
            icon="RiLockPasswordFill"
            keyName="newPassword"
            placeholder="New Password"
          />
          <InputForm
            type="password"
            icon="RiLockPasswordFill"
            keyName="confirmPassword"
            placeholder="Confirm New Password"
          />
          {!pwdIsSame && <p>Passwords are not the same</p>}
          <ButtonSign
            text="Reset password"
            type="submit"
            disabled={!pwdIsSame}
          />
        </form>
      </div>
    </div>
  );
}

export default FormPasswordChange;
