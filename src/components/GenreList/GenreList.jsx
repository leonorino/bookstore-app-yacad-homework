import { Genre } from "../Genre/Genre";
import styles from "./styles.module.css";

export const GenreList = ({ genres, currentGenre, setCurrentGenre }) => {
  return <section className={styles.container}>
    <ul>
      {
        genres.map((genre, index) => <li key={index}><button onClick={() => setCurrentGenre(genre)}><Genre genre={genre} isSelected={currentGenre === genre}/></button></li>)
      }
    </ul>
  </section>;
}
