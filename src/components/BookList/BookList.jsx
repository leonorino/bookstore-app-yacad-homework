import { Book } from "../Book/Book";
import styles from "./styles.module.css";

export const BookList = ({ className, books }) => {
  return <section className={className}>
    <ul className={styles.container}>
      {books.map((book) => <li key={book.id}><Book book={book} alignment="center"/></li>)}
    </ul>
  </section>
}