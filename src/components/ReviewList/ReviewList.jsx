import { Review } from "../Review/Review";
import styles from "./styles.module.css";

export const ReviewList = ({ reviews }) => {
  return <section className={styles.container}>
    <ul>
      {reviews.map((review, index) => <li key={index}><Review review={review}/></li>)}
    </ul>
  </section>
}