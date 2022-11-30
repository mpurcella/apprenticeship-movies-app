import { ComponentStory, ComponentMeta } from "@storybook/react";
import Sidebar from "../components/sidebar/Sidebar";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Sidebar",
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  onClick: () => null,
  closeSidebar: () => null,
};
