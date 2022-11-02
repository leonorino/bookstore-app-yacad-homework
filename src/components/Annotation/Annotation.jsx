import styles from "./styles.module.css";

export const Annotation = ({ text }) => {
  return <div className={styles.container}>
    <h4 style={{marginTop: 0}}>Аннотация</h4>
    <p style={{marginBottom: 0}}>{text}</p>
  </div>;
}