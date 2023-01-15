import styles from "./TitleForUiComponents.module.scss";
const TitleForUiComponents = ({ title }: { title: string }) => {
  if (title) return <h5 className={styles.title}>{title}</h5>;
  else return null;
};

export default TitleForUiComponents;
