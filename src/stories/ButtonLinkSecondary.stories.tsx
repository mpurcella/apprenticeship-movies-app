import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonLinkSecondary from "../components/button-link-secondary/ButtonLinkSecondary";
import { BiMovie } from "react-icons/bi";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "ButtonLinkSecondary",
  component: ButtonLinkSecondary,
} as ComponentMeta<typeof ButtonLinkSecondary>;

const Template: ComponentStory<typeof ButtonLinkSecondary> = (args) => (
  <ButtonLinkSecondary {...args} />
);

export const Secondary = Template.bind({});
Secondary.args = {
  link: "#",
  children: "ButtonLink",
  startIcon: <BiMovie />,
};
