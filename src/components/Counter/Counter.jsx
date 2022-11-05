import { useState } from "react";
import { CounterButton } from "../CounterButton/CounterButton";
import { BsDashSquareFill, BsPlusSquareFill } from "react-icons/bs";
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
    <CounterButton onClick={decreaseLambda} isActive={currentCount !== 0}>
      <BsDashSquareFill/>
    </CounterButton>
    <p className={styles.label}>{currentCount}</p>
    <CounterButton onClick={increaseLambda} isActive={true}>
      <BsPlusSquareFill/>
    </CounterButton>
  </div>;
}
