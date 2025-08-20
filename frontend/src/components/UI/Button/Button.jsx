import classes from "./Button.module.scss";

const Button = ({ text, onClick = () => null, type = "button", isDisabled = false }) => {
  return (
    <button
      onClick={(e) => onClick(e)}
      className={`${classes.button} ${isDisabled ? classes.disabled : ""}`}
      type={type}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};
export default Button;
