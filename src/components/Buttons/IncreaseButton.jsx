import { BsPlusSquareFill } from "react-icons/bs";
import styles from "./styles.module.css";

export const IncreaseButton = ({ currentCount, setCurrentCount }) => {
  return <button className={styles.active} onClick={() => setCurrentCount(currentCount + 1)}>
    <BsPlusSquareFill/>
  </button>;
}