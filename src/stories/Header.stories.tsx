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
          name: "Genre",
        },
        {
          id: 2,
          name: "Genre",
        },
        {
          id: 3,
          name: "Genre",
        },
        {
          id: 4,
          name: "Genre",
        },
        {
          id: 5,
          name: "Genre",
        },
        {
          id: 6,
          name: "Genre",
        },
        {
          id: 7,
          name: "Genre",
        },
        {
          id: 8,
          name: "Genre",
        },
        {
          id: 9,
          name: "Genre",
        },
        {
          id: 10,
          name: "Genre",
        },
        {
          id: 11,
          name: "Genre",
        },
        {
          id: 12,
          name: "Genre",
        },
        {
          id: 13,
          name: "Genre",
        },
        {
          id: 14,
          name: "Genre",
        },
        {
          id: 15,
          name: "Genre",
        },
        {
          id: 16,
          name: "Genre",
        },
        {
          id: 17,
          name: "Genre",
        },
        {
          id: 18,
          name: "Genre",
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
