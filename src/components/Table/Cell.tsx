import styled from "styled-components";
import theme from "../../styles/theme";
import Typography from "../Typography";

interface ICellProps {
  minWidth?: number;
  width?: number;
  wrapWidth?: number;
  isClickable?: boolean;
  left?: boolean;
  align?: string;
  isComplete?: boolean;
  isFail?: boolean;
  ismissed?: boolean;
  isNotProgress?: boolean;
  isInfo?: boolean;
}

export const Cell = styled(Typography).attrs({
  variant: "body1",
  as: "div",
})<ICellProps>`
  padding: 8px 10px;
  display: flex;
  justify-content: ${({ align }) => align || "flex-start"};
  align-items: center;
  width: 120px;
  word-break: break-word;
  box-sizing: border-box;
  font-size: 13px;
  color: ${({ isFail }) => (isFail ? "#A7A9AC" : "#6F6C6E")};

  ${({ minWidth }) =>
    minWidth &&
    `min-width: ${minWidth}${typeof minWidth === "number" ? "px" : ""};`}
  ${({ wrapWidth, width }) =>
    width ? `width: ${width}px` : !wrapWidth ? `width: 100%;` : ``} 
  ${({ isClickable }) => isClickable && `cursor: pointer;`}
  ${({ left }) => left && `justify-content: flex-start;`}

  &:nth-of-type(3) {
    ${({ isFail, isComplete }) =>
      isFail
        ? "color:#D32027"
        : isComplete
        ? "color:#246fe1"
        : "color:#6F6C6E"};
  }

  &:nth-of-type(4) {
    color: ${({ ismissed, isNotProgress }) =>
      ismissed || isNotProgress ? "#D32027" : "#6F6C6E"};
  }
  &:nth-of-type(8) {
    u {
      letter-spacing: -0.01em;
      color: #333;
      font-weight: 500;
    }
    ${({ isInfo }) => isInfo && `padding-left:20px;`}
  }
  &:nth-of-type(9) {
    u {
      letter-spacing: -0.01em;
      color: #333;
      font-weight: 500;
    }
  }
`;

export const Row = styled.div<{ header: any }>`
  ${({ header }) =>
    header
      ? `background-color: #f9f9f9;`
      : `
    &:hover {
      background-blend-mode: multiply;
      background-image: linear-gradient(to bottom, ${theme.palette.borderGray}, ${theme.palette.borderGray});
    }
  `}
  border-bottom: 1px solid #eaeaed;
  display: flex;
  align-items: center;
  min-height: 48px;
  color: #555;
`;
