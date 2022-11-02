import { BsDashSquareFill } from "react-icons/bs";
import styles from "./styles.module.css";

export const DecreaseButton = ({ currentCount, setCurrentCount }) => {
  return <button className={currentCount > 0 ? styles.active : styles.inActive} onClick={() => {
    if (currentCount > 0) setCurrentCount(currentCount - 1)
  }}>
    <BsDashSquareFill/>
  </button>;
}