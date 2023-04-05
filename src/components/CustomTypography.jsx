import { Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

export const typographyVariants = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "subtitle1",
  subtitle2: "subtitle2",
  body1: "body1",
  body2: "body2",
  caption: "caption",
  button: "button",
  overline: "overline",
};

/*
  CustomTypography is a wrapper around the Typography component that
  allows us to easily swap out the Typography component with another
  component if needed, such as an HTML tag like <p>.
  This can make it easier to switch to a different UI library or make
*/

export default function CustomTypography(props) {
  const { variant, component: Component = Typography, ...rest } = props;

  if (!typographyVariants[variant]) {
    console.error(`Invalid Typography variant: ${variant}.`);
  }

  return <Component {...rest} />;
}

CustomTypography.propTypes = {
  variant: PropTypes.oneOf(Object.keys(typographyVariants)).isRequired,
  component: PropTypes.elementType,
};
