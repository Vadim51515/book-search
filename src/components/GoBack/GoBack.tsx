import styles from "./GoBack.module.scss";
import goBackArrow from "assets/img/goBackArrow.svg";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
type PropsType = {
  propsClassName?: string;
  text?: string;
};
const GoBack = ({ propsClassName, text }: PropsType) => {
  const navigate = useNavigate()
  return (
    <div className={classNames(styles.container, propsClassName)} onClick={() => navigate(-1)}>
      <img className={styles.goBackArrow} src={goBackArrow} alt="<--" />
      <h4 className={styles.text}>{text}</h4>
    </div>
  );
};

export default GoBack;
