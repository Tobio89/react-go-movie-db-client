import { Movie } from "src/types";

export const dummyData: Movie[] = [
  {
    title: "American Psycho",
    releaseDate: "2000/04/14",
    runtime: 102,
    mpaaRating: "R",
    reviewRating: 7.6,
    description:
      "A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.",
    genre: ["Crime", "Drama", "Horror"],
  },
  {
    title: "The Dark Knight",
    releaseDate: "2008/07/18",
    runtime: 152,
    mpaaRating: "PG-13",
    reviewRating: 9.0,
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    genre: ["Action", "Crime", "Drama"],
  },
  {
    title: "The Godfather",
    releaseDate: "1972/03/24",
    runtime: 175,
    mpaaRating: "R",
    reviewRating: 9.2,
    description:
      "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    genre: ["Crime", "Drama"],
  },
  {
    title: "The Princess Bride",
    releaseDate: "1987/10/09",
    runtime: 98,
    mpaaRating: "PG",
    reviewRating: 8.0,
    description:
      "While home sick in bed, a young boy's grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love.",
    genre: ["Adventure", "Family", "Fantasy"],
  },
  {
    title: "The Shawshank Redemption",
    releaseDate: "1994/10/14",
    runtime: 142,
    mpaaRating: "R",
    reviewRating: 9.3,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    genre: ["Drama"],
  },
];
