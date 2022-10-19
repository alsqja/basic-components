import React from "react";
import styled from "styled-components";

export interface ModalProps {
  children: React.ReactNode;
  width: number;
  handleModal: (params: any) => void;
}

const Modal = ({ children, width, handleModal, ...props }: ModalProps) => {
  return (
    <Container onClick={handleModal}>
      <ModalContainer
        {...props}
        width={width}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </ModalContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

const ModalContainer = styled.div<{ width: number }>`
  width: ${({ width }) => width + "px"};
  background-color: white;
`;

export default Modal;
