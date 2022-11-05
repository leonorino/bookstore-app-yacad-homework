import { useState } from "react";
import { CounterButton } from "../CounterButton/CounterButton";
import styles from "./styles.module.css";

export const Counter = () => {
  let [currentCount, setCurrentCount] = useState(0);
  const decreaseLambda = () => {
    if (currentCount > 0) setCurrentCount(currentCount - 1);
  }
  const increaseLambda = () => {
    setCurrentCount(currentCount + 1);
  }

  return <div className={styles.container}>
    <CounterButton type={0} onClick={decreaseLambda} isActive={currentCount !== 0} />
    <p className={styles.label}>{currentCount}</p>
    <CounterButton type={1} onClick={increaseLambda} isActive={true} />
  </div>;
}
