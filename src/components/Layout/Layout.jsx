import styles from "./styles.module.css";

export const Layout = (props) => {
  return <div>
    <header className={styles.header}>
      <h2>Магазин</h2>
    </header>
    {props.children}
  </div>;
}
