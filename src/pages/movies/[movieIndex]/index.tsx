import { GetServerSideProps } from "next";
import SingleMovie from "@/components/pageComponents/SingleMovie";

import { dummyData } from "src/data";

export default SingleMovie;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const movieIndex = context.params?.movieIndex;
  if (movieIndex && !Array.isArray(movieIndex)) {
    const movieData = dummyData[parseInt(movieIndex)];
    return {
      props: {
        success: true,
        movieData,
      },
    };
  }
  return {
    props: {
      success: false,
    },
  };
};
