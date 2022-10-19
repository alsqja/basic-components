import { Meta, Story } from "@storybook/react";
import { BasicButton, BasicButtonProps } from "../components/BasicButton";

export default {
  title: "components/BasicButton",
  component: BasicButton,
} as Meta;

const Template: Story<BasicButtonProps> = (args) => (
  <BasicButton {...args}>버튼</BasicButton>
);

export const PrimaryMini = Template.bind({});
PrimaryMini.args = {
  colorType: "primary",
  size: "mini",
  borderRadius: 4,
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  ...PrimaryMini.args,
  size: "small",
};

export const NormalMedium = Template.bind({});
NormalMedium.args = {
  colorType: "normal",
  size: "medium",
  borderRadius: 4,
};

export const DarkGreenBig = Template.bind({});
DarkGreenBig.args = {
  colorType: "darkGreen",
  size: "big",
  borderRadius: 4,
};
