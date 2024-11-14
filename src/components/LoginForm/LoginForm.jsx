import Button from "../Button/Button";
import Input from "../Input/Input";
import "./styles.css";

function LoginForm() {
  return (
    <div className="loginForm-wrapper">
      <h3>Login form</h3>
      <Input
        name={"userEmail"}
        type={"email"}
        placeholder={"Enter your email"}
        label={"emailId"}
        labelName={"Email"}
      />
      <Input
        name={"userPassword"}
        type={"password"}
        placeholder={"Enter your password"}
        label={"passwordId"}
        labelName={"Password"}
      />
      <Button buttonName={"Login"} type={"reset"} />
    </div>
  );
}

export default LoginForm;
