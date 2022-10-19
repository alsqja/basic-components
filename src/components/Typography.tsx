import { ComponentPropsWithoutRef } from "react";
import styled, { CSSObject } from "styled-components";

export type TextAttrs = Pick<
  CSSObject,
  "fontSize" | "letterSpacing" | "lineHeight"
>;
export type TypographyVariant =
  | "title1"
  | "title2"
  | "title3"
  | "body1"
  | "body2"
  | "smallest";

export interface TypographyStyleProps {
  title1: TextAttrs;
  title2: TextAttrs;
  title3: TextAttrs;
  title4: TextAttrs;
  body1: TextAttrs;
  body2: TextAttrs;
  smallest: TextAttrs;
}

export interface TypographyProps
  extends ComponentPropsWithoutRef<any>,
    Pick<
      CSSObject,
      "fontWeight" | "textDecoration" | "lineHeight" | "letterSpacing" | "color"
    > {
  variant?: TypographyVariant;
  align?: Pick<CSSObject, "textAlign">;
  fontFamily?: "Noto Sans KR" | "GMarket Sans" | string;
  ellipsis?: boolean;
}

export const typographyStyle: TypographyStyleProps = {
  title1: {
    fontSize: 36,
    letterSpacing: -0.54,
    lineHeight: 1.28,
  },
  title2: {
    fontSize: 26,
    letterSpacing: -0.8,
    lineHeight: 1.46,
  },
  title3: {
    fontSize: 16,
    letterSpacing: -0.59,
    lineHeight: 1.5,
  },
  title4: {
    fontSize: 24,
    letterSpacing: -0.8,
    lineHeight: 1.46,
  },
  body1: {
    fontSize: 14,
    letterSpacing: -0.52,
    lineHeight: 1.43,
  },
  body2: {
    fontSize: 12,
    letterSpacing: -0.45,
    lineHeight: 1.5,
  },
  smallest: {
    fontSize: 10,
    letterSpacing: -0.37,
    lineHeight: 1.5,
  },
};

const styles = ({ variant }: { variant: TypographyVariant }) =>
  ({
    ...typographyStyle,
  }[variant as TypographyVariant]);

export const Typography = styled.span.attrs((props: TypographyProps) => props)`
  ${styles};
  ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily} !important;`}
  ${({ color }) => color && `color: ${color};`}
  ${({ align }) => align && `text-align: ${align};`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
  ${({ textDecoration }) =>
    textDecoration && `text-decoration: ${textDecoration};`}
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`}
  ${({ letterSpacing }) => letterSpacing && `letter-spacing: ${letterSpacing};`}
  ${({ ellipsis }) =>
    ellipsis &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;

export default Typography;
