import React from "react";
import { Helmet, HelmetProps } from "react-helmet";

const SEO = ({ title }: Pick<HelmetProps, "title">) => (
  <Helmet title={title} titleTemplate="%s | Trackly" defaultTitle="Trackly" />
);

export default SEO;
