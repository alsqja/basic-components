import { Meta, Story } from "@storybook/react";
import ScrollTable, { TableProps } from "../components/Table/ScrollTable";

export default {
  title: "components/Table/scrollTable",
  component: ScrollTable,
} as Meta;

const Template: Story<TableProps> = (args) => <ScrollTable {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  memos: [
    {
      id: 0,
      createdAt: "2022-10-19 12:33:23",
      modifiedAt: "2022-10-19 20:03:45",
      modifiedBy: "me",
      contents: "memoTable",
    },
    {
      id: 1,
      createdAt: "2022-10-19 12:33:23",
      modifiedAt: "2022-10-19 20:03:45",
      modifiedBy: "me",
      contents: "memoTable",
    },
    {
      id: 2,
      createdAt: "2022-10-19 12:33:23",
      modifiedAt: "2022-10-19 20:03:45",
      modifiedBy: "me",
      contents: "memoTable",
    },
    {
      id: 3,
      createdAt: "2022-10-19 12:33:23",
      modifiedAt: "2022-10-19 20:03:45",
      modifiedBy: "me",
      contents: "memoTable",
    },
    {
      id: 4,
      createdAt: "2022-10-19 12:33:23",
      modifiedAt: "2022-10-19 20:03:45",
      modifiedBy: "me",
      contents: "memoTable",
    },
    {
      id: 5,
      createdAt: "2022-10-19 12:33:23",
      modifiedAt: "2022-10-19 20:03:45",
      modifiedBy: "me",
      contents: "memoTable",
    },
    {
      id: 6,
      createdAt: "2022-10-19 12:33:23",
      modifiedAt: "2022-10-19 20:03:45",
      modifiedBy: "me",
      contents: "memoTable",
    },
  ],
  handleOnClick: (memo) => alert(`메모 ${memo.id} 번`),
};
