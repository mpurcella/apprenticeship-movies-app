import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonLinkSecondary from "../components/button-link-secondary/ButtonLinkSecondary";
import SidebarList from "../components/sidebar-list/SidebarList";
import { FaRegCircle } from "react-icons/fa";

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
  label: "Genres",
  children: (
    <>
      <li>
        <ButtonLinkSecondary url="#" startIcon={<FaRegCircle />}>
          Action
        </ButtonLinkSecondary>
      </li>
      <li>
        <ButtonLinkSecondary url="#" startIcon={<FaRegCircle />}>
          Comedy
        </ButtonLinkSecondary>
      </li>
      <li>
        <ButtonLinkSecondary url="#" startIcon={<FaRegCircle />}>
          Drama
        </ButtonLinkSecondary>
      </li>
    </>
  ),
};
