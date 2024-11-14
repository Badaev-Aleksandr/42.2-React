import "./styles.css";

function Input({ name, type, placeholder, label, labelName }) {
  return (
    <div className="input-label-wrapper">
      <label for={label}>{labelName}</label>
      <input
        name={name}
        type={type}
        id={label}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Input;
