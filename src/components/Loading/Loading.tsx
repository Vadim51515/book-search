import styles from "./Loading.module.scss";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <ReactLoading
        type="spin"
        color="var(--primary_color)"
        className={styles.spin}
      />
    </div>
  );
};

export default Loading;
