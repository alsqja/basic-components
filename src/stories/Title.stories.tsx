import { Meta, Story } from "@storybook/react";
import Title, { TitleProps } from "../components/Title";

export default {
  title: "components/Title",
  component: Title,
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Basic = Template.bind({});
Basic.args = { text: "Title" };
