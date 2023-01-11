import { ReactNode } from "react";
import styles from "./Layout.module.scss";

type PropsType = {
  children?: ReactNode;
};

const Layout = ({ children }: PropsType) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
