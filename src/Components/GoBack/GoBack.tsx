import styles from "./GoBack.module.scss";
import goBackArrow from "assets/img/goBackArrow.svg";
import classNames from "classnames";

type PropsType = {
  propsClassName?: string;
  text?: string;
};
const GoBack = ({ propsClassName, text }: PropsType) => {
  return (
    <div className={classNames(styles.container, propsClassName)}>
      <img className={styles.goBackArrow} src={goBackArrow} alt="<--" />
      <h4 className={styles.text}>{text}</h4>
    </div>
  );
};

export default GoBack;
