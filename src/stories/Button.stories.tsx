import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/button/Button";
import { FaPlay } from "react-icons/fa";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryLightStart = Template.bind({});
PrimaryLightStart.args = {
  children: "Button",
  startIcon: <FaPlay />,
  styleLight: true,
};

export const PrimaryLightEnd = Template.bind({});
PrimaryLightEnd.args = {
  children: "Button",
  endIcon: <FaPlay />,
  styleLight: true,
};

export const PrimaryDarkStart = Template.bind({});
PrimaryDarkStart.args = {
  children: "Button",
  startIcon: <FaPlay />,
  styleLight: false,
};

export const PrimaryDarkEnd = Template.bind({});
PrimaryDarkEnd.args = {
  children: "Button",
  endIcon: <FaPlay />,
  styleLight: false,
};
