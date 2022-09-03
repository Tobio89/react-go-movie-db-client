import Button from "@/components/ui/Button";
import React from "react";

import { dummyData } from "src/data";

import styles from "./Movies.module.scss";

interface Props {}

function Movies({}: Props) {
  return (
    <div className={styles.Movies}>
      <h1>Choose a Movie</h1>
      <div className={styles.Table}>
        {dummyData.map((movie, i) => (
          <Button
            className={styles.Button}
            key={movie.title}
            linkTo={`./movies/${i}`}
          >
            {movie.title}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Movies;
