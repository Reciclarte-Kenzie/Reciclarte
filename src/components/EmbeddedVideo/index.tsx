import React from "react";
import { StyledVideoBox } from "./styles";

interface iEmbed {
  iframe: JSX.Element;
}

export const EmbeddedVideo = ({ iframe }: iEmbed) => (
  <StyledVideoBox className="embedVideo">{iframe}</StyledVideoBox>
);
