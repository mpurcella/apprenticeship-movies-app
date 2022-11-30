import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "../components/header/Header";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const Primary = Template.bind({});
