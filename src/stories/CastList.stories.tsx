import { ComponentStory, ComponentMeta } from "@storybook/react";
import CastList from "../components/cast-list/CastList";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "CastList",
  component: CastList,
} as ComponentMeta<typeof CastList>;

const Template: ComponentStory<typeof CastList> = (args) => (
  <CastList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  cast: [
    {
      name: "Test",
      id: 1,
      profile_path: null,
      character: "The Protagonist",
    },
    {
      name: "Test",
      id: 2,
      profile_path: null,
      character: "The Protagonist",
    },
    {
      name: "Test",
      id: 3,
      profile_path: null,
      character: "The Protagonist",
    },
    {
      name: "Test",
      id: 4,
      profile_path: null,
      character: "The Protagonist",
    },
    {
      name: "Test",
      id: 5,
      profile_path: null,
      character: "The Protagonist",
    },
    {
      name: "Test",
      id: 6,
      profile_path: null,
      character: "The Protagonist",
    },
  ],
};
