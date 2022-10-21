import { Meta, Story } from "@storybook/react";
import OnePageScroll from "../components/OnePageScroll/OnePageScroll";

export default {
  title: "components/OnePageScroll",
  component: OnePageScroll,
} as Meta;

const Template: Story = () => <OnePageScroll />;

export const Basic = Template.bind({});
