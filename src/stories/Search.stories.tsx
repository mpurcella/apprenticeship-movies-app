import { ComponentStory, ComponentMeta } from "@storybook/react";
import Search from "../components/search/Search";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Search",
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = () => (
  <div className="max-w-576">
    <Search placeholder="Search..." />
  </div>
);

export const Primary = Template.bind({});
