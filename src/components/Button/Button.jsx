import "./styles.css";

function Button({ buttonName, type = "button" }) {
  return (
    <button className="main-button" type={type}>
      {buttonName}
    </button>
  );
}

export default Button;
