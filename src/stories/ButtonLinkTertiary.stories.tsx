import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonLinkTertiary from "../components/button-link-tertiary/ButtonLinkTertiary";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "ButtonLinkTertiary",
  component: ButtonLinkTertiary,
} as ComponentMeta<typeof ButtonLinkTertiary>;

const Template: ComponentStory<typeof ButtonLinkTertiary> = (args) => (
  <div className="w-quarter">
    <ButtonLinkTertiary {...args} />
  </div>
);

export const Secondary = Template.bind({});
Secondary.args = {
  url: "#",
  children: "Tertiary ButtonLink",
};
