import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonLinkPrimary from "../components/button-link-primary/ButtonLinkPrimary";
import { FaPlay } from "react-icons/fa";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "ButtonLinkPrimary",
  component: ButtonLinkPrimary,
} as ComponentMeta<typeof ButtonLinkPrimary>;

const Template: ComponentStory<typeof ButtonLinkPrimary> = (args) => (
  <ButtonLinkPrimary {...args} />
);

export const PrimaryLightStart = Template.bind({});
PrimaryLightStart.args = {
  link: "#",
  children: "ButtonLink",
  startIcon: <FaPlay />,
  styleLight: true,
};

export const PrimaryLightEnd = Template.bind({});
PrimaryLightEnd.args = {
  link: "#",
  children: "ButtonLink",
  endIcon: <FaPlay />,
  styleLight: true,
};

export const PrimaryDarkStart = Template.bind({});
PrimaryDarkStart.args = {
  link: "#",
  children: "ButtonLink",
  startIcon: <FaPlay />,
  styleLight: false,
};

export const PrimaryDarkEnd = Template.bind({});
PrimaryDarkEnd.args = {
  link: "#",
  children: "ButtonLink",
  endIcon: <FaPlay />,
  styleLight: false,
};
