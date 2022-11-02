import { useState } from "react";
import { DecreaseButton } from "./DecreaseButton";
import { IncreaseButton } from "./IncreaseButton";
import styles from "./styles.module.css";

export const Counter = () => {
  let [currentCount, setCurrentCount] = useState(0);

  return <div className={styles.buttons}>
      <DecreaseButton currentCount={currentCount} setCurrentCount={setCurrentCount}/>
      <p className={styles.counter}>{currentCount}</p>
      <IncreaseButton currentCount={currentCount} setCurrentCount={setCurrentCount}/>
  </div>;
}