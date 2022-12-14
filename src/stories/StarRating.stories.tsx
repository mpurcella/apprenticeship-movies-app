import { ComponentStory, ComponentMeta } from "@storybook/react";
import StarRating from "../components/star-rating/StarRating";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "StarRating",
  component: StarRating,
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => (
  <StarRating {...args} />
);

// TMDB ratings are out of 10. StarRating divides rating by 2 in order to map stars accurately.
export const FiveStar = Template.bind({});
FiveStar.args = {
  rating: 10,
  starRatingClassName: "text-grey-500 mx-2",
};

export const FourStar = Template.bind({});
FourStar.args = {
  rating: 8,
  starRatingClassName: "text-grey-500 mx-2",
};

export const ThreeStar = Template.bind({});
ThreeStar.args = {
  rating: 6,
  starRatingClassName: "text-grey-500 mx-2",
};

export const TwoStar = Template.bind({});
TwoStar.args = {
  rating: 4,
  starRatingClassName: "text-grey-500 mx-2",
};

export const OneStar = Template.bind({});
OneStar.args = {
  rating: 2,
  starRatingClassName: "text-grey-500 mx-2",
};

export const HalfStar = Template.bind({});
HalfStar.args = {
  rating: 1,
  starRatingClassName: "text-grey-500 mx-2",
};
