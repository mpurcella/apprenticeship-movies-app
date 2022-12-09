import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "../components/header/Header";
import { StoreCtx } from "../store/store";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
  <StoreCtx.Provider
    value={{
      genres: [
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
      config: {
        baseUrl: "",
      },
    }}
  >
    <Header />
  </StoreCtx.Provider>
);

export const Primary = Template.bind({});
