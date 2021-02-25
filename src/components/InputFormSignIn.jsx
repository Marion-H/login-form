import InputForm from "./common/InputForm";
import InputPassword from "./common/InputPassword";

function InputFormSignIn() {
  return (
    <>
      <InputForm type="text" icon="bsFillPersonFill" />
      <InputPassword name="password" />
    </>
  );
}

export default InputFormSignIn;
