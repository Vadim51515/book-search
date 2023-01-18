import styles from "./Input.module.scss";
import TitleForUiComponents from "ui/TitleForUiComponents/TitleForUiComponents";

type PropsType = {
  value: string;
  onChange: (v: string) => void;
  title: string;
  onEnter?: (v: string) => void;
};

const Input: React.FC<PropsType> = ({ onChange, title, value, ...props }) => {
  return (
    <div className={styles.container}>
      <TitleForUiComponents title={title} />

      <div className={styles.inputContainer}>
        <input
          onChange={(e) => onChange(e.target.value)}
          className={styles.input}
          value={value}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              //@ts-ignore
              props.onEnter?.(event.target.value as string);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Input;
