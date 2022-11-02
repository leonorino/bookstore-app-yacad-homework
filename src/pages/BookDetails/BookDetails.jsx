import styles from "./styles.module.css";
import { Book } from "../../components/Book/Book";
import { Annotation } from "../../components/Annotation/Annotation";
import { ReviewList } from "../../components/ReviewList/ReviewList";

export const BookDetails = ({ book }) => {
  return <div className={styles.container}>
    <section className={styles.topRow}>
      <Book book={book} alignment="flex-end"/>
      <Annotation text={book.annotation}/>
    </section>
    <ReviewList reviews={book.reviews}/>
  </div>;
}
