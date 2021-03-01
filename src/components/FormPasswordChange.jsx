import ButtonSign from "./common/ButtonSign";
import InputForm from "./common/InputForm";

function FormPasswordChange() {
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
          <ButtonSign text="Reset password" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default FormPasswordChange;
