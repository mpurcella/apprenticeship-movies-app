import { ComponentStory, ComponentMeta } from "@storybook/react";
import SidebarList from "../components/sidebar-list/SidebarList";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "SidebarList",
  component: SidebarList,
} as ComponentMeta<typeof SidebarList>;

const Template: ComponentStory<typeof SidebarList> = (args) => (
  <div className="w-quarter bg-black py-12">
    <SidebarList {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Popular",
  genreList: [
    {
      id: 1,
      name: "Action",
    },
    {
      id: 2,
      name: "Comedy",
    },
    {
      id: 3,
      name: "Drama",
    },
  ],
};
