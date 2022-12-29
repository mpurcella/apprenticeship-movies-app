import { ComponentMeta, ComponentStory } from "@storybook/react";
import Hero from "../components/hero/Hero";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = () => <Hero />;

export const Primary = Template.bind({});
