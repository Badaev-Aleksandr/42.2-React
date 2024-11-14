import "./styles.css";

function Button({buttonName, type}) {
/*  console.log(props.buttonName); */
 

  return (
    <button className="main-button" type={type}>{buttonName}</button>
  );
}

export default Button;
