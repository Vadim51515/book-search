import styles from "./Button.module.scss";
import classNames from "classnames";
type PropsType = {
  children: string;
  type?: "primary" | "default";
  onClick: () => {};
};
const Button = ({ children, type = "default", onClick }: PropsType) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        styles.button,
        { [styles.default]: type === "default" },
        { [styles.primary]: type === "primary" }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
