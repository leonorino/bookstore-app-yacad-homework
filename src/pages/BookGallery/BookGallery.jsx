import { GenreList } from "../../components/GenreList/GenreList";
import { useState } from "react";
import { BookList } from "../../components/BookList/BookList";
import styles from "./styles.module.css";

export const BookGallery = ({ data }) => {
  const books = data.books;
  const genres = Array.from(new Set(books.map((book) => book.genre)));
  let [currentGenre, setCurrentGenre] = useState(genres[0]);

  return <div className={styles.container}>
    <GenreList genres={genres} currentGenre={currentGenre} setCurrentGenre={setCurrentGenre}/>
    <BookList className={styles.expanded} books={books.filter((book) => book.genre === currentGenre)}/>
  </div>
}
