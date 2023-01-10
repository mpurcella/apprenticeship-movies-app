import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/button/Button";
import Pagination from "../components/pagination/Pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = () => (
  <Pagination>
    <Button styleLight={true} startIcon={<FaArrowLeft />} onClick={() => null}>
      Prev
    </Button>
    <Button styleLight={true} startIcon={<FaArrowRight />} onClick={() => null}>
      Next
    </Button>
  </Pagination>
);

export const Primary = Template.bind({});
