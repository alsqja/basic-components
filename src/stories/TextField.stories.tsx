import { Meta, Story } from "@storybook/react";
import { Dispatch, SetStateAction, useState } from "react";
import TextField from "../components/TextField";

export default {
  title: "components/TextField",
  component: TextField,
} as Meta;

interface IProps {
  title: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

const Template: Story<IProps> = (args) => {
  const [value, setValue] = useState("");

  return <TextField {...args} value={value} onChange={setValue} />;
};

export const Basic = Template.bind({});
Basic.args = {
  title: "title",
};
