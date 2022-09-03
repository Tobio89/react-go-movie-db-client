import React from "react";
import { Movie } from "src/types";
import Row from "./Row";

import styles from "./SingleMovie.module.scss";
import Tag from "./Tag";

interface Props {
  success: boolean;
  movieData: Movie;
}

function SingleMovie({ success, movieData }: Props) {
  if (!success) {
    return <div className={styles.SingleMovie}>NOT FOUND</div>;
  }

  const { title, description, runtime, mpaaRating, genre } = movieData;
  const releaseDate = new Date(movieData.releaseDate);

  return (
    <div className={styles.SingleMovie}>
      <h1>{`Movie: ${title} (${releaseDate.getFullYear()})`}</h1>
      <div className={styles.RatingAndGenre}>
        <h6>{`Rating: ${mpaaRating}`}</h6>
        <div className={styles.Genres}>
          {genre.map((g) => (
            <Tag key={g} content={g} />
          ))}
        </div>
      </div>
      <div className={styles.Table}>
        <Row title="Title:" content={title} />
        <Row title="Description:" content={description} />
        <Row title="Runtime:" content={`${runtime.toString()} minutes`} />
      </div>
    </div>
  );
}

export default SingleMovie;
