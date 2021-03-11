import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";

import ButtonSign from "./common/ButtonSign";
import InputForm from "./common/InputForm";
import apiUrl from "../variable/apiUrl";
import { notifyError, notifySuccess } from "./common/toastifyFunction";

function FormPasswordChange() {
  const { resetPasswordToken } = useParams();
  const [pwdIsSame, setPwsIsSame] = useState(false);
  const [checkRegExPwdStrong, setCheckRegExPwdStrong] = useState(false);
  const changePassword = useSelector((state) => state.changePassword);
  const { newPassword, confirmPassword } = changePassword;
  const strongRegExPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i; //eslint-disable-line
  const history = useHistory();

  const checkResetPasswordToken = async () => {
    try {
      const res = await Axios.get(`${apiUrl}/users`);
      const users = res.data;
      const userTokenFind = users.find(
        (user) => user.resetPasswordToken === resetPasswordToken
      );
      if (userTokenFind === undefined) {
        history.push("/")
      }
      
    } catch (error) {
      console.log(error)
    }
  };

  const checkPassword = () => {
    setCheckRegExPwdStrong(strongRegExPwd.test(newPassword));
    if (newPassword.length > 0) {
      if (newPassword === confirmPassword && checkRegExPwdStrong) {
        return setPwsIsSame(true);
      } else {
        setPwsIsSame(false);
      }
    }
  };
  useEffect(() => {
    checkResetPasswordToken();
    checkPassword();
  }, [
    newPassword,
    confirmPassword,
    pwdIsSame,
    checkRegExPwdStrong,
    strongRegExPwd,
  ]);

  const postNewPassword = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(`${apiUrl}/reset/${resetPasswordToken}`, {
        newPassword,
      });
      const message = "your password has been reset";
      notifySuccess(message);
      history.push("/validation");
    } catch (error) {
      const { message } = error.response.data;
      notifyError(message);
    }
  };

  const renderMessageUnderInput = () => {
    if (newPassword.length > 0) {
      if (newPassword !== confirmPassword) {
        return <span>Passwords are not the same</span>;
      } else if (newPassword === confirmPassword && !checkRegExPwdStrong) {
        return (
          <span>
            Password must have a minimum 8 characters, a number and a symbol
          </span>
        );
      }
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
          {renderMessageUnderInput()}
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
