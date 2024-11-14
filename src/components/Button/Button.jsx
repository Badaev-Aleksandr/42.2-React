import "./styles.css";

function Button({ buttonName, type }) {
 
  return (
    <button className="main-button" type={type}>
      {buttonName}
    </button>
  );
}

export default Button;
