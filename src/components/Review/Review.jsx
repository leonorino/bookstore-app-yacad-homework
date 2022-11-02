import styles from "./styles.module.css";

export const Review = ({ review }) => {
  return <div className={styles.container}>
    <div className={styles.topRow}>
      <h4 style={{marginTop: 0}}>{review.username}</h4>
      <p style={{marginTop: 0}}>{review.rating}</p>
    </div>
    <p style={{marginBottom: 0}}>
      {review.body}
    </p>
  </div>;
}