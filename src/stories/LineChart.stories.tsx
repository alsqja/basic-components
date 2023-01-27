import { Meta, Story } from "@storybook/react";
import { LineChart, LineChartProps } from "../components/Chart/LineChart";
import { lineData } from "../data/lineData";

export default {
  title: "components/Chart/LineChart",
  component: LineChart,
} as Meta;

const Template: Story<LineChartProps> = (args) => <LineChart {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  height: 400,
  values: lineData,
};
