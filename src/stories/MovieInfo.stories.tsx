import { ComponentStory, ComponentMeta } from "@storybook/react";
import MovieInfo from "../components/movie-info/MovieInfo";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "MovieInfo",
  component: MovieInfo,
} as ComponentMeta<typeof MovieInfo>;

const Template: ComponentStory<typeof MovieInfo> = (args) => (
  <div className="px-48 pt-102 pb-68 lg:py-56">
    <MovieInfo {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  credits: {
    cast: [
      {
        name: "Test",
        id: 1,
        profile_path: null,
        character: "Bobby Peru",
      },
      {
        name: "Test",
        id: 2,
        profile_path: null,
        character: "Bobby Peru",
      },
      {
        name: "Test",
        id: 3,
        profile_path: null,
        character: "Bobby Peru",
      },
      {
        name: "Test",
        id: 4,
        profile_path: null,
        character: "Bobby Peru",
      },
      {
        name: "Test",
        id: 5,
        profile_path: null,
        character: "Bobby Peru",
      },
      {
        name: "Test",
        id: 6,
        profile_path: null,
        character: "Bobby Peru",
      },
    ],
  },
  genres: [
    {
      id: 1,
      name: "Action",
    },
    {
      id: 2,
      name: "Comedy",
    },
    {
      id: 3,
      name: "Thriller",
    },
  ],
  homepage: "https://www.dc.com/BlackAdam",
  imdbId: "tt14656632",
  overview:
    "Renegade bounty hunter Ryan Swan must carve his way through the Hawaiian crime world to wreak vengeance on the kingpin who murdered his father.",
  posterPath: null,
  recommendations: {
    results: [
      {
        id: 1,
        poster_path: null,
        title: "Twin Peaks",
        vote_average: 9.5,
      },
      {
        id: 2,
        poster_path: null,
        title: "Superbad",
        vote_average: 8,
      },
      {
        id: 3,
        poster_path: null,
        title: "Wind River",
        vote_average: 7,
      },
      {
        id: 4,
        poster_path: null,
        title: "Twin Peaks",
        vote_average: 9.5,
      },
      {
        id: 5,
        poster_path: null,
        title: "Superbad",
        vote_average: 8,
      },
      {
        id: 6,
        poster_path: null,
        title: "Wind River",
        vote_average: 7,
      },
    ],
  },
  releaseDate: "2022-11-11",
  runtime: 93,
  spokenLanguages: [
    {
      english_name: "English",
      name: "English",
    },
  ],
  tagline: "In a galaxy far far away...",
  title: "Twin Peaks",
  videos: {
    results: [
      {
        id: 1,
        key: "N73oTiIIJe0",
        site: "YouTube",
        type: "Trailer",
      },
    ],
  },
  voteAverage: 6,
};
