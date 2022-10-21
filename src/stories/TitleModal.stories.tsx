import { Meta, Story } from "@storybook/react";
import { ModalProps } from "../components/TitleModal";
import { TitleModal } from "../components/TitleModal/TitleModal";

export default {
  title: "components/TitleModal",
  component: TitleModal,
} as Meta;

const Template: Story<ModalProps> = (args) => <TitleModal {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: <div>Title Modal Example</div>,
  width: 360,
  onClose: () => alert("modal off"),
  title: "title",
};
