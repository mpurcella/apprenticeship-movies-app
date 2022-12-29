import { ComponentStory, ComponentMeta } from "@storybook/react";
import Poster from "../components/poster/Poster";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Poster",
  component: Poster,
} as ComponentMeta<typeof Poster>;

const Template: ComponentStory<typeof Poster> = (args) => (
  <div className="w-quarter">
    <Poster {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  imageUrl: "https://image.tmdb.org/t/p/w780/b6IRp6Pl2Fsq37r9jFhGoLtaqHm.jpg",
  alt: "Alt Text",
};
