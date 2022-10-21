import { Meta, Story } from "@storybook/react";
import styled from "styled-components";
import Modal, { ModalProps } from "../components/Modal";

export default {
  title: "components/Modal",
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => <ModalContainer {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: <div>모달 예시</div>,
  width: 360,
  handleModal: () => alert("modal off"),
};

const ModalContainer = styled(Modal)`
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
