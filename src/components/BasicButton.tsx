import styled from "styled-components";
import theme from "../styles/theme";

export interface BasicButtonProps extends React.ComponentPropsWithoutRef<any> {
  colorType: ColorType;
  /**
   * 버튼 배경색
   */
  backgroundColor?: string;
  /**
   * 버튼 텍스트 색상
   */
  color?: string;
  /**
   * 너비 100% 사용 여부
   */
  fullWidth?: boolean;
  /**
   * 버튼 너비
   */
  width?: number;
  /**
   * 버튼 높이
   */
  height?: number;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  fontSize?: string;
  /**
   * 버튼 사이즈
   */
  size: Size;
}

export type ColorType = "primary" | "darkGreen" | "normal";
export type Size = "big" | "medium" | "small" | "mini";

const SizeStyles = ({ size }: BasicButtonProps) =>
  ({
    big: {
      fontSize: 13,
      lineHeight: 1.5,
      padding: "15px 0",
      width: "138px",
      height: "60px",
    },
    medium: {
      fontSize: 13,
      lineHeight: "16px",
      padding: "0 2px",
      width: "102px",
      height: "40px",
    },
    small: {
      fontSize: 13,
      lineHeight: "16px",
      padding: "0 2px",
      width: "50px",
      height: "36px",
    },
    mini: {
      fontSize: 13,
      lineHeight: "16px",
      padding: "0 2px",
      width: "47px",
      height: "30px",
    },
  }[size]);

const typeStyles = ({ colorType }: BasicButtonProps) =>
  ({
    primary: {
      backgroundColor: theme.palette.primary,
      color: theme.palette.white,
    },
    darkGreen: {
      backgroundColor: theme.palette.darkGreen,
      color: theme.palette.white,
    },
    normal: {
      backgroundColor: theme.palette.white,
      color: theme.palette.black,
      border: `solid 1px ${theme.palette.border}`,
    },
  }[colorType]);

export const BasicButton = styled.button<BasicButtonProps>`
  cursor: pointer;
  border: none;
  /* &:nth-child(2) {
    background: #1db177;
    color: #fff;
  } */

  :focus {
    outline: none;
  }
  :hover {
    opacity: 0.9;
  }
  :active {
    opacity: 0.7;
  }
  :disabled {
    cursor: default;
    opacity: 0.5;
  }
  ${SizeStyles}
  ${typeStyles}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}px;`}
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor};`}
  ${({ color }) => color && `color: ${color};`}
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
  ${({ fullWidth, width }) =>
    !!(fullWidth || width) &&
    `
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    max-width: ${fullWidth ? "100%" : `${width}px`};
  `}
  ${({ height }) =>
    height &&
    `
    padding-top: 0;
    padding-bottom: 0;
    height: ${height}px;
  `}
  ${({ borderColor, borderWidth }) =>
    !!borderColor?.length && `border: solid ${borderColor} ${borderWidth}px;`}
`;

BasicButton.defaultProps = {
  borderWidth: 1,
  colorType: "normal",
  size: "medium",
};
