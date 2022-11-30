import { ComponentStory, ComponentMeta } from "@storybook/react";
import MovieCard from "../components/movie-card/MovieCard";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "MovieCard",
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => (
  <div className="flex">
    <MovieCard {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  imageUrl: "https://image.tmdb.org/t/p/w780/r2hGyhvNneAifk7UpwAYxrkeFO4.jpg",
  url: "#",
  title: "Road House",
  alt: "Road House",
  rating: 7,
};
