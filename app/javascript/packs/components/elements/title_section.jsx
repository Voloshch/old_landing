import React from "react";
import { Translate } from "@davidqhr/react-i18nify";

const TitleSection = ({ title }) => (
  <Translate value={title} className="section-title" tag="h1" />
);

export default TitleSection;
