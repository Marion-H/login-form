import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ButtonSign from "./common/ButtonSign";
import InputForm from "./common/InputForm";

function FormPasswordChange() {
  const [pwdIsSame, setPwsIsSame] = useState(false);
  const changePassword = useSelector((state) => state.changePassword);
  const { newPassword, confirmPassword } = changePassword;

  useEffect(() => {
    if (newPassword.length > 0) {
      if (newPassword === confirmPassword) {
        return setPwsIsSame(true);
      } else {
          setPwsIsSame(false)
      }
    }
  }, [newPassword, confirmPassword, pwdIsSame]);

  return (
    <div className="authentication">
      <div className="titleReset">
        <h1>Reset Password</h1>
      </div>
      <div className="formAuth">
        <form onSubmit={() => {}}>
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
            { !pwdIsSame && <p>Le password</p> }
           <ButtonSign text="Reset password" type="submit" disabled={!pwdIsSame}/>

        </form>
      </div>
    </div>
  );
}

export default FormPasswordChange;
