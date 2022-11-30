import { ComponentStory, ComponentMeta } from "@storybook/react";
import HamburgerButton from "../components/hamburger-button/HamburgerButton";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "HamburgerButton",
  component: HamburgerButton,
} as ComponentMeta<typeof HamburgerButton>;

const Template: ComponentStory<typeof HamburgerButton> = (args) => (
  <HamburgerButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  onClick: () => null,
};
