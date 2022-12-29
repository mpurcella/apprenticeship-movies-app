import { ComponentStory, ComponentMeta } from "@storybook/react";
import LoadingPage from "../components/loading/Loading";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "LoadingPage",
  component: LoadingPage,
} as ComponentMeta<typeof LoadingPage>;

const Template: ComponentStory<typeof LoadingPage> = () => <LoadingPage />;

export const Primary = Template.bind({});
