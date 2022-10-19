import { Meta, Story } from "@storybook/react";
import Modal, { ModalProps } from "../components/Modal";
import { Button } from "./Button";

export default {
  title: "components/Modal",
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: (
    <div>
      <Button size="large" label="modal" />
    </div>
  ),
  width: 360,
  handleModal: () => alert("modal"),
};
