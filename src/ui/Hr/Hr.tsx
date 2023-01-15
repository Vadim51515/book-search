import styles from "./Hr.module.scss";
import classNames from "classnames";
type PropsType = {
  propsClassName?: string;
};
const Hr = ({ propsClassName }: PropsType) => {
  return <hr className={classNames(styles.hr, propsClassName)} />;
};

export default Hr;
