import { Meta, Story } from "@storybook/react";
import Login from "../components/Login";

export default {
  title: "components/Login",
  component: Login,
} as Meta;

const Template: Story = () => <Login />;

export const Basic = Template.bind({});
