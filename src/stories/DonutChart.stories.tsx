import { Meta, Story } from "@storybook/react";
import { DonutChart } from "../components/Chart/DonutChart";

export default {
  title: "components/Chart/DonutChart",
  component: DonutChart,
} as Meta;

const Template: Story = () => <DonutChart />;

export const Basic = Template.bind({});
