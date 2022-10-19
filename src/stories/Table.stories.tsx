import { Meta, Story } from "@storybook/react";
import { Table } from "../components/Table/Table";

export default {
  title: "components/Table/pageTable",
  component: Table,
} as Meta;

const Template: Story = () => <Table />;

export const Basic = Template.bind({});
