import styled from "styled-components";

export interface TitleProps {
  text?: string;
}

const Title = ({ text }: TitleProps) => {
  return <Container>{text}</Container>;
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Title;
