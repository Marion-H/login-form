import InputForm from "./common/InputForm";
import InputPassword from "./common/InputPassword";

function InputFormSignIn() {
  return (
    <>
      <InputForm type="text" icon="bsFillPersonFill" keyName="name" />
      <InputPassword keyName="password" />
    </>
  );
}

export default InputFormSignIn;
