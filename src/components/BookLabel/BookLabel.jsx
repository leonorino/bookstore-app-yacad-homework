import styles from "./styles.module.css";

export const BookLabel = ({ book }) => {
  return <div className={styles.container}>
    <h4 style={{marginTop: 0}}><b>{book.name}</b></h4>
    <p style={{color: "gray",}}>
      {book.genre}<br/>
      {book.author}<br/>
      {book.rating}<br/>
    </p>
    <h4 style={{marginBottom: 0}}>{book.price} ₽</h4>
  </div>;
}