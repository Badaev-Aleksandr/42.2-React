import Button from "../Button/Button";
import Input from "../Input/Input";
import "./styles.css";
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>

function LoginForm() {
  return (
    <div className="loginForm-wrapper">
      <h3>Login form</h3>
      <div className="input-container">
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
      </div>
      <Button buttonName={"Login"} type={"submit"} />
    </div>
  );
}

export default LoginForm;
