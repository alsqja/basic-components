const zIndex = {
  sidebar: 50,
  nav: 150,
  mapSide: 120,
  drawer: 200,
  landingSearchBar: 99,
  checkboxContainer: 9999,
  userDropDown: 99999,
  globalFloating: 100000000,
  modal: 100000010,
  snackbar: 100000011,
};

const palette = {
  primary: "#1DB177",
  primaryLight: "#1EAE98",
  primaryLighter: "#1DB177",
  darkGreen: "#66a49a",
  disabled: "#BBF0DB",
  white: "#FFFFFF",
  black: "#000000",
  blackLight: "#535C68",
  blackLighter: "#818181",
  grey: "#F8F8F8",
  grey2: "#333333",
  border: "#CDD5E1",
  borderGray: "#EAEAEA",
  shadow01: "0px 2px 8px rgba(0, 0, 0, 0.15)",
  shadow02: "0px 4px 4px rgba(0, 0, 0, 0.14)",
};

const typography = {
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

const theme = {
  palette,
  typography,
  zIndex,
};

export const media = {
  desktop: "@media screen and (min-width: 1261px)",
  mobile: "@media screen and (max-width: 767px)",
  tablet: "@media screen and (max-width: 1260px)",
  tablet_mobile: "@media (max-width: 1260px) and (min-width: 768px)",
  desktop_mobile: "@media screen and (min-width: 768px)",
  desktop_tablet: "@media screen and (min-width: 1261px)",
};

export default theme;
