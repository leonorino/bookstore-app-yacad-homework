import styles from "./styles.module.css";
import { Counter } from "../Counter/Counter";
import { BookLabel } from "../BookLabel/BookLabel";

export const Book = ({ book, alignment }) => {
  return <div className={styles.container} style={{alignItems: alignment}}>
    <BookLabel book={book}/>
    <Counter/>
  </div>;
}