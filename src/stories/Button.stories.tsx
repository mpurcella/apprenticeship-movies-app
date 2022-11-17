import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/button/Button";
import { FaPlay } from "react-icons/fa";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  endIcon: <FaPlay />,
};
