import { Meta, Story } from "@storybook/react";
import { Dropdown, DropdownProps } from "../components/Dropdown/Dropdown";

export default {
  title: "components/Dropdown",
  component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  options: [
    {
      id: 0,
      label: "고객명",
    },
    {
      id: 1,
      label: "담당자",
    },
    {
      id: 2,
      label: "지역명키워드",
    },
  ],
  active: {
    id: 0,
    label: "고객명",
  },
  onSelected: (selected) => {},
};
