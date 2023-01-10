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
  url: "#",
  children: "ButtonLink",
  startIcon: <FaPlay />,
  styleLight: true,
  externalLink: false,
};

export const PrimaryLightEnd = Template.bind({});
PrimaryLightEnd.args = {
  url: "#",
  children: "ButtonLink",
  endIcon: <FaPlay />,
  styleLight: true,
  externalLink: false,
};

export const PrimaryDarkStart = Template.bind({});
PrimaryDarkStart.args = {
  url: "#",
  children: "ButtonLink",
  startIcon: <FaPlay />,
  styleLight: false,
  externalLink: false,
};

export const PrimaryDarkEnd = Template.bind({});
PrimaryDarkEnd.args = {
  url: "#",
  children: "ButtonLink",
  endIcon: <FaPlay />,
  styleLight: false,
  externalLink: true,
};
