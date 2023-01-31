import { Meta, Story } from "@storybook/react";
import { AnimatedBarChart } from "../components/Chart/AninatedBarChart";

export default {
  title: "components/Chart/AnimatedBarChart",
  component: AnimatedBarChart,
} as Meta;

const Template: Story = () => <AnimatedBarChart />;

export const Basic = Template.bind({});
