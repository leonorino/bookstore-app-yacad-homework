import styles from "./styles.module.css";
import classNames from "classnames/bind";

const styleBinding = classNames.bind(styles);

export const CounterButton = ({ children, onClick, isActive }) => {
  const className = styleBinding({
    container: true,
    active: isActive,
    inactive: !isActive
  });

  return <button className={className} onClick={onClick}>
    {children}
  </button>
}