import { BsDashSquareFill, BsPlusSquareFill } from "react-icons/bs";
import styles from "./styles.module.css";
import classNames from "classnames/bind";

const styleBinding = classNames.bind(styles);

export const CounterButton = ({ type, onClick, isActive }) => {

  const IconComponent = type === 0 ? BsDashSquareFill : BsPlusSquareFill;
  const className = styleBinding({
    container: true,
    active: isActive,
    inactive: !isActive
  });

  return <button className={className} onClick={onClick}>
    <IconComponent/>
  </button>
}